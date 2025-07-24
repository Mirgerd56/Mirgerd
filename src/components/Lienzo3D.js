import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Lienzo3D({ model, onUpdate }) {
  const mountRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 400;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    let loadedModel;
    if (model && model.url) {
      const loader = new GLTFLoader();
      loader.load(model.url, (gltf) => {
        loadedModel = gltf.scene;
        scene.add(loadedModel);
        animate();
      });
    }

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      if (loadedModel) loadedModel.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [model]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div ref={mountRef} className="border border-blue-300 bg-white" style={{ width: 400, height: 400 }} />
      <div className="mt-2">
        <input type="file" accept=".glb,.gltf" onChange={e => {
          const file = e.target.files[0];
          if (file) {
            const url = URL.createObjectURL(file);
            onUpdate({ ...model, url });
          }
        }} />
      </div>
    </div>
  );
}