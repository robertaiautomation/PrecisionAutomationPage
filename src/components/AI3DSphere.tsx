import { useEffect, useRef } from 'react';

const AI3DSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 500;

    const sphereRadius = 120;
    const center = { x: 250, y: 250 };

    const generateSpherePoints = (numPoints: number) => {
      const points: Array<{ x: number; y: number; z: number; originalX: number; originalY: number; originalZ: number }> = [];
      for (let i = 0; i < numPoints; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
        const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
        const z = sphereRadius * Math.cos(phi);

        points.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
      }
      return points;
    };

    const points = generateSpherePoints(200);

    const animate = () => {
      timeRef.current += 0.005;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      points.forEach((point) => {
        const rotX = Math.cos(timeRef.current * 0.5) * point.originalX - Math.sin(timeRef.current * 0.5) * point.originalZ;
        const rotZ = Math.sin(timeRef.current * 0.5) * point.originalX + Math.cos(timeRef.current * 0.5) * point.originalZ;

        const rotY = Math.cos(timeRef.current * 0.3) * point.originalY - Math.sin(timeRef.current * 0.3) * rotZ;
        const rotZ2 = Math.sin(timeRef.current * 0.3) * point.originalY + Math.cos(timeRef.current * 0.3) * rotZ;

        point.x = rotX;
        point.y = rotY;
        point.z = rotZ2;
      });

      const sortedPoints = [...points].sort((a, b) => a.z - b.z);

      sortedPoints.forEach((point) => {
        const screenX = center.x + (point.x * 200) / (point.z + 300);
        const screenY = center.y + (point.y * 200) / (point.z + 300);

        const depthFactor = (point.z + sphereRadius) / (sphereRadius * 2);
        const size = 2 + depthFactor * 3;

        const hue = ((Math.atan2(point.y, point.x) * 180) / Math.PI + 360) % 360;
        const saturation = 100;
        const lightness = 45 + depthFactor * 25;

        ctx.fillStyle = `hsl(${(hue + 250) % 360}, ${saturation}%, ${lightness}%)`;

        const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 2);
        gradient.addColorStop(0, `hsla(${(hue + 250) % 360}, ${saturation}%, ${lightness}%, 0.8)`);
        gradient.addColorStop(1, `hsla(${(hue + 250) % 360}, ${saturation}%, ${lightness}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(screenX, screenY, size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsl(${(hue + 250) % 360}, ${saturation}%, ${lightness}%)`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(74, 0, 224, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        const angle = (timeRef.current + (i * Math.PI * 2) / 3) * 0.3;
        const x1 = center.x + Math.cos(angle) * sphereRadius * 1.3;
        const y1 = center.y + Math.sin(angle) * sphereRadius * 1.3;
        const x2 = center.x + Math.cos(angle + Math.PI) * sphereRadius * 1.3;
        const y2 = center.y + Math.sin(angle + Math.PI) * sphereRadius * 1.3;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full max-w-md max-h-md mx-auto"
      style={{ filter: 'drop-shadow(0 0 30px rgba(74, 0, 224, 0.3))' }}
    />
  );
};

export default AI3DSphere;
