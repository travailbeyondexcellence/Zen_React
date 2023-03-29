import { useState } from "react";

export default function MessageForm() {
    const [message, setMessage] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        console.log(message)
    }
    return (
        <form style={{ margin: "20px",}} onSubmit={submitHandler}>
            <h3>{message}</h3>
            <input type={"text"} placeholder="Enter the title for your blog" onChange={(event) => setMessage(event.target.value)} style={{ padding: "10px 20px"}} />
            <button>Save</button>
        </form>
    );
}