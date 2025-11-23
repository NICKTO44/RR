import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import LetterCard from '../components/LetterCard/LetterCard';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Fondo con partículas */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Efectos de luz ambiental - VERDE */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Carta que cubre toda la pantalla */}
      <LetterCard isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Contenido que aparece cuando se abre */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col pointer-events-auto"
          >
            {/* Header con título espectacular - VERDE */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
              className="flex-shrink-0 pt-8 pb-4 px-4 pointer-events-none"
            >
              <div className="relative max-w-4xl mx-auto">
                {/* Glow effect verde */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 blur-3xl opacity-40" />
                
                <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-2xl px-4">
                  Mensaje de Despedida
                </h2>
              </div>
            </motion.div>

            {/* Contenedor principal con scroll - RESPONSIVE */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-8">
              <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-4">
                
                {/* Cuadro de texto radiante - VERDE/BLANCO/NEGRO */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1, type: 'spring' }}
                  className="w-full lg:w-auto lg:flex-1 lg:max-w-2xl"
                >
                  <div className="relative group">
                    {/* Glow exterior verde */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Contenedor principal */}
                    <div className="relative bg-gradient-to-br from-slate-900/95 via-black/95 to-slate-900/95 backdrop-blur-2xl rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border-2 border-green-500/30 overflow-hidden max-h-[60vh] lg:max-h-[70vh]">
                      {/* Efectos de brillo interno verde */}
                      <motion.div 
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-lime-500/10 pointer-events-none"
                        animate={{
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                      
                      {/* Bordes luminosos verdes */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none" />
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-lime-400 to-transparent pointer-events-none" />
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-green-400 to-transparent pointer-events-none" />
                      
                      {/* Esquinas con puntos luminosos verdes */}
                      <div className="absolute top-3 left-3 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50 pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50 pointer-events-none" />
                      
                      {/* Ícono decorativo verde */}
                      <div className="absolute -top-6 left-8 sm:left-12 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 pointer-events-none">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      
                      {/* Contenedor de texto con scroll interno */}
                      <div className="relative overflow-y-auto max-h-[50vh] lg:max-h-[60vh] pr-2 custom-scrollbar">
                        <p className="text-white/95 font-medium text-base sm:text-lg leading-relaxed drop-shadow-lg">
                          <span className="inline-block mr-2 sm:mr-3 text-xl sm:text-2xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent align-top">◉</span>
                          <span className="inline">
                            Te digo adiós  y acaso te quiero todavía Quizá no he de olvidarte pero te digo adiós No sé si me quisiste no sé si te quería O tal vez nos quisimos demasiado los dos.
                            <br /><br />
                            Este cariño triste y apasionado y loco Me lo sembré en el alma para quererte a ti, No sé si te amé mucho no sé si te amé poco Pero si sé que nunca volveré a amar así.

                            <br /><br />
                            Me queda tu sonrisa dormida en mi recuerdo Y el corazón me dice que no te olvidaré Pero al quedarme solo sabiendo que te pierdo Tal vez empiezo a amarte como jamás te amé.  
                            <br /><br />
                              Te digo adiós y acaso con esta despedida Mi más hermoso sueño muere dentro de mí Pero te digo adiós para toda la vida Aunque toda la vida siga pensando en ti.
                      </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Descripción */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="hidden lg:block pointer-events-none"
                >
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl rounded-full" />
                   
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Reproductor en esquina inferior derecha - FIXED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
              transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
            >
              <MediaPlayer />
            </motion.div>

            {/* Footer decorativo verde */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="flex-shrink-0 h-1 sm:h-2 relative pointer-events-none"
            >
              <div className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 blur-xl opacity-75" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón de cerrar - ROJO para contraste */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10 z-[60] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-white/30 group pointer-events-auto"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            
            <div className="absolute inset-0 rounded-full bg-red-400 blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300 pointer-events-none" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Estilos para scrollbar verde */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #059669);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #047857);
        }
      `}</style>
    </div>
  );
};

export default Home;