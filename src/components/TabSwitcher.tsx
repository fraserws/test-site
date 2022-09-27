import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React from "react";
import Breakdown from "./Breakdown";

export default function TabSwitcher() {
  return (
    <Tabs className={"flex justify-center flex-col"}>
      <div className="  font-bold border-accent border-b-4">
        <TabList className={"flex pb-2"}>
          <Tab className={"  px-4  "}>Anaylsis</Tab>
          <Tab className={"px-4"}>Topics</Tab>
        </TabList>
      </div>
      <TabPanel className={""}>
        <Breakdown />
      </TabPanel>
      <TabPanel>
        <h2>Different Page</h2>
      </TabPanel>
    </Tabs>
  );
}
