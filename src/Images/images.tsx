interface devices{
  hero: string
  sectionOneImage1: string
  sectionOneImage2: string
  sectionTwoImage1: string
  sectionTwoImage2: string
  testimonialEmily: string
  testimonialThomas: string
  testimonialJennie: string
  imageGalleryCone: string
  imageGalleryOrange: string
  imageGallerySugar: string
  imageGalleryMilk: string
}

interface IMAGES{
  desktop: devices
  mobile: devices
}

export const IMAGES: IMAGES = {
  desktop: {
    hero: new URL('./desktop/image-header.jpg', import.meta.url).href,
    sectionOneImage1: new URL('./desktop/image-transform.jpg', import.meta.url).href,
    sectionOneImage2: new URL('./desktop/image-stand-out.jpg', import.meta.url).href,
    sectionTwoImage1: new URL('./desktop/image-graphic-design.jpg', import.meta.url).href,
    sectionTwoImage2: new URL('./desktop/image-photography.jpg', import.meta.url).href,
    testimonialEmily: new URL('./image-emily.jpg', import.meta.url).href,
    testimonialThomas: new URL('./image-thomas.jpg', import.meta.url).href,
    testimonialJennie: new URL('./image-jennie.jpg', import.meta.url).href,
    imageGalleryCone: new URL('./desktop/image-gallery-cone.jpg', import.meta.url).href,
    imageGalleryOrange: new URL('./desktop/image-gallery-orange.jpg', import.meta.url).href,
    imageGallerySugar: new URL('./desktop/image-gallery-sugarcubes.jpg', import.meta.url).href,
    imageGalleryMilk: new URL('./desktop/image-gallery-milkbottles.jpg', import.meta.url).href
  },
  mobile: {
    hero: new URL('./mobile/image-header.jpg', import.meta.url).href,
    sectionOneImage1: new URL('./mobile/image-transform.jpg', import.meta.url).href,
    sectionOneImage2: new URL('./mobile/image-stand-out.jpg', import.meta.url).href,
    sectionTwoImage1: new URL('./mobile/image-graphic-design.jpg', import.meta.url).href,
    sectionTwoImage2: new URL('./mobile/image-photography.jpg', import.meta.url).href,
    testimonialEmily: new URL('./image-emily.jpg', import.meta.url).href,
    testimonialThomas: new URL('./image-thomas.jpg', import.meta.url).href,
    testimonialJennie: new URL('./image-jennie.jpg', import.meta.url).href,
    imageGalleryCone: new URL('./mobile/image-gallery-cone.jpg', import.meta.url).href,
    imageGalleryOrange: new URL('./mobile/image-gallery-orange.jpg', import.meta.url).href,
    imageGallerySugar: new URL('./mobile/image-gallery-sugar-cubes.jpg', import.meta.url).href,
    imageGalleryMilk: new URL('./mobile/image-gallery-milkbottles.jpg', import.meta.url).href
  }
}
