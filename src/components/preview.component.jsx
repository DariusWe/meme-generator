import "./preview.styles.css";
import { useRef, useEffect } from "react";

const Preview = ({ image, topCaption, bottomCaption }) => {
  const canvasRef = useRef(null);

  // image not loading in the beginning

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("source");
    ctx.drawImage(img, 0, 0, 300, (image.height / image.width) * 300);
    ctx.font = "24px sans-serif";
    ctx.fillStyle = "white";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 5;
    ctx.fillText(topCaption, 150 - (topCaption.length * 7), 35);
    ctx.fillText(bottomCaption, 150 - (bottomCaption.length * 7), (image.height * 300 / image.width) - 30);
    //const dataURL = canvas.toDataURL();
  }, [image, topCaption, bottomCaption]);

  return (
    <div className="preview-container">
      {image && (
        <div>
          <canvas ref={canvasRef} width={300} height={(image.height / image.width) * 300} />
          <img style={{ display: "none" }} id="source" src={image.url} alt={image.name} />
        </div>
      )}
    </div>
  );
};

export default Preview;