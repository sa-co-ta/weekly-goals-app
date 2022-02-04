import Days from "./Days"
import GitBtn from "./GitBtn"
import "./Nav.css"

const Nav = ({ openModal }) => (
  <>
    <GitBtn />
    <nav className="nav">
      <h1 className="nav__h1">
        This
        <br />
        Week's
        <br />
        Goals
      </h1>
      <Days />
    </nav>
    <button className="btn--add-a-goal" onClick={openModal}>
      Add a goal!
    </button>
  </>
)

export default Nav
