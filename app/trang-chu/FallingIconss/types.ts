export interface FallingIcon {
  id: number;
  x: number;
  y: number;
  icon: string;
  size: number;
  speed: number;
  rotation: number;
  isClicked: boolean;
  scale: number;
  opacity: number;
}

export interface WaveEffect {
  id: number;
  x: number;
  y: number;
  progress: number;
  size: number;
}

export interface FireworkParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speedX: number;
  speedY: number;
  gravity: number;
  alpha: number;
  decay: number;
  isExploded: boolean;
  trail: Array<{ x: number; y: number; alpha: number }>;
}

export interface EcommercePlatform {
  name: string;
  url: string;
}
