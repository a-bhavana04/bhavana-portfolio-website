import { useEffect, useRef } from 'react';

const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid settings
      const gridSize = 40;
      const perspective = 600;
      const horizonY = canvas.height * 0.4;
      
      // Pink color for grid lines
      ctx.strokeStyle = '#FFB3DE';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;

      // Draw horizontal lines (perspective effect)
      for (let i = 0; i < 20; i++) {
        const y = horizonY + (i * gridSize) + (scrollY * 0.5) % gridSize;
        const scale = 1 - (y - horizonY) / perspective;
        
        if (scale > 0) {
          const width = canvas.width * scale;
          const x = (canvas.width - width) / 2;
          
          ctx.globalAlpha = scale * 0.6;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + width, y);
          ctx.stroke();
        }
      }

      // Draw vertical lines
      const numVerticals = 30;
      for (let i = 0; i < numVerticals; i++) {
        const centerX = canvas.width / 2;
        const offsetX = (i - numVerticals / 2) * (gridSize / 2);
        
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        
        // Start from horizon
        let startY = horizonY;
        let startX = centerX + offsetX * 0.5;
        
        // End at bottom with perspective
        let endY = canvas.height;
        let endX = centerX + offsetX * 2;
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Add circular grid lines for tunnel effect
      ctx.globalAlpha = 0.3;
      for (let i = 1; i < 15; i++) {
        const radius = i * 40 + (scrollY * 0.3) % 40;
        const centerX = canvas.width / 2;
        const centerY = horizonY;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    drawGrid();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CyberGrid;
