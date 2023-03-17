import Vizzu from "vizzu";
import VizzuModule from "vizzu/dist/cvizzu.wasm";
import { data } from "./messageVolumeData";
import { useRef, useEffect } from "react";

Vizzu.options({ wasmUrl: VizzuModule });

export default function MessageVolumeChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Vizzu(canvasRef.current, { data });
    chart.initializing.then((chart) =>
      chart.animate({
        config: {
          channels: {
            y: { set: ["Total Message Volume"] },
            x: { set: ["Months"] },
          },
        },
        style: {
          plot: {
            marker: {
              colorPalette: '#ff6a6a' // stackup color
            },
            overflow: "visible",
            xAxis: {
              color: '#d1d5db', // gray-300
              label: {
                color: '#6b7280', // gray-500
                fontFamily: 'Poppins',
                fontSize: '0.875em'
              }
            },
            yAxis: {
              interlacing: {
                color: "#f3f4f6" //gray-100
              },
              label: {
                color: '#6b7280', // gray-500
                fontFamily: 'Poppins',
              },
              title: {
                fontSize: '0' // hides the yAxis title
              }
            }
          },
          logo: {
            width: 0 // hides vizzu logo
          },
          tooltip: {
            borderColor: '#ff6a6a', // stackup color
            color: '#1e293b', // gray-900
            layout: 'singleLine'
          }
        }
      })
    )
    .then((chart) => chart.feature("tooltip", true));
  }, []);

  return <canvas ref={canvasRef} id="myVizzu" style={{ width: "800px", height: "480px" }} />;
}
