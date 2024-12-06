import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import EarthBump from '../assets/images/EarthBump.jpg';
import EarthCloud from '../assets/images/EarthCloud.png';
import EarthSpec from '../assets/images/EarthSpec.jpg';
import Earth from '../assets/images/Earth.jpg';

const EarthScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer;
    let earth, cloud, glow;
    let pointLight, ambientLight;
    let mouseDown = false, mouseX = 0, mouseY = 0;
    let isMounted = true;

    const init = () => {
      // Scene and Camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 800);
      camera.position.z = 160;

      // Earth terrain
      const earthTexture = new THREE.TextureLoader().load(Earth);
      const earthBump = new THREE.TextureLoader().load(EarthBump);
      const earthSpecular = new THREE.TextureLoader().load(EarthSpec);
      const earthGeometry = new THREE.SphereGeometry(30, 32, 32);
      const earthMaterial = new THREE.MeshPhongMaterial({
        shininess: 40,
        bumpScale: 1,
        map: earthTexture,
        bumpMap: earthBump,
        specularMap: earthSpecular,
      });
      earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);

      // Earth cloud
      const cloudTexture = new THREE.TextureLoader().load(EarthCloud);
      const cloudGeometry = new THREE.SphereGeometry(31, 32, 32);
      const cloudMaterial = new THREE.MeshBasicMaterial({
        shininess: 10,
        map: cloudTexture,
        transparent: true,
        opacity: 0.8,
      });
      cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      scene.add(cloud);

      // Glow Effect
      const glowGeometry = new THREE.SphereGeometry(32, 32, 32);
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          viewVector: { type: 'v3', value: camera.position },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPositionNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 viewVector;
          varying vec3 vNormal;
          varying vec3 vPositionNormal;
          void main() {
            float intensity = pow(0.75 - dot(vNormal, vPositionNormal), 4.0);
            gl_FragColor = vec4(0.0, 0.3, 1.0, 1.0) * intensity;
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.scale.set(10.2, 100.2, 10.2);
      scene.add(glow);

      // Point Light
      pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(-400, 10, 150);
      scene.add(pointLight);

      // Ambient Light
      ambientLight = new THREE.AmbientLight(0x222222);
      scene.add(ambientLight);

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0xffffff, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (isMounted && containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      // Event Listeners
      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mousedown', onMouseDown, false);
      document.addEventListener('mouseup', onMouseUp, false);
    };

    const animate = () => {
      if (isMounted) {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.001;
        cloud.rotation.y += 0.001;
        renderer.render(scene, camera);
      }
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (evt) => {
      if (!mouseDown) return;
      evt.preventDefault();
      const deltaX = evt.clientX - mouseX;
      const deltaY = evt.clientY - mouseY;
      mouseX = evt.clientX;
      mouseY = evt.clientY;
      rotateScene(deltaX, deltaY);
    };

    const onMouseDown = (evt) => {
      evt.preventDefault();
      mouseDown = true;
      mouseX = evt.clientX;
      mouseY = evt.clientY;
    };

    const onMouseUp = (evt) => {
      evt.preventDefault();
      mouseDown = false;
    };

    const rotateScene = (deltaX, deltaY) => {
      earth.rotation.y += deltaX / 300;
      earth.rotation.x += deltaY / 300;
      cloud.rotation.y += deltaX / 300;
      cloud.rotation.x += deltaY / 300;
    };

    init();
    animate();

    return () => {
      isMounted = false;
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div
      className='earthScenesContainer'
      ref={containerRef}
    />
  );
};

export default EarthScene;
