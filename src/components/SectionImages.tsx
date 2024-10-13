import { IMAGES } from "../Images/images";

export const SectionImages = () => {
  return (
    <section className="images">
      <img src={IMAGES.desktop.imageGalleryMilk} alt="desc" />
      <img src={IMAGES.desktop.imageGalleryOrange} alt="desc" />
      <img src={IMAGES.desktop.imageGalleryCone} alt="desc" />
      <img src={IMAGES.desktop.imageGallerySugar} alt="desc" />
    </section>
  );
};
