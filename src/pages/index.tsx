import type { NextPage } from "next";
import Review from "../layouts/Review";
import SideBar from "../components/SideBar";
import Contact from "../components/Contact";
import Question from "../layouts/Question";
import TabSwitcher from "../components/TabSwitcher";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 px-10  md:grid-cols-3 pt-5 justify ">
      <SideBar />
      <div className="col-span-2 row-span-2 pl-4 ">
        <Review />
        <TabSwitcher />
      </div>
      <div className=" md:col-span-3     ">
        <Contact />
        <Question />
      </div>
    </div>
  );
};
export default Home;
