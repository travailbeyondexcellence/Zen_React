import { useState, useReducer } from "react"
import Card from "../components/Card";

const initialState = {
    name: "",
    email: "",
    role: "",
}

function reducerFunc(state, action) { // The parameter of reducer is called action which is actually the data passed to dispatch when it is called
    if(action.type === "SET_NAME") {
        return {...state, name: action.payload }
    } else if(action.type === "SET_EMAIL") {
        return {...state, email: action.payload}
    } else if(action.type === "SET_ROLE") {
        return {...state, role: action.payload}
    } else if(action.type === "CLEAR") {
        return initialState;
    } else {
        return state;
    }
}

// dispatch({ type: "SET_EMAIL", payload: event.target.value})

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    // Form state variables
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    // Call dispatch => fires reducer function => state is mutated by the reducer function

    function submitHandler(event) {
        event.preventDefault();
        setUsers(prevState => [{ id: prevState.length + 1, name: state.name, email: state.email, role: state.role }, ...prevState]);
        dispatch({ type: "CLEAR"})
    }

    return (<>
    <h1>Welcome to Users Page</h1>
    <h3>Add New User</h3>
    <form onSubmit={submitHandler}>
        <div>
            <label>Name</label>
            <input type="text" placeholder="Enter Name of the user" onChange={(event) => dispatch({ type: "SET_NAME", payload: event.target.value })} value={state.name} />
        </div>
        <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Email" onChange={(event) => dispatch({ type: "SET_EMAIL", payload: event.target.value })} value={state.email} />
        </div>
        <div>
            <label>Role</label>
            <input type="text" placeholder="Enter Role" onChange={(event) => dispatch({ type: "SET_ROLE", payload: event.target.value})} value={state.role} />
        </div>
        <button>Add</button>
    </form>
    {users.length && users.map(user => <Card key={user.id}>
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Role: {user.role}</h4>
    </Card>)}
    </>)
}