import {
  Link
} from "react-router-dom";

export const Page2 = () => {
  return (
    <>
      <h1>Page 2</h1>
      <Link to={"/Page1"}>Link to page 1</Link>
      <Link to={"/Page3"}>Link to page 3</Link>
    </>
  )
}