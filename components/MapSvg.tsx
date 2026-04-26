export default function MapSvg() {
  const dots = [
    // North America
    [150, 100], [180, 120], [210, 110], [170, 150], [200, 160], [120, 130], [230, 90],
    // South America
    [250, 250], [270, 280], [290, 300], [260, 260],
    // Europe/Africa
    [400, 100], [430, 120], [450, 150], [420, 200], [460, 220], [440, 280], [380, 140],
    // Asia
    [550, 100], [580, 110], [620, 120], [650, 150], [600, 180], [680, 160], [520, 140],
    // Australia
    [700, 280], [730, 300], [710, 290]
  ];

  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <defs>
        {/* This makes the dots look soft and glowing */}
        <filter id="mapGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {dots.map((dot, i) => (
        <circle 
          key={i} 
          cx={dot[0]} 
          cy={dot[1]} 
          r="2" 
          fill="white" 
          filter="url(#mapGlow)" 
          className="opacity-100"
        />
      ))}
    </svg>
  );
}