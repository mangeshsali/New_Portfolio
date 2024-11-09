import React from "react";
import Typed from "typed.js";

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Frontend Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span
        ref={el}
        className="font-poppins font-semibold text-[1.9rem] lg:text-[1.8rem] text-regal-blue typed-cursor"
      />
    </div>
  );
}

export default MyComponent;
