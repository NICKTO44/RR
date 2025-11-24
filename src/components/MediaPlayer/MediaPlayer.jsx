import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown, SkipBack, SkipForward, Music } from 'lucide-react';

const MediaPlayer = () => {
  // Lista de canciones - AGREGA TUS CANCIONES AQUÍ
const playlist = [
  {
    id: 1,
    title: "Canción 1",
    file: "/RR/audio/melodia.mp3"  // ← Ruta completa con /RR/
  },
  {
    id: 2,
    title: "Canción 2",
    file: "/RR/audio/morat.mp3"  // ← Ruta completa con /RR/
  },
  {
    id: 3,
    title: "Canción 3",
    file: "/RR/audio/che.mp3"  // ← Ruta completa con /RR/
  }
];

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isDragging) {
        setCurrentTime(audio.currentTime);
      }
    };
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      // Avanzar a la siguiente canción automáticamente
      nextTrack();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isDragging, currentTrackIndex]);

  // Cargar nueva canción cuando cambia el índice
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.load();
      audio.play().catch(err => console.log('Error playing:', err));
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.log('Error playing:', err));
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setCurrentTime(0);
  };

  const previousTrack = () => {
    if (currentTime > 3) {
      // Si llevamos más de 3 segundos, reiniciar la canción actual
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    } else {
      // Si no, ir a la canción anterior
      setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
      setCurrentTime(0);
    }
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setShowPlaylist(false);
  };

  const handleProgressClick = (e) => {
    const bar = progressBarRef.current;
    const rect = bar.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = percent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressDrag = (e) => {
    if (!isDragging) return;
    handleProgressClick(e);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const skip = (seconds) => {
    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={false}
      animate={isExpanded ? { 
        width: '100%', 
        maxWidth: '380px',
        height: 'auto' 
      } : { 
        width: '80px',
        height: '80px'
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border-2 border-green-500/50"
    >
      {/* Glow exterior verde */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 rounded-3xl blur-xl opacity-40" />
      
      <audio ref={audioRef} key={currentTrack.id}>
        <source src={currentTrack.file} type="audio/mpeg" />
      </audio>

      {/* Versión minimizada */}
      {!isExpanded && (
        <div className="relative p-4 h-full flex items-center justify-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl hover:scale-105 transition-all"
            aria-label="Expandir reproductor"
          >
            <ChevronUp size={32} className="text-white" />
          </button>
        </div>
      )}

      {/* Versión expandida */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative p-5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden"
                animate={{
                  boxShadow: isPlaying ? 
                    ['0 0 20px rgba(34, 197, 94, 0.5)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(34, 197, 94, 0.5)'] :
                    '0 10px 40px rgba(0,0,0,0.2)'
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                >
                  <svg className="w-7 h-7 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </motion.div>
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-base truncate">{currentTrack.title}</h3>
                <p className="text-xs text-gray-500">Canción {currentTrackIndex + 1} de {playlist.length}</p>
              </div>

              <div className="flex gap-1">
                {/* Botón playlist */}
                <button
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className={`p-2 rounded-xl transition-all duration-200 ${showPlaylist ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100 text-gray-700'}`}
                  aria-label="Ver lista de reproducción"
                >
                  <Music size={18} />
                </button>
                
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                  aria-label="Minimizar"
                >
                  <ChevronDown size={20} className="text-gray-700 group-hover:text-green-600 transition-colors" />
                </button>
              </div>
            </div>

            {/* Playlist desplegable */}
            <AnimatePresence>
              {showPlaylist && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-2 max-h-40 overflow-y-auto">
                    {playlist.map((track, index) => (
                      <button
                        key={track.id}
                        onClick={() => selectTrack(index)}
                        className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition-all ${
                          index === currentTrackIndex 
                            ? 'bg-green-500 text-white font-semibold' 
                            : 'hover:bg-white text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs">{index + 1}.</span>
                          <span className="text-sm truncate flex-1">{track.title}</span>
                          {index === currentTrackIndex && isPlaying && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                            >
                              <Play size={12} fill="currentColor" />
                            </motion.div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Barra de progreso */}
            <div className="mb-2">
              <div
                ref={progressBarRef}
                onClick={handleProgressClick}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseMove={handleProgressDrag}
                onMouseLeave={() => setIsDragging(false)}
                className="group w-full h-1.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full cursor-pointer relative overflow-hidden hover:h-2 transition-all shadow-inner"
                role="slider"
                aria-label="Barra de progreso"
                aria-valuemin="0"
                aria-valuemax={duration}
                aria-valuenow={currentTime}
                tabIndex={0}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
                  style={{ width: `${progress}%` }}
                  layout
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-xl border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `calc(${progress}% - 7px)` }}
                >
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-sm" />
                </motion.div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-600 mt-1.5 px-0.5 font-mono font-semibold">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-between">
              {/* Volumen */}
              <div className="flex items-center gap-2 flex-1 max-w-[120px]">
                <button
                  onClick={toggleMute}
                  className="p-1.5 hover:bg-green-50 rounded-lg transition-all"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted || volume === 0 ? 
                    <VolumeX size={18} className="text-gray-600" /> : 
                    <Volume2 size={18} className="text-green-600" />
                  }
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${(isMuted ? 0 : volume) * 100}%, #e5e7eb ${(isMuted ? 0 : volume) * 100}%, #e5e7eb 100%)`
                  }}
                  aria-label="Control de volumen"
                />
              </div>

              {/* Controles centrales */}
              <div className="flex items-center gap-1.5">
                {/* Anterior */}
                <button
                  onClick={previousTrack}
                  className="p-2 hover:bg-green-50 rounded-xl transition-all group"
                  aria-label="Canción anterior"
                >
                  <SkipBack size={18} className="text-gray-700 group-hover:text-green-600 transition-colors" />
                </button>
                
                {/* Play/Pause */}
                <motion.button
                  onClick={togglePlay}
                  className="p-3.5 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-xl hover:scale-105 active:scale-95 transition-transform shadow-xl relative overflow-hidden"
                  whileHover={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
                  aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="pause"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                      >
                        <Pause size={20} fill="currentColor" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="play"
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -90 }}
                      >
                        <Play size={20} fill="currentColor" className="ml-0.5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Siguiente */}
                <button
                  onClick={nextTrack}
                  className="p-2 hover:bg-green-50 rounded-xl transition-all group"
                  aria-label="Siguiente canción"
                >
                  <SkipForward size={18} className="text-gray-700 group-hover:text-green-600 transition-colors" />
                </button>
              </div>

              <div className="w-[120px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MediaPlayer;