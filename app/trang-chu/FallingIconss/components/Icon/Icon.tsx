import { FallingIcon } from '../../types';

interface IconProps {
  icon: FallingIcon;
  onClick: (id: number, x: number, y: number) => void;
}

export default function Icon({ icon, onClick }: IconProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onClick(icon.id, rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  return (
    <div
      className="absolute pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-200"
      style={{
        left: `${icon.x}px`,
        top: `${icon.y}px`,
        width: `${icon.size}px`,
        height: `${icon.size}px`,
        transform: `rotate(${icon.rotation}deg) scale(${icon.scale})`,
        opacity: icon.opacity,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
        transition: icon.isClicked
          ? 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          : 'transform 0.2s linear, opacity 0.2s linear',
      }}
      onClick={handleClick}
    >
      <img
        src={icon.icon}
        alt="falling icon"
        className="w-full h-full object-contain"
        onError={(e) => {
          console.error(`Failed to load image: ${icon.icon}`);
        }}
      />
    </div>
  );
}