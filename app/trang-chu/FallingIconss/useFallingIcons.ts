import { useState, useEffect, useCallback } from 'react';
import { FallingIcon, WaveEffect } from './types';
import { AVAILABLE_ICONS } from './constants';

export default function useFallingIcons() {
  const [icons, setIcons] = useState<FallingIcon[]>([]);
  const [waves, setWaves] = useState<WaveEffect[]>([]);

  const createIcon = useCallback((): FallingIcon => ({
    id: Date.now() + Math.random(),
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth - 50 : 300),
    y: -50,
    icon: AVAILABLE_ICONS[Math.floor(Math.random() * AVAILABLE_ICONS.length)],
    size: Math.random() * 15 + 25,
    speed: Math.random() * 0.4 + 0.2,
    rotation: Math.random() * 30 - 15,
    isClicked: false,
    scale: 1,
    opacity: 1
  }), []);

  useEffect(() => {
    const initialIcons = Array.from({ length: 3 }, createIcon);
    setIcons(initialIcons);
  }, [createIcon]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons(prevIcons =>
        prevIcons.map(icon => {
          if (icon.isClicked) return icon;

          const newY = icon.y + icon.speed;
          if (newY > (typeof window !== 'undefined' ? window.innerHeight : 800)) {
            return createIcon();
          }

          return {
            ...icon,
            y: newY,
            rotation: icon.rotation + 0.1
          };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, [createIcon]);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setWaves(prevWaves =>
        prevWaves
          .map(wave => ({
            ...wave,
            progress: wave.progress + 0.015
          }))
          .filter(wave => wave.progress <= 2.5)
      );
    }, 16);

    return () => clearInterval(waveInterval);
  }, []);

  const handleIconClick = useCallback((id: number, x: number, y: number) => {
    
    setIcons(prevIcons =>
      prevIcons.map(icon =>
        icon.id === id
          ? {
            ...icon,
            isClicked: true,
            scale: 2.0,
            opacity: 0.7
          }
          : icon
      )
    );

    const newWaves: WaveEffect[] = [];
    for (let i = 0; i < 4; i++) {
      newWaves.push({
        id: Date.now() + i,
        x: x,
        y: y,
        progress: i * 0.3,
        size: 40 + i * 20
      });
    }
    setWaves(prevWaves => [...prevWaves, ...newWaves]);

    setTimeout(() => {
      setIcons(prevIcons =>
        prevIcons.map(icon =>
          icon.id === id
            ? {
              ...icon,
              scale: 0,
              opacity: 0
            }
            : icon
        )
      );
    }, 200);

    setTimeout(() => {
      setIcons(prevIcons =>
        prevIcons.map(icon =>
          icon.id === id ? createIcon() : icon
        )
      );
    }, 400);
  }, [createIcon]);

  return {
    icons,
    waves,
    handleIconClick,
    createIcon
  };
}