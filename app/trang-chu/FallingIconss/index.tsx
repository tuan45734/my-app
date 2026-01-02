'use client';

import { useState, useEffect, useRef } from 'react';
import useFallingIcons from './useFallingIcons';
import useFireworks from './useFireworks';
import Icon from './components/Icon';
import WaveEffect from './components/WaveEffect';
import FireworksCanvas from './components/FireworksCanvas';
import Popup from './components/Popup';

export default function FallingIcons() {
  const [showImage, setShowImage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1875, height: 927 });
  const [canClickImage, setCanClickImage] = useState(false);
  const {
    icons,
    waves,
    handleIconClick
  } = useFallingIcons();

  const {
    fireworks,
    showFireworks,
    createFireworkExplosion,
    createRisingFirework,
    updateFireworks,
    startFireworks,
    stopFireworks
  } = useFireworks();

  const animationRef = useRef<number>(0);
  const lastFireworkTimeRef = useRef<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!showFireworks) return;

    const animate = () => {
      updateFireworks(dimensions.width, dimensions.height);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showFireworks, dimensions, updateFireworks]);

  useEffect(() => {
    if (!showFireworks) return;

    const now = Date.now();
    if (now - lastFireworkTimeRef.current > 300) {
      createRisingFirework(dimensions.width, dimensions.height);
      lastFireworkTimeRef.current = now;
    }

    const fireworkInterval = setInterval(() => {
      createRisingFirework(dimensions.width, dimensions.height);
    }, 300);

    return () => clearInterval(fireworkInterval);
  }, [showFireworks, dimensions, createRisingFirework]);
const handleIconClickWithEffects = (id: number, x: number, y: number) => {
  handleIconClick(id, x, y);

  const shouldShowFireworks = Math.random() < 0.5;
  if (!shouldShowFireworks) return;

  setShowImage(true);
  setCanClickImage(true);

  startFireworks();
  createFireworkExplosion(x, y);

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createRisingFirework(dimensions.width, dimensions.height);
    }, i * 120);
  }
};
  
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <FireworksCanvas
        showFireworks={showFireworks}
        fireworks={fireworks}
        width={dimensions.width}
        height={dimensions.height}
      />

      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {waves.map((wave) => (
          <WaveEffect key={wave.id} wave={wave} />
        ))}

        {icons.map((icon) => (
          <Icon
            key={icon.id}
            icon={icon}
            onClick={handleIconClickWithEffects}
          />
        ))}
      </div>
     {showImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div
      className="relative cursor-pointer animate-scale-in"
      onClick={() => {
        if (!canClickImage) return;

        setShowImage(false);
        setShowPopup(true);
        setCanClickImage(false);

        setTimeout(() => {
          stopFireworks();
        }, 400);
      }}
    >
      <img
        src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454522/hq1_hwbura.png"
        alt="Chào mừng"
        className="max-w-md w-full hover:scale-105 transition-transform duration-300"
      />
      
    </div>👈Nhấn để mở quà
  </div>
)}
      <Popup
        isOpen={showPopup}
        onClose={closePopup}
      />
    </>
  );
}