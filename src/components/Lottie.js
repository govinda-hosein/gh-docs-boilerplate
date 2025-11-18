import React, { useEffect, useRef } from "react";

export default function Lottie({ filename, width, height }) {
  const container = useRef(null);

  async function getLottie() {
    const lot = await import("lottie-web");

    lot.default.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../static/json/" + filename),
    });
  }

  useEffect(() => {
    getLottie();
  }, []);

  return (
    <div
      style={{
        width: width || 350,
        height: height | 250,
        margin: "auto",
      }}
      ref={container}
    ></div>
  );
}
