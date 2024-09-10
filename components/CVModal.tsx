export default function CVModal({ isOpen, onClose, isDarkMode, isMobile }: { isOpen: boolean, onClose: () => void, isDarkMode: boolean, isMobile: boolean }) {

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-50 flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
      <div className={`relative p-1 pt-7 w-full ${isMobile ? 'h-full' : 'max-w-4xl max-h-[90vh]'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full text-red-700 hover:text-rose-500 transition-colors duration-200`}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-square-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" />
          </svg>
        </button>
        <div className={`mt-4 ${isMobile ? 'h-[calc(100vh-60px)]' : 'h-[calc(90vh-60px)]'}`}>
          <iframe
            src="/CV.pdf"
            className="w-full h-full"
            title="CV"
          />
        </div>
      </div>
    </div>
  );
}