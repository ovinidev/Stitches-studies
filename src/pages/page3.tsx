import {
  Link
} from "react-router-dom";

export const Page3 = () => {
  return (
    <>
      <h1>Page 3</h1>
      <Link to={"/Page1"}>Link to page 1</Link>
      <Link to={"/Page2"}>Link to page 2</Link>
    </>
  )
}