import * as THREE from 'three';

let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function load3DModel() {
    const loader = new THREE.OBJLoader();
    loader.load(
        'assets/models/3dModel.obj',
        function (object) {
            scene.add(object);
            dispatchEvent(new Event('modelLoaded'));
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.log('An error happened');
        }
    );
}

export { init, animate, load3DModel, scene, camera, renderer };