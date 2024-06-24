// utils/photoUtils.js

import * as THREE from "../libs/threejs/three.module.js";
import { TWEEN } from "../libs/tween.module.min.js";
import { TrackballControls } from "../libs/TrackballControls.js";
import { CSS3DRenderer, CSS3DObject } from "../libs/CSS3dRenderer.js";

let camera, scene, renderer, objects, vector, original_rotation;
let controls;

const duration = 750;
const targets = { sphere: [], helix: [], grid: [], table: [] };

function init(images) {
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

  transform(targets.sphere, 1000, 0.5, 0.5, 0.5);
  window.addEventListener("resize", onWindowResize);
}

function initControls(renderer) {
  const controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.noPan = true;
  controls.dynamicDampingFactor = 0.1;
  controls.addEventListener("change", render);
  return controls;
}

function initRenderer() {
  const renderer = new CSS3DRenderer();
  const main = document.getElementById("main");
  renderer.setSize(main.clientWidth, main.clientHeight);
  main.appendChild(renderer.domElement);
  return renderer;
}

function defineGridTransform(objects) {
  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();
    object.position.x = (i % 5) * 600 - 800;
    object.position.y = (-Math.floor(i / 5) % 5) * 400 + 800;
    object.position.z = Math.floor(i / 25) * 1300 - 2000;
    targets.grid.push(object);
  }
}

function defineHelixTransform(objects, vector) {
  for (let i = 0; i < objects.length; i++) {
    const theta = i * 0.175 + Math.PI;
    const y = -i * 8 + 450;
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
    const l = objects.length;
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

function transform(targets, duration, x_scale = 1, y_scale = 1, z_scale = 1) {
  TWEEN.removeAll();
  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targets[i];
    new TWEEN.Tween(object.position)
      .to(
        { x: target.position.x, y: target.position.y, z: target.position.z },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
    new TWEEN.Tween(object.rotation)
      .to(
        { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
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

function initImgObjects(scene, images) {
  const objects = [];
  for (let i = 0; i < images.length; i += 1) {
    const img = document.createElement("img");
    img.src = images[i].fpath;
    img.alt = images[i].alt;
    img.id = "photo" + images[i].id;
    img.classList.add("rendered-img");
    img.addEventListener("click", () => showImageModal(i, images));
    const objectCSS = new CSS3DObject(img);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;
    scene.add(objectCSS);
    objects.push(objectCSS);
  }
  return objects;
}

function showImageModal(i, images) {
  const img = images[i];
  $("#photoDisplayModal img").attr("src", img.fpath);
  $("#photoDisplayModal h3").text(img.title);
  $("#photoDisplayModal h6").text(img.date);
  const instagramLink = $("#photoDisplayModal .col-md-6 .fa-instagram");
  img.instagram_link
    ? instagramLink.show().attr("href", img.instagram_link)
    : instagramLink.hide();
  const previousButton = $(".fa-angle-left");
  const nextButton = $(".fa-angle-right");
  i === 0 ? previousButton.hide() : previousButton.show();
  i === images.length - 1 ? nextButton.hide() : nextButton.show();
  $("#photoDisplayModal .col-md-6 .fa-pencil").attr(
    "href",
    window.location.href + "/" + img.id + "/edit"
  );
  $("#photoDisplayModal").modal("show");
  insertUrlParam("id", img.id);
}

export { init, animate, controls, moveCameraPosition, transform, targets };
