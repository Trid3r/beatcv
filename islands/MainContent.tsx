import { useState, useEffect } from "preact/hooks";
import CVModal from "../components/CVModal.tsx";
import { AnimatedBackground } from "../components/AnimatedBackground.tsx";

export default function MainContent() {
  const [isDarkMode, setDarkMode] = useState(Math.random() < 0.5);
  const [showGame, setShowGame] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);
  const triggerGame = () => setShowGame(true);
  const triggerCV = () => setShowCV(true);
  const closeCV = () => setShowCV(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(globalThis.innerWidth <= 768);
    };
    checkMobile();
    globalThis.addEventListener('resize', checkMobile);

    return () => globalThis.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div class={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'} transition-colors duration-300 flex items-center justify-center`}>
      <AnimatedBackground isDarkMode={isDarkMode} />
      <main className="flex-grow flex items-center justify-center z-10 relative">
        {!showGame ? (
          <div class="text-center space-y-4">
            <h1 class="font-sans text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">Alexis Hernández Delgado</h1>
            <p class="font-sans text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium">Software Developer</p>
            <div class="flex justify-center space-x-4">
              <a class={`p-2 ${isDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-500'} transition-colors duration-300`} onClick={toggleDarkMode}>
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                )}
              </a>
              <a class={`p-2 ${isDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-500'} transition-colors duration-300`} onClick={triggerCV}>
                <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /></svg>
              </a>
              <a class={`p-2 ${isDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-500'} transition-colors duration-300`} href="https://github.com/Trid3r">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
              </a>
              <a class={`p-2 ${isDarkMode ? 'hover:text-gray-600' : 'hover:text-gray-500'} animate-bounce transition-colors duration-300`} onClick={triggerGame}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" /><path d="M6 12h4m-2 -2v4" /><path d="M15 11l0 .01" /><path d="M18 13l0 .01" /></svg>
              </a>
            </div>
          </div>
        ) : (
          <a>Next Step -_- (Sorry)</a>
        )}
      </main>
      <CVModal isOpen={showCV} onClose={closeCV} isDarkMode={isDarkMode} isMobile={isMobile} />
    </div>
  );
}