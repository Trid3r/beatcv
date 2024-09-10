import { useEffect, useState, useRef } from "preact/hooks";

export function AnimatedBackground({ isDarkMode }: { isDarkMode: boolean; }) {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [code, setCode] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const fetchCode = async () => {
      const fetchedCode = await fetchCodeFromGithub();
      setCode(fetchedCode);
    };
    fetchCode();
  }, []);

  const typingSpeed = 15;
  const maxLines = 50;

  useEffect(() => {
    if (!code) return;

    const typingInterval = setInterval(async () => {
      if (currentPosition < code.length) {
        const newContent = code.slice(currentPosition, currentPosition + typingSpeed);
        const newLines = newContent.split('☭');

        setDisplayedCode((prevCode) => {
          let updatedCode = [...prevCode];
          
          if (updatedCode.length > 0 && !newLines[0].includes('☭')) {
            updatedCode[updatedCode.length - 1] += newLines.shift() || '';
          }
          
          updatedCode = [...updatedCode, ...newLines.filter(line => line !== '')];

          if (updatedCode.length > maxLines) {
            updatedCode = updatedCode.slice(updatedCode.length - maxLines);
          }

          return updatedCode;
        });

        setCurrentPosition((prevPosition) => prevPosition + typingSpeed);
      } else {
        const fetchedCode = await fetchCodeFromGithub();
        setCode(fetchedCode);
        setCurrentPosition(0);
        setDisplayedCode([]);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [code, currentPosition]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (containerRef.current && preRef.current) {
        const { scrollHeight, clientHeight } = containerRef.current;
        const shouldScroll = scrollHeight > clientHeight;
        
        if (shouldScroll) {
          containerRef.current.scrollTop = scrollHeight - clientHeight;
        }
      }
    };

    scrollToBottom();
  
    const resizeObserver = new ResizeObserver(scrollToBottom);
    if (preRef.current) {
      resizeObserver.observe(preRef.current);
    }

    return () => {
      if (preRef.current) {
        resizeObserver.unobserve(preRef.current);
      }
    };
  }, [displayedCode]);

  const fetchCodeFromGithub = async () => {
    const files = [
      "README",
      "CREDITS",
      "MAINTAINERS",
      "Kconfig",
      "Makefile",
      "init/main.c",
      "arch/x86/Makefile"
    ];
    const response = await fetch(
      `https://api.github.com/repos/torvalds/linux/contents/${files[Math.floor(Math.random() * files.length)]}`
    );
    const data = await response.json();
    if (data && data.content) {
      const decodedContent = atob(data.content).replace(/\r?\n/g, '\n☭');
      return decodedContent;
    }
    return "Error fetching code from GitHub";
  };

  return (
    <div ref={containerRef} class={`fixed inset-0 overflow-y-auto pointer-events-none scrollbar-hide ${isDarkMode ? 'opacity-20' : 'opacity-50'}`}>
      <pre ref={preRef} class="font-mono text-xs leading-5 whitespace-pre-wrap">
        {displayedCode.map((line, index) => (
          <div key={index}>
            <span class={`${isDarkMode ? 'text-white' : 'text-black'}`}>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}