import React from "react";
import ReactEcharts from "echarts-for-react";
import { getSeriesData } from "../../dataHelperFunctions";

function BarChart({ dataset, name, value }) {
    const option = {
        series: [
          {
            type: 'pie',
            data: getSeriesData(dataset, name, value),
            radius: ['40%', '70%']
          }
        ],
        tooltip: {
            trigger: 'item',
          },
      };

    return <ReactEcharts option={option} />;
}
export default BarChart;