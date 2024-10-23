import './App.css';
import {
  Footer,
  Header,
  SectionImages,
  SectionOne,
  SectionTwo,
  Testimonials,
} from './components';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  const { sectionOneRef, sectionUpRef, scrollToTop, scrollToSectionOne } = useSmoothScroll();
  return (
    <>
      <div className="container">
        <Header onScroll={scrollToSectionOne} refScroll={sectionUpRef} />
        <SectionOne refScroll={sectionOneRef} />
        <SectionTwo />
        <Testimonials />
        <SectionImages />
        <Footer onScroll={scrollToTop} />
      </div>
    </>
  );
}

export default App;
