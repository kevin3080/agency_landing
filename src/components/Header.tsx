import { IconArrowDown } from "./icons/IconArrowDown"

interface Props{
  onScroll: () => void
}

export const Header = ({onScroll}: Props) => {

  return (
    <header>
        <div className="nav-container">
          <span className="logo">sunnyside</span>
          <nav role="navigation" className="nav">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#"><li>About</li></a>
              <a href="#"><li>Services</li></a>
              <a href="#"><li>Projects</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
        </nav>
        </div>
        <div className="hero">
          <h1>We are creatives</h1>
          <IconArrowDown className="scroll" onScroll={onScroll} />
        </div>
      </header>
  )
}
