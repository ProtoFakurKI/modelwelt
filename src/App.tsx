import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[10, 10, 0.5, 32]} />
          <meshStandardMaterial color="#4a9c5d" />
        </mesh>
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={50}
        />
      </Canvas>
      
      {/* UI Overlay Placeholders */}
      <div className="ui-overlay" style={{
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'white',
        fontFamily: 'sans-serif',
        pointerEvents: 'none'
      }}>
        <h1>Modellbau-Welt</h1>
        <p style={{ fontSize: '12px' }}>Steuerung: Linksklick drehen, Rechtsklick pan, Mausrad zoom</p>
      </div>
      
      <button 
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          padding: '10px 20px',
          cursor: 'pointer'
        }}
        onClick={() => console.log('Reset view')}
      >
        Reset View
      </button>
    </div>
  )
}

export default App
