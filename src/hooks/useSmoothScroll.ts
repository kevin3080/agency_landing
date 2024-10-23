import { useRef } from "react";

export const useSmoothScroll = () => {
  const sectionOneRef = useRef<HTMLParagraphElement | null>(null);

  const handleScroll = () => {
    if (sectionOneRef.current) {
      sectionOneRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return { sectionOneRef, handleScroll };
}
