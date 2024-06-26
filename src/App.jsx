import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from './components/Loader'
import Island from './models/Island'
import Bird from './models/Bird'
import Plane from './models/Plane'
import Sky from './models/Sky'
import HomeInfo from './components/HomeInfo'

const App = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale
    let screenPosition = [0, -6.5, -43]
    let screenRotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, screenRotation]
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1]
      screenPosition = [0, -0.5, 0]
    } else {
      screenScale = [1.25, 1.25, 1.25]
      screenPosition = [0, -0.25, 0]
    }
    
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <main className='bg-slate-300/20'>
      <section className={'w-full h-screen relative ' + (isRotating ? 'cursor-grabbing' : 'cursor-grab')}>
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className='w-full h-screen bg-transparent'
          camera={{near: 0.1, far: 1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[5, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />

            <Bird />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              position={planePosition}
              scale={planeScale}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>
      </section>
    </main>
  )
}

export default App