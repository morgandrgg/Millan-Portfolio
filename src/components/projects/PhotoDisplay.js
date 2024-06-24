// components/PhotoDisplay.js

import React, { useEffect, useRef } from "react";
import * as THREE from "../public/libs/threejs/three.module.js";
import { TWEEN } from "../public/libs/tween.module.min.js";
import { TrackballControls } from "../public/libs/TrackballControls.js";
import { CSS3DRenderer, CSS3DObject } from "../public/libs/CSS3dRenderer.js";
import { controls, toggleIcon } from "../utils/photoControls";

const PhotoDisplay = ({ images }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, objects, vector, original_rotation;

    const targets = { sphere: [], helix: [], grid: [], table: [] };
    const duration = 750;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 3000;
      original_rotation = camera.rotation;
      vector = new THREE.Vector3();

      objects = initImgObjects(scene, images);
      defineSphereTransform(objects, vector);
      defineHelixTransform(objects, vector);
      defineGridTransform(objects);
      defineTableTransform(objects);

      renderer = initRenderer();
      controls = initControls(renderer);

      document.getElementById("sphere").addEventListener("click", () => {
        transform(targets.sphere, duration, 0.5, 0.5, 0.5);
        moveCameraPosition(-199, 185, 2987);
      });
      document.getElementById("helix").addEventListener("click", () => {
        transform(targets.helix, duration, 0.5, 0.5, 0.5);
        moveCameraPosition(55, 300, -4000);
      });
      document.getElementById("grid").addEventListener("click", () => {
        transform(targets.grid, duration);
        moveCameraPosition(-297, 260, 6000);
      });
      document.getElementById("table").addEventListener("click", () => {
        transform(targets.table, duration);
        moveCameraPosition(-199, 185, 6000);
      });

      transform(targets.sphere, 1000, 0.5, 0.5, 0.5);
      window.addEventListener("resize", onWindowResize);
    }

    function initControls(renderer) {
      let controls = new TrackballControls(camera, renderer.domElement);
      controls.minDistance = 500;
      controls.maxDistance = 6000;
      controls.noPan = true;
      controls.dynamicDampingFactor = 0.1;
      controls.addEventListener("change", render);
      return controls;
    }

    function initRenderer() {
      let renderer = new CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mainRef.current.appendChild(renderer.domElement);
      return renderer;
    }

    function defineGridTransform(objects) {
      for (let i = 0; i < objects.length; i++) {
        const object = new THREE.Object3D();
        object.position.x = (i % 5) * 600 - 800;
        object.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
        object.position.z = Math.floor(i / 25) * 1300 - 2000;
        targets.grid.push(object);
      }
    }

    function defineHelixTransform(objects, vector) {
      for (let i = 0; i < objects.length; i++) {
        const theta = i * 0.175 + Math.PI;
        const y = -(i * 8) + 450;
        const object = new THREE.Object3D();
        object.position.setFromCylindricalCoords(2000, theta, y);
        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt(vector);
        targets.helix.push(object);
      }
    }

    function defineSphereTransform(objects, vector) {
      for (let i = 0; i < objects.length; i++) {
        let l = objects.length;
        const phi = Math.acos(-1 + (2 * i) / l);
        const theta = Math.sqrt(l * Math.PI) * phi;
        const object = new THREE.Object3D();
        object.position.setFromSphericalCoords(800, phi, theta);
        vector.copy(object.position).multiplyScalar(2);
        object.lookAt(vector);
        targets.sphere.push(object);
      }
    }

    function defineTableTransform(objects) {
      for (let i = 0; i < objects.length; i++) {
        const object = new THREE.Object3D();
        object.position.x = (i % 15) * 600 - 4000;
        object.position.y = -Math.floor(i / 15) * 500 + 1600;
        object.position.z = -1000;
        targets.table.push(object);
      }
    }

    function initImgObjects(scene, images) {
      var objects = [];
      for (let i = 0; i < images.length; i++) {
        const img = document.createElement("img");
        img.src = images[i].fpath;
        img.alt = images[i].alt;
        img.id = "photo" + images[i].id;

        img.classList.add("fancy-rendered-img");
        img.addEventListener("click", function () {
          showImageModal(i, images);
        });

        let isSwiping = false;
        img.addEventListener("touchstart", function () {
          isSwiping = false;
        });
        img.addEventListener("touchend", function () {
          if (!isSwiping) {
            showImageModal(i, images);
          }
        });
        img.addEventListener("touchmove", function () {
          isSwiping = true;
        });

        const objectCSS = new CSS3DObject(img);
        objectCSS.position.x = Math.random() * 4000 - 2000;
        objectCSS.position.y = Math.random() * 4000 - 2000;
        objectCSS.position.z = Math.random() * 4000 - 2000;

        scene.add(objectCSS);
        objects.push(objectCSS);
      }
      return objects;
    }

    function transform(
      targets,
      duration,
      x_scale = 1,
      y_scale = 1,
      z_scale = 1
    ) {
      TWEEN.removeAll();
      for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const target = targets[i];
        new TWEEN.Tween(object.position)
          .to(
            {
              x: target.position.x,
              y: target.position.y,
              z: target.position.z,
            },
            Math.random() * duration + duration
          )
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
        new TWEEN.Tween(object.rotation)
          .to(
            {
              x: target.rotation.x,
              y: target.rotation.y,
              z: target.rotation.z,
            },
            Math.random() * duration + duration
          )
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
        new TWEEN.Tween(object.scale)
          .to({ x: x_scale, y: y_scale, z: z_scale })
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();
      }
      new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
    }

    function moveCameraPosition(x, y, z) {
      new TWEEN.Tween(camera.position)
        .to({ x: x, y: y, z: z })
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
      new TWEEN.Tween(controls.object.up)
        .to(controls.up0)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
      controls.update();
    }

    function render() {
      renderer.render(scene, camera);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [images]);

  return (
    <div>
      <div ref={mainRef} id="main" className="w-full h-screen"></div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button id="sphere" className="bg-blue-500 text-white p-2 rounded">
          Sphere
        </button>
        <button id="helix" className="bg-blue-500 text-white p-2 rounded">
          Helix
        </button>
        <button id="grid" className="bg-blue-500 text-white p-2 rounded">
          Grid
        </button>
        <button id="table" className="bg-blue-500 text-white p-2 rounded">
          Table
        </button>
      </div>
    </div>
  );
};

export default PhotoDisplay;
