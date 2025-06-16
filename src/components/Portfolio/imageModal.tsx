import React, { useState, useRef } from "react";

interface ImageModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + ZOOM_STEP, MAX_ZOOM));
  const handleZoomOut = () => setZoom((z) => Math.max(z - ZOOM_STEP, MIN_ZOOM));

  // Reset offset when zoom is reset
  React.useEffect(() => {
    if (zoom === 1) setOffset({ x: 0, y: 0 });
  }, [zoom, currentIndex]);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom === 1) return;
    setDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseUp = () => setDragging(false);

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    if (zoom === 1) return;
    setDragging(true);
    const touch = e.touches[0];
    lastPos.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - lastPos.current.x;
    const dy = touch.clientY - lastPos.current.y;
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPos.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchEnd = () => setDragging(false);

  if (!images.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "90vw",
          height: "90vh",
          background: "rgba(5, 5, 5, 0.9)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`Modal ${currentIndex + 1}`}
            style={{
              maxWidth: "80vw",
              maxHeight: "70vh",
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${
                offset.y / zoom
              }px)`,
              transition: dragging ? "none" : "transform 0.2s",
              display: "block",
              margin: "0 auto",
              touchAction: "none",
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />
        </div>
        {/* ...restante dos botões permanece igual... */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(78, 76, 248, 0.5)",
            color: "#fff",
            border: "none",
            fontSize: 24,
            cursor: "pointer",
            padding: "8px 12px",
          }}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(78, 76, 248, 0.5)",
            color: "#fff",
            border: "none",
            fontSize: 24,
            cursor: "pointer",
            padding: "8px 12px",
          }}
          aria-label="Next"
        >
          &#8594;
        </button>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
          }}
        >
          <button
            onClick={handleZoomOut}
            style={{
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              padding: "6px 10px",
            }}
            aria-label="Zoom Out"
            disabled={zoom <= MIN_ZOOM}
          >
            -
          </button>
          <span style={{ color: "#fff", fontSize: 16 }}>
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            style={{
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              padding: "6px 10px",
            }}
            aria-label="Zoom In"
            disabled={zoom >= MAX_ZOOM}
          >
            +
          </button>
        </div>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            borderRadius: "50%",
            width: 36,
            height: 36,
            lineHeight: "36px",
            textAlign: "center",
          }}
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
