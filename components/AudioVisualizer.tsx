import { useEffect, useRef } from "preact/hooks";

interface AudioVisualizerProps {
  isDarkMode: boolean;
  isMobile: boolean;
}

export default function AudioVisualizer({ isDarkMode, isMobile }: AudioVisualizerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;

    if (audio && canvas) {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = context.createAnalyser();
      const source = context.createMediaElementSource(audio);
      
      source.connect(analyser);
      analyser.connect(context.destination);

      audio.play();

      const animate = () => {
        const ctx = canvas.getContext('2d');
        if (!ctx || !analyser) return;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const draw = () => {
          requestAnimationFrame(draw);

          analyser.getByteFrequencyData(dataArray);

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const color = isDarkMode ? 'rgb(75 85 99)' : 'rgb(75 85 99)';
          ctx.fillStyle = color;

          if (isMobile) {
            // Left visualizer
            const barHeight = canvas.height / bufferLength;
            let y = 0;
            for (let i = 0; i < bufferLength; i++) {
              const barWidth = dataArray[i] / 2;
              ctx.fillRect(0, y, barWidth, barHeight);
              y += barHeight + 1;
            }

            // Right visualizer
            y = 0;
            for (let i = 0; i < bufferLength; i++) {
              const barWidth = dataArray[i] / 2;
              ctx.fillRect(canvas.width - barWidth, canvas.height - y - barHeight, barWidth, barHeight);
              y += barHeight + 1;
            }
          } else {
            // Desktop layout (top and bottom)
            const barWidth = canvas.width / bufferLength;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
              const barHeight = dataArray[i] / 2;
              ctx.fillRect(x, 0, barWidth, barHeight);
              ctx.fillRect(canvas.width - x - barWidth, canvas.height - barHeight, barWidth, barHeight);
              x += barWidth + 1;
            }
          }
        };

        draw();
      };

      animate();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isDarkMode, isMobile]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/beat.mp3" type="audio/mpeg" />
      </audio>
      <canvas ref={canvasRef} class="fixed top-0 left-0 w-full h-full z-0" />
    </>
  );
}
