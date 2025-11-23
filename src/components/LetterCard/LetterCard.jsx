import { motion } from 'framer-motion';

/**
 * LetterCard Component - Carta con colores verde/negro/blanco
 * Se abre revelando el contenido progresivamente
 */
const LetterCard = ({ isOpen, setIsOpen }) => {
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Transición suave y elegante
  const transition = {
    duration: 1.2,
    ease: [0.65, 0, 0.35, 1],
  };

  // Variantes para cada panel que se enrolla
  const flapVariants = {
    top: {
      closed: { 
        rotateX: 0, 
        y: 0,
        scale: 1,
        opacity: 1
      },
      open: { 
        rotateX: -180,
        y: -50,
        scale: 0.8,
        opacity: 0,
        transition: { ...transition, delay: 0 }
      }
    },
    bottom: {
      closed: { 
        rotateX: 0, 
        y: 0,
        scale: 1,
        opacity: 1
      },
      open: { 
        rotateX: 180,
        y: 50,
        scale: 0.8,
        opacity: 0,
        transition: { ...transition, delay: 0.1 }
      }
    },
    left: {
      closed: { 
        rotateY: 0, 
        x: 0,
        scale: 1,
        opacity: 1
      },
      open: { 
        rotateY: -180,
        x: -50,
        scale: 0.8,
        opacity: 0,
        transition: { ...transition, delay: 0.2 }
      }
    },
    right: {
      closed: { 
        rotateY: 0, 
        x: 0,
        scale: 1,
        opacity: 1
      },
      open: { 
        rotateY: 180,
        x: 50,
        scale: 0.8,
        opacity: 0,
        transition: { ...transition, delay: 0.3 }
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ perspective: '2000px' }}>
      
      {/* Solapa Superior - VERDE/NEGRO */}
      <motion.div
        variants={flapVariants.top}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden"
        style={{ 
          transformOrigin: 'center bottom',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-black via-slate-900 to-slate-800 relative overflow-hidden">
          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          {/* Brillo verde superior */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-green-500/20 to-transparent" />
          {/* Borde inferior luminoso verde */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-lg shadow-green-500/50" />
          
          {/* Líneas decorativas */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
        </div>
      </motion.div>

      {/* Solapa Inferior - VERDE/NEGRO */}
      <motion.div
        variants={flapVariants.bottom}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden"
        style={{ 
          transformOrigin: 'center top',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black via-slate-900 to-slate-800 relative overflow-hidden">
          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          {/* Brillo verde inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-emerald-500/20 to-transparent" />
          {/* Borde superior luminoso verde */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-lg shadow-emerald-500/50" />
          
          {/* Líneas decorativas */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </div>
      </motion.div>

      {/* Solapa Izquierda - VERDE/NEGRO */}
      <motion.div
        variants={flapVariants.left}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden"
        style={{ 
          transformOrigin: 'right center',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-black via-slate-900 to-slate-800 relative overflow-hidden">
          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          {/* Brillo verde izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-lime-500/20 to-transparent" />
          {/* Borde derecho luminoso verde */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-lime-400 to-transparent shadow-lg shadow-lime-500/50" />
          
          {/* Líneas decorativas */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-lime-400/50 to-transparent" />
        </div>
      </motion.div>

      {/* Solapa Derecha - VERDE/NEGRO */}
      <motion.div
        variants={flapVariants.right}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden"
        style={{ 
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="w-full h-full bg-gradient-to-l from-black via-slate-900 to-slate-800 relative overflow-hidden">
          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          {/* Brillo verde derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-green-500/20 to-transparent" />
          {/* Borde izquierdo luminoso verde */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-400 to-transparent shadow-lg shadow-green-500/50" />
          
          {/* Líneas decorativas */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-green-400/50 to-transparent" />
        </div>
      </motion.div>

      {/* Círculo Central con efecto glow VERDE */}
      <motion.div
        className="relative z-50 pointer-events-auto"
        animate={isOpen ? { 
          scale: 0, 
          opacity: 0,
          rotate: 180
        } : { 
          scale: 1, 
          opacity: 1,
          rotate: 0
        }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      >
        {/* Glow effect exterior VERDE */}
        <div className="absolute -inset-8 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-full blur-3xl opacity-40 animate-pulse" />
        
        {/* Anillos concéntricos VERDES */}
        <motion.div 
          className="absolute -inset-4 rounded-full border-2 border-green-400/40"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -inset-6 rounded-full border border-emerald-400/30"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <button
          onClick={toggleOpen}
          className="relative w-40 h-40 bg-gradient-to-br from-slate-900 via-black to-slate-900 rounded-3xl shadow-2xl flex flex-col items-center justify-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-all group overflow-hidden border-2 border-green-500/30"
          aria-expanded={isOpen}
          aria-label="Abrir carta"
        >
          {/* Efecto de brillo interno VERDE */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-500" />
          
          {/* Borde luminoso interno VERDE */}
          <div className="absolute inset-3 rounded-2xl border border-green-400/30" />

          {/* Texto */}
          <motion.span 
            className="relative z-10 text-white text-xl font-bold tracking-[0.3em] mb-2"
            animate={{
              textShadow: [
                '0 0 20px rgba(16, 185, 129, 0.6)',
                '0 0 30px rgba(5, 150, 105, 0.6)',
                '0 0 20px rgba(16, 185, 129, 0.6)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ABRIR
          </motion.span>
          
          {/* Ícono de sobre VERDE */}
          <motion.div
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </motion.div>

          {/* Efecto hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500 rounded-3xl" />
        </button>
      </motion.div>

      {/* Flechas direccionales luminosas VERDES */}
      {!isOpen && (
        <>
          {/* Flecha arriba */}
          <motion.div 
            className="absolute top-[20%] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              y: [20, 0, 20]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]">
              <path d="M12 4L6 10L8 10L8 18L16 18L16 10L18 10L12 4Z" fill="url(#gradient-green1)" stroke="rgba(16,185,129,0.6)" strokeWidth="0.5"/>
              <defs>
                <linearGradient id="gradient-green1" x1="12" y1="4" x2="12" y2="18" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(16,185,129,1)" />
                  <stop offset="1" stopColor="rgba(16,185,129,0.3)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Flecha abajo */}
          <motion.div 
            className="absolute bottom-[20%] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              y: [-20, 0, -20]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_12px_rgba(5,150,105,0.9)]">
              <path d="M12 20L18 14L16 14L16 6L8 6L8 14L6 14L12 20Z" fill="url(#gradient-green2)" stroke="rgba(5,150,105,0.6)" strokeWidth="0.5"/>
              <defs>
                <linearGradient id="gradient-green2" x1="12" y1="6" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(5,150,105,0.3)" />
                  <stop offset="1" stopColor="rgba(5,150,105,1)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Flecha izquierda */}
          <motion.div 
            className="absolute left-[15%] top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              x: [20, 0, 20]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_12px_rgba(132,204,22,0.9)]">
              <path d="M4 12L10 6L10 8L18 8L18 16L10 16L10 18L4 12Z" fill="url(#gradient-green3)" stroke="rgba(132,204,22,0.6)" strokeWidth="0.5"/>
              <defs>
                <linearGradient id="gradient-green3" x1="4" y1="12" x2="18" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(132,204,22,1)" />
                  <stop offset="1" stopColor="rgba(132,204,22,0.3)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Flecha derecha */}
          <motion.div 
            className="absolute right-[15%] top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              x: [-20, 0, -20]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]">
              <path d="M20 12L14 18L14 16L6 16L6 8L14 8L14 6L20 12Z" fill="url(#gradient-green4)" stroke="rgba(16,185,129,0.6)" strokeWidth="0.5"/>
              <defs>
                <linearGradient id="gradient-green4" x1="6" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(16,185,129,0.3)" />
                  <stop offset="1" stopColor="rgba(16,185,129,1)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default LetterCard;