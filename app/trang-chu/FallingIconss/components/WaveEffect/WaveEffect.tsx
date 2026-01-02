import { WaveEffect as WaveEffectType } from '../../types';

interface WaveEffectProps {
  wave: WaveEffectType;
}

export default function WaveEffect({ wave }: WaveEffectProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${wave.x}px`,
        top: `${wave.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="absolute rounded-full border-2 border-orange-300"
        style={{
          width: `${wave.progress * wave.size}px`,
          height: `${wave.progress * wave.size}px`,
          marginLeft: `-${(wave.progress * wave.size) / 2}px`,
          marginTop: `-${(wave.progress * wave.size) / 2}px`,
          opacity: Math.max(0, 0.8 - wave.progress / 3),
          borderWidth: `${2 - wave.progress * 0.8}px`,
        }}
      />
    </div>
  );
}