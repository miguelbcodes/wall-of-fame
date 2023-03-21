import React from "react";
import ReactEcharts from "echarts-for-react";
import { getSource } from "../../dataHelperFunctions";

function BarChart({ dimensions, series, dataset }) {
    const option = {
        dataset: {
            dimensions: dimensions,
            source: getSource(dataset, dimensions)
        },
        xAxis: { 
            type: 'category',
            axisLabel: {
                interval: 3,
            }
         },
        yAxis: {},
        series: series,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
      };

    return <ReactEcharts option={option} />;
}
export default BarChart;