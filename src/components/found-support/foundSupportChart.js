import Vizzu from "vizzu";
import VizzuModule from "vizzu/dist/cvizzu.wasm";
import { data } from "./foundSupportData";
import { useRef, useEffect } from "react";

Vizzu.options({ wasmUrl: VizzuModule });

export default function FoundSupportChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Vizzu(canvasRef.current, { data });
    chart.initializing.then((chart) =>
      chart.animate({
        config: {
          channels: {
            y: { set: ["Found Support In Community"] },
            x: { set: ["Months"] },
          },
        },
      })
    );
  }, []);

  return <canvas ref={canvasRef} id="myVizzu" style={{ width: "800px", height: "480px" }} />;
}
