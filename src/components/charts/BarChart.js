import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import { getSource } from "../../dataHelperFunctions";

function BarChart({ dimensions, series, spreadsheetTab }) {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://opensheet.elk.sh/1ipQgxTiBT8VBTHHoRVjRa01Oscmm1IrF3yaqJgQWAfI/${spreadsheetTab}`);
        const result = await response.json();
        setData(getSource(result, dimensions));
      };
      fetchData();
    }, []);

    const option = {
        color: [
          '#FF5D64',
          '#A00071',
          '#60006F',
        ],
        grid: {
          left: '15%',
          right: '10%',
          top: 20,
          bottom: 20
        },
        dataset: {
            dimensions: dimensions,
            source: data
        },
        xAxis: { 
            type: 'category',
            axisPointer: {
              type: 'shadow'
            }
         },
        yAxis: {},
        series: series,
        confine: true,
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