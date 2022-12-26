import React, { useEffect } from 'react'
import { Renderer, TextureLoader } from 'expo-three';
import { GLView } from 'expo-gl'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {
  AmbientLight,
  Fog,
  GridHelper,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from 'three';
import { Asset } from 'expo-asset';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// import * as THREE from 'three';
// import * as OBJLoader from 'three-obj-loader';
// OBJLoader(THREE);

export default function ThreeDPlankton() {
    return (
      <GLView
        style={{ flex: 1 }}
        onContextCreate={async (gl) => {
          const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
          const sceneColor = 0x6ad6f0;
  
        // Create a WebGLRenderer without a DOM element
          const renderer = new Renderer({ gl });
          renderer.setSize(width, height);
          renderer.setClearColor(sceneColor);
  
          const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
          camera.position.set(2, 5, 5);
  
          const scene = new Scene();
          scene.fog = new Fog(sceneColor, 1, 10000);
          scene.add(new GridHelper(10, 10));
  
          const ambientLight = new AmbientLight(0x101010);
          scene.add(ambientLight);
  
          const pointLight = new PointLight(0xffffff, 2, 1000, 1);
          pointLight.position.set(0, 200, 200);
          scene.add(pointLight);
  
          const spotLight = new SpotLight(0xffffff, 0.5);
          spotLight.position.set(0, 500, 100);
          spotLight.lookAt(scene.position);
          scene.add(spotLight);
  
          const asset = Asset.fromModule(require('../assets/plankton.obj'));
          await asset.downloadAsync();
  
          // const objectLoader = new THREE.OBJLoader();
          const objectLoader = new OBJLoader();
  
          const object = await objectLoader.loadAsync(asset.uri);

          object.scale.set(0.025, 0.025, 0.025);
          scene.add(object);
          camera.lookAt(object.position);

          const render = () => {
            timeout = requestAnimationFrame(render);
            renderer.render(scene, camera);
            gl.endFrameEXP();
          };
          render();
        }}
      />
    );
  }