'use client';

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets for floating effect
    const codeSnippets = [
      'const code = "beautiful";',
      'function create() {}',
      'npm install awesome',
      'git commit -m "magic"',
      'console.log("hello");',
      'import React from "react";',
      'export default App;',
      'async/await',
      'useState()',
      'useEffect()',
      '{ ...spread }',
      'map(item => item)',
      'filter(x => x > 0)',
      'reduce((a, b) => a + b)',
      'fetch("/api/data")',
      'JSON.stringify()',
      'localStorage.setItem()',
      'document.querySelector()',
      'addEventListener("click")',
      'setTimeout(() => {})',
      'Promise.resolve()',
      'try { } catch(e) {}',
      'class Component {}',
      'interface Props {}',
      'type State = {}',
      '<div className="app">',
      'background: linear-gradient',
      'transform: rotate(45deg)',
      'animation: fadeIn 1s',
      'display: flex;',
      'justify-content: center;',
      'align-items: center;',
      'position: relative;',
      'z-index: 999;',
      'opacity: 0.8;',
      'transition: all 0.3s;',
      'border-radius: 8px;',
      'box-shadow: 0 4px 6px;',
      'padding: 1rem;',
      'margin: 0 auto;'
    ];

    // Floating code elements
    class FloatingCode {
      x: number;
      y: number;
      z: number;
      text: string;
      speed: number;
      rotationX: number;
      rotationY: number;
      rotationZ: number;
      rotationSpeedX: number;
      rotationSpeedY: number;
      rotationSpeedZ: number;
      opacity: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.speed = 0.5 + Math.random() * 1;
        this.rotationX = Math.random() * Math.PI * 2;
        this.rotationY = Math.random() * Math.PI * 2;
        this.rotationZ = Math.random() * Math.PI * 2;
        this.rotationSpeedX = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedY = (Math.random() - 0.5) * 0.02;
        this.rotationSpeedZ = (Math.random() - 0.5) * 0.02;
        this.opacity = 0.1 + Math.random() * 0.4;
        this.size = 10 + Math.random() * 6;
        
        const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speed;
        this.rotationX += this.rotationSpeedX;
        this.rotationY += this.rotationSpeedY;
        this.rotationZ += this.rotationSpeedZ;

        if (this.y < -50) {
          this.y = canvas.height + 50;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        
        // 3D transformation
        const scale = (1000 - this.z) / 1000;
        const x = this.x + Math.sin(this.rotationY) * 20;
        const y = this.y + Math.sin(this.rotationX) * 10;
        
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.rotate(this.rotationZ);
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = this.opacity;
        
        // Text styling
        ctx.font = `${this.size}px 'Fira Code', 'Monaco', 'Consolas', monospace`;
        ctx.fillStyle = this.color;
        ctx.textAlign = 'center';
        
        // Draw text with 3D effect
        ctx.fillText(this.text, 0, 0);
        
        // Add depth with shadow
        ctx.globalAlpha = this.opacity * 0.3;
        ctx.fillStyle = '#000';
        ctx.fillText(this.text, 2, 2);
        
        ctx.restore();
      }
    }

    // Binary rain effect
    class BinaryRain {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      chars: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = 2 + Math.random() * 3;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.chars = '';
        for (let i = 0; i < 20; i++) {
          this.chars += Math.random() > 0.5 ? '1' : '0';
        }
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 100) {
          this.y = -100;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = '12px monospace';
        ctx.fillStyle = '#00FF41';
        
        for (let i = 0; i < this.chars.length; i++) {
          const alpha = (this.chars.length - i) / this.chars.length;
          ctx.globalAlpha = this.opacity * alpha;
          ctx.fillText(this.chars[i], this.x, this.y - i * 15);
        }
        
        ctx.restore();
      }
    }

    // Geometric shapes with code patterns
    class CodeGeometry {
      x: number;
      y: number;
      z: number;
      rotation: number;
      rotationSpeed: number;
      size: number;
      type: string;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 500;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.size = 20 + Math.random() * 40;
        this.type = ['cube', 'triangle', 'hexagon'][Math.floor(Math.random() * 3)];
        
        const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = 0.1 + Math.random() * 0.2;
      }

      update() {
        this.rotation += this.rotationSpeed;
        this.z += 1;
        if (this.z > 500) {
          this.z = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        ctx.save();
        
        const scale = (500 - this.z) / 500;
        ctx.translate(this.x, this.y);
        ctx.scale(scale, scale);
        ctx.rotate(this.rotation);
        
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        
        if (this.type === 'cube') {
          // Draw 3D cube wireframe
          const s = this.size / 2;
          ctx.beginPath();
          ctx.rect(-s, -s, this.size, this.size);
          ctx.stroke();
          
          // 3D effect
          ctx.beginPath();
          ctx.moveTo(-s, -s);
          ctx.lineTo(-s + 10, -s - 10);
          ctx.lineTo(s + 10, -s - 10);
          ctx.lineTo(s, -s);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(s, -s);
          ctx.lineTo(s + 10, -s - 10);
          ctx.lineTo(s + 10, s - 10);
          ctx.lineTo(s, s);
          ctx.stroke();
        } else if (this.type === 'triangle') {
          const s = this.size / 2;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(-s, s);
          ctx.lineTo(s, s);
          ctx.closePath();
          ctx.stroke();
        } else if (this.type === 'hexagon') {
          const s = this.size / 2;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * s;
            const y = Math.sin(angle) * s;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    // Connection lines between elements
    class ConnectionLine {
      start: { x: number; y: number };
      end: { x: number; y: number };
      opacity: number;
      color: string;

      constructor(start: { x: number; y: number }, end: { x: number; y: number }) {
        this.start = start;
        this.end = end;
        this.opacity = 0.1 + Math.random() * 0.2;
        this.color = '#3B82F6';
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.end.x - this.start.x, 2) + 
          Math.pow(this.end.y - this.start.y, 2)
        );
        
        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity * (1 - distance / 150);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.start.x, this.start.y);
          ctx.lineTo(this.end.x, this.end.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Initialize elements
    const floatingCodes: FloatingCode[] = [];
    const binaryRains: BinaryRain[] = [];
    const geometries: CodeGeometry[] = [];

    for (let i = 0; i < 15; i++) {
      floatingCodes.push(new FloatingCode());
    }

    for (let i = 0; i < 8; i++) {
      binaryRains.push(new BinaryRain());
    }

    for (let i = 0; i < 10; i++) {
      geometries.push(new CodeGeometry());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(248, 250, 252, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw binary rain
      binaryRains.forEach(rain => {
        rain.update();
        rain.draw();
      });

      // Update and draw geometries
      geometries.forEach(geometry => {
        geometry.update();
        geometry.draw();
      });

      // Draw connections between geometries
      for (let i = 0; i < geometries.length; i++) {
        for (let j = i + 1; j < geometries.length; j++) {
          const line = new ConnectionLine(
            { x: geometries[i].x, y: geometries[i].y },
            { x: geometries[j].x, y: geometries[j].y }
          );
          line.draw();
        }
      }

      // Update and draw floating code
      floatingCodes.forEach(code => {
        code.update();
        code.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;