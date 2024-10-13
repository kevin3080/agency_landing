import { FeFacebook, MdiTwitter, PinterestIcon, PrimeInstagram } from "./icons";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <strong>sunnyside</strong>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className="social">
          <FeFacebook width={30} height={30} />
          <PrimeInstagram width={32} height={32} />
          <MdiTwitter width={30} height={30} />
          <PinterestIcon width={30} height={30} />
        </div>
      </div>
    </footer>
  );
};
