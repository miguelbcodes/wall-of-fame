import React from "react";
import ReactEcharts from "echarts-for-react";
import { getSource } from "../../dataHelperFunctions";

function BarChart({ dimensions, series, dataset }) {
    const option = {
        grid: {
          left: '15%',
          right: '10%',
          top: 20,
          bottom: 20
        },
        dataset: {
            dimensions: dimensions,
            source: getSource(dataset, dimensions)
        },
        xAxis: { 
            type: 'category'
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

      return <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} className="flex-shrink" />;
}
export default BarChart;