import React from "react";
import ReactEcharts from "echarts-for-react";
import { getSeriesData } from "../../dataHelperFunctions";

function DonutChart({ dataset, name, value }) {
    const option = {
        grid: {
          left: '5%',
          top: 20,
          bottom: 20
        },
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

      return <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} className="flex-shrink overflow-hidden" />;
}
export default DonutChart;