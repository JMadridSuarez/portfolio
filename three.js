import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const container = document.getElementById("box");
const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize(1100, 600);
//
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1200/800, 0.1, 1000);
camera.position.z = 30;
camera.position.x = 5

const geometry1 = new THREE.SphereGeometry(5, 32, 32);
const textureLoader1 = new THREE.TextureLoader();
const texture = textureLoader1.load('public/images/3D/tierra.jpeg');
const material1 = new THREE.MeshPhongMaterial({ map:texture});
const sphere = new THREE.Mesh(geometry1, material1);

// Crea la esfera pequeña
const geometrySmall1 = new THREE.BoxGeometry(1,1,1);
const textureLoader2 = new THREE.TextureLoader();
const texture2 = textureLoader2.load('public/images/3D/html.png');
const materialSmall1 = new THREE.MeshBasicMaterial({ map: texture2 });
const html = new THREE.Mesh(geometrySmall1, materialSmall1);
html.position.x= 5;
html.position.z= 20;
html.position.y= -2;
html.scale.set(2,2,2)

//segunda esfera peque
const geometrySmall2 = new THREE.BoxGeometry(1,1,1);
const textureLoader3 = new THREE.TextureLoader();
const texture3 = textureLoader3.load('./public/images/3D/css.png');
const materialSmall2 = new THREE.MeshBasicMaterial({map: texture3 });
const css = new THREE.Mesh(geometrySmall2, materialSmall2);
css.position.x= 10;
css.position.y= 5;
css.position.z= 10;

//javascript
const geometrySmall3 = new THREE.BoxGeometry(1,1,1);
const textureLoader4 = new THREE.TextureLoader();
const texture4 = textureLoader4.load('public/images/3D/js.png');
const materialSmall4 = new THREE.MeshBasicMaterial({ map: texture4 });
const javaScript = new THREE.Mesh(geometrySmall3, materialSmall4);
javaScript.position.x= 20;
javaScript.position.y= 3;
javaScript.position.z= 5;
javaScript.scale.set(2,2,2);

//react
const geometryReact = new THREE.BoxGeometry(1,1,1);
const textureReact = new THREE.TextureLoader();
const textureR = textureReact.load('public/images/3D/react.png');
const materialReact = new THREE.MeshBasicMaterial({ map: textureR });
const react = new THREE.Mesh(geometryReact, materialReact);
react.position.x= -8;
react.position.y= 0;
react.position.z= 16;
react.scale.set(2,2,2);

//node
const geometrynode = new THREE.BoxGeometry(1,1,1);
const textureNode = new THREE.TextureLoader();
const textureN = textureNode.load('public/images/3D/node.png');
const materialNode = new THREE.MeshBasicMaterial({ map: textureN});
const node = new THREE.Mesh(geometrynode, materialNode);
node.position.x= -1;
node.position.y= 3;
node.position.z= -20;

//three
const geometryThree = new THREE.BoxGeometry(1,1,1);
const textureThree= new THREE.TextureLoader();
const textureT = textureThree.load('public/images/3D/three2.png');
const materialThree = new THREE.MeshBasicMaterial({ map: textureT });
const three = new THREE.Mesh(geometryThree, materialThree);
three.position.x= -10;
three.position.y= -3;
three.position.z= -16;
three.scale.set(2,2,2);

//postgres
const geometryPost = new THREE.BoxGeometry(1,1,1);
const texturePost= new THREE.TextureLoader();
const textureP = texturePost.load('public/images/3D/postgres.png');
const materialPost = new THREE.MeshBasicMaterial({ map: textureP });
const postgres = new THREE.Mesh(geometryPost, materialPost);
postgres.position.x= -16;
postgres.position.y= 0;
postgres.position.z= 10;
postgres.scale.set(2,2,2);

//npm
const geometryNpm = new THREE.BoxGeometry(1,1,1);
const textureNpm= new THREE.TextureLoader();
const textureNp = textureNpm.load('public/images/3D/npm.png');
const materialNpm = new THREE.MeshBasicMaterial({ map: textureNp });
const npm = new THREE.Mesh(geometryNpm, materialNpm);
npm.position.x= 16;
npm.position.y= 4;
npm.position.z= -10;
//mongo
const geometryMongo = new THREE.BoxGeometry(1,1,1);
const textureMongo= new THREE.TextureLoader();
const textureM = textureMongo.load('public/images/3D/mongo.png');
const materialMongo = new THREE.MeshBasicMaterial({ map: textureM });
const mongo = new THREE.Mesh(geometryMongo, materialMongo);
mongo.position.x= -20;
mongo.position.y= 4;
mongo.position.z= 0;
mongo.scale.set(2,2,2);
//vue
const geometryVue = new THREE.BoxGeometry(1,1,1);
const textureVue= new THREE.TextureLoader();
const textureV = textureVue.load('public/images/3D/vite.png');
const materialVue = new THREE.MeshBasicMaterial({ map: textureV });
const vite = new THREE.Mesh(geometryVue, materialVue);
vite.position.x= -17;
vite.position.y= 0;
vite.position.z= -12;
//flutter
const geometryFlutter = new THREE.BoxGeometry(1,1,1);
const textureFlutter= new THREE.TextureLoader();
const textureF = textureFlutter.load('public/images/3D/flutter.png');
const materialFlutter = new THREE.MeshBasicMaterial({ map: textureF });
const flutter = new THREE.Mesh(geometryFlutter, materialFlutter);
flutter.position.x= 15;
flutter.position.y= 0;
flutter.position.z= 13;

//git
const geometryGit = new THREE.BoxGeometry(1,1,1);
const textureGit= new THREE.TextureLoader();
const textureG = textureGit.load('public/images/3D/git.png');
const materialGit = new THREE.MeshPhongMaterial({map: textureG});
const git = new THREE.Mesh(geometryGit, materialGit);
git.position.x= 10;
git.position.y= 0;
git.position.z= -18;

// Crea un grupo y agrega ambas esferas al grupo
const orbitGroup = new THREE.Group();
orbitGroup.add(sphere);
orbitGroup.add(html);
orbitGroup.add(css);
orbitGroup.add(javaScript);
orbitGroup.add(react);
orbitGroup.add(node);
orbitGroup.add(three);
orbitGroup.add(postgres);
orbitGroup.add(npm);
orbitGroup.add(mongo);
orbitGroup.add(vite);
orbitGroup.add(flutter);
orbitGroup.add(git);

// Agrega el grupo a la escena
scene.add(orbitGroup);

//luces--------
const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Luz ambiente
scene.add(ambientLight);



const controls = new OrbitControls(camera, renderer.domElement);


function animate(){
requestAnimationFrame(animate);
//sphere.rotation.y += 0.001;
sphere.rotation.x += 0.0001;
html.rotation.y += 0.01;
html.rotation.x += 0.01;
css.rotation.y += -0.01;
css.rotation.x += 0.01;
javaScript.rotation.y += 0.01;
javaScript.rotation.x += -0.01;
react.rotation.y += 0.01;
react.rotation.x += -0.01;
postgres.rotation.y += 0.01;
postgres.rotation.x += -0.01;
mongo.rotation.y += -0.01;
mongo.rotation.x += 0.01;
flutter.rotation.y += -0.01;
flutter.rotation.x += -0.01;
three.rotation.y += -0.01;
three.rotation.x += 0.01;
vite.rotation.y += 0.01;
vite.rotation.x += 0.01;
npm.rotation.y += -0.01;
npm.rotation.x += 0.01;
git.rotation.y += -0.01;
git.rotation.x += 0.01;
orbitGroup.rotation.y += 0.01;
controls.update();
renderer.render(scene, camera);
}

animate();