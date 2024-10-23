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
      <div className="container">
      <Header />
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
