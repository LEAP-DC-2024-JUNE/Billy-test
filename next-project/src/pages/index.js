import { useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {/* <StateComponent /> */}
      <button onClick={() => setIsVisible(!isVisible)}>CLick</button>
      {isVisible && <MobileMenu />}
    </div>
  );
};

export default Home;
