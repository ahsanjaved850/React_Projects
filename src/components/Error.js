import { useRouteError } from "react-router-dom";


const Error = () => {
  const arr = useRouteError()
  console.log(arr)
  return (
    <div>
        <h1>Error</h1>
        <h3>{arr.data}</h3>
        <h4>{arr.statusText} : {arr.status}</h4>
    </div>
  )
}

export default Error;