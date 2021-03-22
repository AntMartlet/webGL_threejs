
import './App.css';
import {Scene, PerspectiveCamera, WebGLRenderer, Color, Vector2, LineBasicMaterial, BufferGeometry, Line } from 'three';

function App() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight);
  const renderer = new WebGLRenderer();
  scene.background = new Color(0x006600);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement) 
  
  const points = [
    new Vector2(0, 0),
    new Vector2(1, 1),
    new Vector2(2, 0),
    new Vector2(0, 0),
  ];
  camera.position.z = 5;
  const material = new LineBasicMaterial({color: 0x000000});
  const geometryLine = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometryLine, material);
  scene.add(line);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  return (
    <div className="App">
    </div>
  );
}

export default App;
