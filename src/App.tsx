import './App.css';
import {
  Footer,
  Header,
  SectionImages,
  SectionOne,
  SectionTwo,
  Testimonials,
} from './components';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SectionOne />
        <SectionTwo />
        <Testimonials />
        <SectionImages />
        <Footer />
      </div>
    </>
  );
}

export default App;
