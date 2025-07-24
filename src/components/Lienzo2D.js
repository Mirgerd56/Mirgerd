import React, { useRef, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Rect } from 'react-konva';

export default function Lienzo2D({ sprite, onUpdate }) {
  const [img, setImg] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 128, height: 128 });
  const [showCollision, setShowCollision] = useState(true);
  const imageRef = useRef();

  // Cargar imagen
  React.useEffect(() => {
    if (sprite && sprite.url) {
      const image = new window.Image();
      image.src = sprite.url;
      image.onload = () => setImg(image);
    }
  }, [sprite]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Stage width={400} height={400} className="border border-blue-300 bg-white">
        <Layer>
          {img && (
            <KonvaImage
              ref={imageRef}
              image={img}
              x={dragPos.x}
              y={dragPos.y}
              width={size.width}
              height={size.height}
              draggable
              onDragEnd={e => setDragPos({ x: e.target.x(), y: e.target.y() })}
              onTransformEnd={e => {
                const node = imageRef.current;
                setSize({ width: node.width() * node.scaleX(), height: node.height() * node.scaleY() });
                node.scaleX(1);
                node.scaleY(1);
              }}
            />
          )}
          {/* Caja de colisión */}
          {showCollision && (
            <Rect
              x={dragPos.x}
              y={dragPos.y}
              width={size.width}
              height={size.height}
              stroke="red"
              dash={[4, 4]}
            />
          )}
        </Layer>
      </Stage>
      <div className="mt-2 flex gap-2">
        <label>
          <input type="checkbox" checked={showCollision} onChange={e => setShowCollision(e.target.checked)} />
          Ver colisión
        </label>
        <input type="file" accept="image/*" onChange={e => {
          const file = e.target.files[0];
          if (file) {
            const url = URL.createObjectURL(file);
            onUpdate({ ...sprite, url });
          }
        }} />
      </div>
    </div>
  );
}