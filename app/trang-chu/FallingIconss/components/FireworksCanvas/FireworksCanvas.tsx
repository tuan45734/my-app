'use client';

import { useRef, useEffect } from 'react';
import { FireworkParticle } from '../../types';


interface FireworksCanvasProps {
  showFireworks: boolean;
  fireworks: FireworkParticle[];
  width: number;
  height: number;
}

export default function FireworksCanvas({ 
  showFireworks, 
  fireworks, 
  width, 
  height 
}: FireworksCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!showFireworks || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework) => {
     
        firework.trail.forEach((point, index) => {
          const trailAlpha = point.alpha * (index / firework.trail.length);
          ctx.beginPath();
          ctx.arc(point.x, point.y, firework.size * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = firework.color.replace(')', `, ${trailAlpha})`).replace('rgb', 'rgba');
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
        ctx.fillStyle = firework.color.replace(')', `, ${firework.alpha})`).replace('rgb', 'rgba');
        ctx.fill();

        if (Math.random() > 0.7) {
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, firework.size * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = firework.color.replace(')', `, ${firework.alpha * 0.3})`).replace('rgb', 'rgba');
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showFireworks, fireworks]);

  if (!showFireworks) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      width={width}
      height={height}
    />
  );
}