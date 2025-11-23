import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ['#22d3ee', '#a78bfa', '#ec4899', '#3b82f6'],
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: { min: 0.2, max: 0.6 },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 4 },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      className="fixed inset-0 pointer-events-none"
    />
  );
};

export default ParticlesBackground;