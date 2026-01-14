import "./App.css";
import Header from "./components/header";
import { CarouselDemo } from "./components/body";
import { AccordionDemo } from "./components/faq";
import Footer from "./components/footer";
import Body from "./components/img";
import Content from './components/content'
import Icons from './components/icons'
import { Reusable } from "./components/reusable";


function App() {
  return (
    <>
      <Header />
      <div className="flex min-h-svh flex-col items-center justify-center ">
        <Body />
        <CarouselDemo />
        {/* <Imgs /> */}
        <Icons />
        <Content />
        <Reusable />
        <AccordionDemo />
        <Footer />
        </div>
    </>
  );
}

export default App;
