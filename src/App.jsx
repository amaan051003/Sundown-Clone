import React from "react";
import Nav from "./component/nav/Nav";
import HomePage from "./pages/HomePage";
import { ReactLenis } from "lenis/react";
import LoadingAnimation from "./Animation/LoadingAnimation";
import Footer from "./component/Home/footer";
import Swipe from "./component/Home/swipe";
const App = () => {
  return (

    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <LoadingAnimation>
        <>
          <Nav />
          <HomePage />
        </>
      </LoadingAnimation>
    </ReactLenis>
  );
};

export default App;
