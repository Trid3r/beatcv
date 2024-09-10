import { useEffect, useState } from "preact/hooks";

export function AnimatedBackground({ isDarkMode }: { isDarkMode: boolean; }) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [code, setCode] = useState("");

  useEffect(() => {
    const fetchCode = async () => {
      const fetchedCode = await fetchCodeFromGithub();
      setCode(fetchedCode);
    };
    fetchCode();
  }, []);

  const typingSpeed = 10; // Puedes ajustar esto a la cantidad de caracteres que deseas renderizar por tick

  useEffect(() => {
    if (!code) return;

    const typingInterval = setInterval(() => {
      if (currentPosition < code.length) {
        setDisplayedCode((prevCode) => prevCode + code.slice(currentPosition, currentPosition + typingSpeed));
        setCurrentPosition((prevPosition) => prevPosition + typingSpeed);
      } else {
        setCurrentPosition(0);
        setDisplayedCode("");
      }
    }, 50); // Ajusta este valor para cambiar la velocidad de escritura

    return () => clearInterval(typingInterval);
  }, [code, currentPosition]);

  const fetchCodeFromGithub = async () => {
    const response = await fetch(
      "https://api.github.com/repos/torvalds/linux/contents/Kconfig"
    );
    const data = await response.json();
    if (data && data.content) {
      const decodedContent = atob(data.content).replace(/\r?\n/g, '\n☭');
      console.log(decodedContent)
      return decodedContent;
    }
    return "Error fetching code from GitHub";
  };

  return (
    <div class="fixed inset-0 overflow-hidden opacity-20 pointer-events-none">
      <pre class="font-mono text-xs leading-5 whitespace-pre-wrap">
        {displayedCode.split("☭").map((line, index) => (
          <div key={index}>
            <span class={`${isDarkMode ? 'text-white' : 'text-black'}`}>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
};