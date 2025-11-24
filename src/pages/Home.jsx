import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import LetterCard from '../components/LetterCard/LetterCard';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Contenidos y colores para cada página
  const pages = [
    {
      text: `y llego el día donde espesaste a  jugar  un juego donde cada uno cree ser el mejor
       pero al terminar este juego uno de ellos quedarra derrotado , pero que no te sorprenda eso el lo que buscas siempre ser el mejor a cualquier costo 
       pues terminaste solo el juego , felicitaciones eres el mejor  

       me alegro y me enorgullece estas donde siempre quisiste estar
        ahora puedes continuar con tu destino , pero ya dejando atrás todo, 
        y vete aunque algunos de nosotros pierde la calma o mejor dicho me voy 
        a veces la culpa  hace hacer estupideces 
         
        pero que paso cariño si antes solías llámame  así 
         pero ahora me llamas por mi nombre`,
      colors: {
        primary: 'green',
        gradient: 'from-green-500 via-emerald-500 to-lime-500',
        border: 'border-green-500/30',
        glow: 'from-green-500/10 via-emerald-500/5 to-lime-500/10',
        glowOuter: 'from-green-500 via-emerald-500 to-lime-500',
        borderTop: 'via-green-400',
        borderBottom: 'via-emerald-400',
        borderLeft: 'via-lime-400',
        borderRight: 'via-green-400',
        dot1: 'bg-green-400 shadow-green-400/50',
        dot2: 'bg-emerald-400 shadow-emerald-400/50',
        dot3: 'bg-lime-400 shadow-lime-400/50',
        dot4: 'bg-green-400 shadow-green-400/50',
        icon: 'from-green-500 to-emerald-600',
        textGradient: 'from-green-400 to-emerald-400',
        arrow: 'from-green-500 to-emerald-500',
        arrowHover: 'from-green-400 to-emerald-400'
      }
    },
    {
      text: `Al final siempre supe que llagaríamos lejos , pero no fue suficiente para ti , 
      buscabas algo mejor y no te culpo todo queremos lo mejor ,
      pero resulta que ese mejor no era yo ,

                caminamos por diferentes rumbos en la vida quiza sea uno de los motivos por lo que no podemos seguir a delante de la misma  forma  en como tu te imaginas , pero no estoy ni estaré o no estaremos para seguirnos el mismo rumbo,

                 nadie quiere ser preso o estar en un lugar donde no esta bien y no lo estara  ,por eso es mejor tomar un descanso , pero que digo miento al decir un descanso mejor una despedida para siempre`,
      colors: {
        primary: 'purple',
        gradient: 'from-purple-500 via-violet-500 to-fuchsia-500',
        border: 'border-purple-500/30',
        glow: 'from-purple-500/10 via-violet-500/5 to-fuchsia-500/10',
        glowOuter: 'from-purple-500 via-violet-500 to-fuchsia-500',
        borderTop: 'via-purple-400',
        borderBottom: 'via-violet-400',
        borderLeft: 'via-fuchsia-400',
        borderRight: 'via-purple-400',
        dot1: 'bg-purple-400 shadow-purple-400/50',
        dot2: 'bg-violet-400 shadow-violet-400/50',
        dot3: 'bg-fuchsia-400 shadow-fuchsia-400/50',
        dot4: 'bg-purple-400 shadow-purple-400/50',
        icon: 'from-purple-500 to-violet-600',
        textGradient: 'from-purple-400 to-violet-400',
        arrow: 'from-purple-500 to-violet-500',
        arrowHover: 'from-purple-400 to-violet-400'
      }
    },
    {
      text: `[AQUÍ VA TU TERCER TEXTO - Página 3 con colores ROJO/NEGRO/BLANCO]

Escribe aquí el contenido que deseas para la tercera página del mensaje.

Este será el texto final con los colores rojos que especificaste.

Puedes agregar tantos párrafos como necesites para tu mensaje final.`,
      colors: {
        primary: 'red',
        gradient: 'from-red-500 via-rose-500 to-pink-500',
        border: 'border-red-500/30',
        glow: 'from-red-500/10 via-rose-500/5 to-pink-500/10',
        glowOuter: 'from-red-500 via-rose-500 to-pink-500',
        borderTop: 'via-red-400',
        borderBottom: 'via-rose-400',
        borderLeft: 'via-pink-400',
        borderRight: 'via-red-400',
        dot1: 'bg-red-400 shadow-red-400/50',
        dot2: 'bg-rose-400 shadow-rose-400/50',
        dot3: 'bg-pink-400 shadow-pink-400/50',
        dot4: 'bg-red-400 shadow-red-400/50',
        icon: 'from-red-500 to-rose-600',
        textGradient: 'from-red-400 to-rose-400',
        arrow: 'from-red-500 to-rose-500',
        arrowHover: 'from-red-400 to-rose-400'
      }
    }
  ];

  const currentPageData = pages[currentPage];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Fondo con partículas */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Efectos de luz ambiental - Dinámicos según página */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-${currentPageData.colors.primary}-500/20 rounded-full blur-[150px] animate-pulse`} />
          <div className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-${currentPageData.colors.primary}-500/20 rounded-full blur-[150px] animate-pulse`} style={{ animationDelay: '1s' }} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-${currentPageData.colors.primary}-500/10 rounded-full blur-[120px]`} />
        </motion.div>
      </AnimatePresence>

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
            {/* Header con título espectacular */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
              className="flex-shrink-0 pt-8 pb-4 px-4 pointer-events-none"
            >
              <div className="relative max-w-4xl mx-auto">
                {/* Glow effect dinámico */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-r ${currentPageData.colors.gradient} blur-3xl`}
                  />
                </AnimatePresence>
                
                <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-2xl px-4">
                  Sin Principio y Sin Final
                </h2>
              </div>
            </motion.div>

            {/* Contenedor principal con scroll - RESPONSIVE */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-8">
              <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-4">
                
                {/* Cuadro de texto radiante CON CARRUSEL */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 1, type: 'spring' }}
                  className="w-full lg:w-auto lg:flex-1 lg:max-w-2xl"
                >
                  <div className="relative group">
                    {/* Glow exterior dinámico */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute -inset-4 bg-gradient-to-r ${currentPageData.colors.glowOuter} rounded-[2.5rem] blur-2xl group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`}
                      />
                    </AnimatePresence>
                    
                    {/* Contenedor principal */}
                    <div className={`relative bg-gradient-to-br from-slate-900/95 via-black/95 to-slate-900/95 backdrop-blur-2xl rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border-2 ${currentPageData.colors.border} overflow-hidden max-h-[60vh] lg:max-h-[70vh]`}>
                      {/* Efectos de brillo interno dinámico */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentPage}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.1, 0.2, 0.1] }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${currentPageData.colors.glow} pointer-events-none`}
                        />
                      </AnimatePresence>
                      
                      {/* Bordes luminosos dinámicos */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${currentPageData.colors.borderTop} to-transparent pointer-events-none`} />
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${currentPageData.colors.borderBottom} to-transparent pointer-events-none`} />
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent ${currentPageData.colors.borderLeft} to-transparent pointer-events-none`} />
                      <div className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent ${currentPageData.colors.borderRight} to-transparent pointer-events-none`} />
                      
                      {/* Esquinas con puntos luminosos dinámicos */}
                      <div className={`absolute top-3 left-3 w-3 h-3 ${currentPageData.colors.dot1} rounded-full shadow-lg pointer-events-none`} />
                      <div className={`absolute top-3 right-3 w-3 h-3 ${currentPageData.colors.dot2} rounded-full shadow-lg pointer-events-none`} />
                      <div className={`absolute bottom-3 left-3 w-3 h-3 ${currentPageData.colors.dot3} rounded-full shadow-lg pointer-events-none`} />
                      <div className={`absolute bottom-3 right-3 w-3 h-3 ${currentPageData.colors.dot4} rounded-full shadow-lg pointer-events-none`} />
                      
                      {/* Ícono decorativo dinámico */}
                      <div className={`absolute -top-6 left-8 sm:left-12 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${currentPageData.colors.icon} rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 pointer-events-none`}>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      
                      {/* Contenedor de texto con scroll interno y ANIMACIÓN DE CARRUSEL */}
                      <div className="relative overflow-hidden max-h-[50vh] lg:max-h-[60vh]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="overflow-y-auto max-h-[50vh] lg:max-h-[60vh] pr-2 custom-scrollbar pb-4"
                            style={{
                              '--scrollbar-gradient': currentPageData.colors.primary === 'green' 
                                ? 'linear-gradient(to bottom, #10b981, #059669)'
                                : currentPageData.colors.primary === 'purple'
                                ? 'linear-gradient(to bottom, #a855f7, #9333ea)'
                                : 'linear-gradient(to bottom, #ef4444, #dc2626)'
                            }}
                          >
                            <p className="text-white/95 font-medium text-base sm:text-lg leading-relaxed drop-shadow-lg">
                              <span className={`inline-block mr-2 sm:mr-3 text-xl sm:text-2xl bg-gradient-to-r ${currentPageData.colors.textGradient} bg-clip-text text-transparent align-top`}>◉</span>
                              <span className="inline whitespace-pre-wrap">
                                {currentPageData.text}
                              </span>
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* CONTROLES DEL CARRUSEL - FUERA DEL CUADRO */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="flex items-center justify-center gap-4 mt-6"
                    >
                      {/* Flecha Izquierda */}
                      <motion.button
                        onClick={prevPage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentPageData.colors.arrow} shadow-xl flex items-center justify-center transition-all border-2 border-white/30 hover:border-white/50`}
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </motion.button>

                      {/* Indicador de página */}
                      <div className="px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border-2 border-white/30 shadow-xl">
                        <span className="text-white font-bold text-base">
                          {currentPage + 1} / {pages.length}
                        </span>
                      </div>

                      {/* Flecha Derecha */}
                      <motion.button
                        onClick={nextPage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentPageData.colors.arrow} shadow-xl flex items-center justify-center transition-all border-2 border-white/30 hover:border-white/50`}
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </motion.button>
                    </motion.div>
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
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 bg-gradient-to-r ${currentPageData.colors.glowOuter} blur-xl rounded-full`}
                      />
                    </AnimatePresence>
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

            {/* Footer decorativo - verde fijo */}
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

      {/* Estilos para scrollbar dinámico */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--scrollbar-gradient);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Home;