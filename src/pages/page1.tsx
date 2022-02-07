import {
  Link
} from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <h1>Page 1</h1>
      <Link to={"/Page2"}>Link to page 2</Link>
      <Link to={"/Page3"}>Link to page 3</Link>
    </>
  )
}