'use client';

import { useEffect, useRef, useCallback } from 'react';

interface WaterEffect {
  x: number;
  y: number;
  progress: number;
  life: number;
  maxLife: number;
  size: number;
  speed: number;
}

export default function WaterBubbleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const effectsRef = useRef<WaterEffect[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const interactiveSelectors = ['button', 'a', '[onClick]', 'input', 'select', 'textarea'];
    
    if (interactiveSelectors.some(selector => target.closest(selector))) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Tạo nhiều bọt nước nhỏ
    const bubbleCount = 8 + Math.floor(Math.random() * 8);
    
    for (let i = 0; i < bubbleCount; i++) {
      effectsRef.current.push({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        progress: 0,
        life: 0,
        maxLife: 60 + Math.random() * 60,
        size: 2 + Math.random() * 6,
        speed: 0.5 + Math.random() * 1.5
      });
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    effectsRef.current = effectsRef.current.filter(effect => {
      effect.life += effect.speed;
      effect.progress = effect.life / effect.maxLife;

      if (effect.progress <= 1) {
        // Di chuyển bọt nước lên trên
        effect.y -= effect.speed * 2;
        
        // Vẽ bọt nước
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
        
        // Gradient cho bọt nước
        const gradient = ctx.createRadialGradient(
          effect.x - effect.size * 0.3, 
          effect.y - effect.size * 0.3, 
          0,
          effect.x, 
          effect.y, 
          effect.size
        );
        
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        gradient.addColorStop(0.7, 'rgba(200, 230, 255, 0.6)');
        gradient.addColorStop(1, 'rgba(150, 200, 255, 0.3)');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Hiệu ứng phản chiếu nhỏ
        ctx.beginPath();
        ctx.arc(
          effect.x - effect.size * 0.2, 
          effect.y - effect.size * 0.2, 
          effect.size * 0.3, 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }

      return effect.life < effect.maxLife;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleClick, resizeCanvas, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ 
        background: 'transparent',
      }}
    />
  );
}