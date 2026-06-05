const LiquidGlassFilters = () => {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed h-0 w-0 overflow-hidden"
      focusable="false"
    >
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="77"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="btn-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.018"
            numOctaves="2"
            seed="17"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="0.025" result="blur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LiquidGlassFilters;
