// src/components/DottedBackground/DottedBackground.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './DottedBackground.module.css';

const DottedBackground = ({ className = '' }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar cambios en dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Verificar al cargar
    checkDarkMode();

    // Observar cambios en la clase dark
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const SEPARATION = 100;
    const AMOUNTX = 50;
    const AMOUNTY = 50;

    // Scene setup
    const scene = new THREE.Scene();
    
    // FOG DINÁMICO - Cambia según modo oscuro
    scene.fog = new THREE.Fog(
      isDarkMode ? 0x0f172a : 0xffffff, // Color del fog según modo
      1, 
      10000
    );

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Fondo transparente

    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particles = [];
    const positions = [];
    const colors = [];

    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        const y = 0;
        const z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);

        positions.push(x, y, z);
        
        // COLORES DINÁMICOS - Cambian según modo oscuro
        const color = new THREE.Color();
        if (isDarkMode) {
          // Modo oscuro: tonos azules y púrpuras
          color.setHSL(
            (x / (AMOUNTX * SEPARATION) + 0.5) * 0.3 + 0.5, // Azules a púrpuras
            0.7, // Saturación alta
            (z / (AMOUNTY * SEPARATION) + 0.5) * 0.4 + 0.3 // Brillo moderado
          );
        } else {
          // Modo claro: tonos cálidos y vibrantes
          color.setHSL(
            (x / (AMOUNTX * SEPARATION) + 0.5) * 0.6 + 0.2, // Naranjas a rosas
            0.8, // Saturación alta
            (z / (AMOUNTY * SEPARATION) + 0.5) * 0.3 + 0.4 // Brillo alto
          );
        }
        colors.push(color.r, color.g, color.b);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isDarkMode ? 4 : 3, // Puntos más grandes en modo oscuro
      vertexColors: true,
      transparent: true,
      opacity: isDarkMode ? 0.9 : 0.8, // Más opaco en modo oscuro
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let animationId;

    // Animation
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const positions = geometry.attributes.position.array;
      let i = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i * 3 + 1] = Math.sin((ix + count) * 0.3) * 50 + 
                                Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotación suave de la cámara
      camera.position.x = Math.sin(count * 0.1) * 800;
      camera.position.y = Math.cos(count * 0.15) * 800;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      count += 0.04;
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      points,
      material,
      geometry,
      animationId
    };

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        
        // Clean up Three.js resources
        sceneRef.current.geometry.dispose();
        sceneRef.current.material.dispose();
        sceneRef.current.renderer.dispose();
        
        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [isDarkMode]); // Se re-crea cuando cambia el modo oscuro

  // Función para actualizar los colores cuando cambia el modo oscuro
  useEffect(() => {
    if (!sceneRef.current || !sceneRef.current.geometry) return;

    const geometry = sceneRef.current.geometry;
    const material = sceneRef.current.material;
    const colors = geometry.attributes.color.array;

    // Actualizar colores
    let colorIndex = 0;
    for (let ix = 0; ix < 50; ix++) {
      for (let iy = 0; iy < 50; iy++) {
        const x = ix * 100 - (50 * 100) / 2;
        const z = iy * 100 - (50 * 100) / 2;
        
        const color = new THREE.Color();
        if (isDarkMode) {
          // Modo oscuro: tonos azules y púrpuras
          color.setHSL(
            (x / (50 * 100) + 0.5) * 0.3 + 0.5,
            0.7,
            (z / (50 * 100) + 0.5) * 0.4 + 0.3
          );
        } else {
          // Modo claro: tonos cálidos y vibrantes
          color.setHSL(
            (x / (50 * 100) + 0.5) * 0.6 + 0.2,
            0.8,
            (z / (50 * 100) + 0.5) * 0.3 + 0.4
          );
        }
        
        colors[colorIndex] = color.r;
        colors[colorIndex + 1] = color.g;
        colors[colorIndex + 2] = color.b;
        colorIndex += 3;
      }
    }

    geometry.attributes.color.needsUpdate = true;

    // Actualizar material
    material.size = isDarkMode ? 4 : 3;
    material.opacity = isDarkMode ? 0.9 : 0.8;
    material.needsUpdate = true;

    // Actualizar fog
    sceneRef.current.scene.fog.color.setHex(isDarkMode ? 0x0f172a : 0xffffff);

  }, [isDarkMode]);

  return (
    <div 
      ref={containerRef} 
      className={`${styles.dottedBackground} ${className} ${
        isDarkMode ? styles.dark : styles.light
      }`}
    />
  );
};

export default DottedBackground;