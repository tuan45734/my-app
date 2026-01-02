import { useState, useCallback } from 'react';
import { FireworkParticle } from './types';
import { FIREWORK_COLORS } from './constants';

export default function useFireworks() {
  const [fireworks, setFireworks] = useState<FireworkParticle[]>([]);
  const [showFireworks, setShowFireworks] = useState(false);
  

  const createFirework = useCallback((x: number, y: number, isExplosion: boolean = false): FireworkParticle => {
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
      size: isExplosion ? Math.random() * 3 + 1 : Math.random() * 2 + 1,
      speedX: Math.random() * 6 - 3,
      speedY: isExplosion ? Math.random() * 8 - 4 : Math.random() * 3 - 4,
      gravity: 0.08,
      alpha: 1,
      decay: Math.random() * 0.015 + 0.005,
      isExploded: isExplosion,
      trail: []
    };
  }, []);

  const createFireworkExplosion = useCallback((x: number, y: number) => {
    const newFireworks: FireworkParticle[] = [];
    const particleCount = 80 + Math.random() * 40;
    
    for (let i = 0; i < particleCount; i++) {
      newFireworks.push(createFirework(x, y, true));
    }
    
    setFireworks(prev => [...prev, ...newFireworks]);
  }, [createFirework]);

  const createRisingFirework = useCallback((canvasWidth: number, canvasHeight: number) => {
    const x = Math.random() * canvasWidth;
    const y = canvasHeight;
    
    const risingFirework: FireworkParticle = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
      size: 3,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * -12 - 8,
      gravity: 0.2,
      alpha: 1,
      decay: 0.003,
      isExploded: false,
      trail: []
    };
    
    setFireworks(prev => [...prev, risingFirework]);
  }, []);

  const updateFireworks = useCallback((canvasWidth: number, canvasHeight: number) => {
    setFireworks(prev => {
      const newFireworks: FireworkParticle[] = [];
      
      prev.forEach(firework => {
        const newTrail = [...firework.trail, { x: firework.x, y: firework.y, alpha: 1 }]
          .map(point => ({ ...point, alpha: point.alpha * 0.8 }))
          .filter(point => point.alpha > 0.05);
        
        let newSpeedX = firework.speedX;
        let newSpeedY = firework.speedY;
        
        if (firework.isExploded) {
          newSpeedX *= 0.98;
          newSpeedY *= 0.98;
        }
        
        newSpeedY += firework.gravity;
        
        const newX = firework.x + newSpeedX;
        const newY = firework.y + newSpeedY;
        const newAlpha = Math.max(0, firework.alpha - firework.decay);
        
        if (!firework.isExploded && newSpeedY >= -1) {
          const explosionCount = 60 + Math.random() * 30;
          for (let i = 0; i < explosionCount; i++) {
            const particle = createFirework(newX, newY, true);
            particle.speedX = Math.random() * 8 - 4;
            particle.speedY = Math.random() * 8 - 4;
            newFireworks.push(particle);
          }
          return;
        }
        
        if (newAlpha > 0.01 && newY < canvasHeight + 50) {
          newFireworks.push({
            ...firework,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            alpha: newAlpha,
            size: firework.size * 0.99,
            trail: newTrail
          });
        }
      });
      
      return newFireworks;
    });
  }, [createFirework]);

  const startFireworks = useCallback(() => {
    setShowFireworks(true);
    setFireworks([]);
  }, []);

  const stopFireworks = useCallback(() => {
    setShowFireworks(false);
    setFireworks([]);
  }, []);

  return {
    fireworks,
    showFireworks,
    createFireworkExplosion,
    createRisingFirework,
    updateFireworks,
    startFireworks,
    stopFireworks
  };
}