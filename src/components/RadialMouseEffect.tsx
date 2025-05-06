'use client';

import React, { useState } from 'react';

type RadialMouseEffectProps = {
  children: React.ReactNode;
};

const RadialMouseEffect: React.FC<RadialMouseEffectProps> = ({ children }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute blur-sm"
        style={{
          background: `radial-gradient(500px at ${coords.x}px ${coords.y}px, rgba(64,64,64, 0.25), transparent 70%)`,
        }}
      ></div>

      <div className="relative z-40">{children}</div>
    </div>
  );
};

export default RadialMouseEffect;
