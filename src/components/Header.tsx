import { IconArrowDown } from "./icons/IconArrowDown"

export const Header = () => {
  return (
    <header>
        <nav className="nav">
          <span className="logo">sunnyside</span>
          <ul className="nav-list">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="hero">
          <h1>We are creatives</h1>
          <IconArrowDown />
        </div>
      </header>
  )
}
