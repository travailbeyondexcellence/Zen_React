import { useDispatch, useSelector } from "react-redux";

export default function ShopsPage() {
  const dispatch =  useDispatch()
  const store = useSelector((store) => store);

  function clickHandler() {
    dispatch({ type: "CHANGE_APP_NAME", payload: "Umair's App"})
  }

  return (
    <>
      <h1>Welcome to {store.appName}</h1>
      <button onClick={clickHandler}>Change app name</button>
    </>
  );
}
