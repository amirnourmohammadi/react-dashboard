import React from "react";
import Features from "./../../Components/features/Features.jsx";
import Chart from "./../../Components/Chart/Chart.jsx";
import WidgetSm from "../../Components/widgetSm/widgetSm.jsx";
import { xAxiesData } from "../../datas.js";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxiesData} dataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
}
 