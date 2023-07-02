// Importing three.js library
import * as THREE from './assets/js/three.js';

// Variables
let scene, camera, renderer, model;

// Function to initialize the scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('landingPage').appendChild(renderer.domElement);

    // Load 3D model
    load3DModel();
}

// Function to load 3D model
function load3DModel() {
    const loader = new THREE.OBJLoader();

    loader.load(
        // resource URL
        './assets/models/3dModel.obj',
        // onLoad callback
        function (object) {
            model = object;
            scene.add(model);
            animate();
        },
        // onProgress callback
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // onError callback
        function (error) {
            console.log('An error happened');
        }
    );
}

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Call init function
init();