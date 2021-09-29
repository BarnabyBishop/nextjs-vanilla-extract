import type { NextPage } from "next";
import { themeClass, exampleStyle } from "./styles.css";

const Home: NextPage = () => {
  return (
    <div className={themeClass}>
      <div className={exampleStyle}>Here are some styles</div>
    </div>
  );
};

export default Home;
