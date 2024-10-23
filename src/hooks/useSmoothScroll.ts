import { useRef } from "react";

export const useSmoothScroll = () => {
  const sectionOneRef = useRef<HTMLParagraphElement | null>(null);
  const sectionUpRef = useRef<HTMLDivElement | null>(null);

  const scrollToSectionOne = () => {
    if (sectionOneRef.current) {
      sectionOneRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    if (sectionUpRef.current) {
      sectionUpRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return { sectionOneRef, sectionUpRef, scrollToSectionOne, scrollToTop };
}
