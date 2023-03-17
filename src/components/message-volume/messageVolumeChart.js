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
      })
    );
  }, []);

  return <canvas ref={canvasRef} id="myVizzu" style={{ width: "800px", height: "480px" }} />;
}
