import { IMAGES } from "../Images/images";

export const SectionOne = ({refScroll}: {refScroll: React.MutableRefObject<HTMLParagraphElement | null>}) => {
  return (
    <section className="section-one">
      <div className="section-one-text">
        <div className="section-one-text-container" ref={refScroll}>
          <h2>Transform your brand</h2>

          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <a href="">Learn more</a>
        </div>
      </div>
      <div className="section-one-image">
        <img src={IMAGES.desktop.sectionOneImage1} alt="desc" />
      </div>
      <div className="section-one-image">
        <img src={IMAGES.desktop.sectionOneImage2} alt="desc" />
      </div>
      <div className="section-one-text">
        <div className="section-one-text-container">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{' '}
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
    </section>
  );
};
