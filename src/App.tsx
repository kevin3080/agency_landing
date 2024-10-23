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
  const { sectionOneRef, handleScroll } = useSmoothScroll();
  return (
    <>
      <div className="container">
        <Header onScroll={handleScroll} />
        <SectionOne refScroll={sectionOneRef} />
        <SectionTwo />
        <Testimonials />
        <SectionImages />
        <Footer />
      </div>
    </>
  );
}

export default App;
