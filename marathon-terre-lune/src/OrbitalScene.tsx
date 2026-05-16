import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

export type OrbitTheme = 'dark' | 'light'

export type OrbitalSceneProps = {
  theme: OrbitTheme
  reducedMotion: boolean
}

function PlanetBody({
  radius,
  orbitRadius,
  orbitSpeed,
  phase,
  color,
  emissive,
  emissiveIntensity,
  roughness,
  metalness,
  reducedMotion,
  fixedAngle,
  spinSpeed,
}: {
  radius: number
  orbitRadius: number
  orbitSpeed: number
  phase: number
  color: string
  emissive?: string
  emissiveIntensity?: number
  roughness: number
  metalness: number
  reducedMotion: boolean
  fixedAngle: number
  spinSpeed: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    const mesh = ref.current
    if (!mesh) return
    const t = reducedMotion ? fixedAngle : state.clock.elapsedTime * orbitSpeed + phase
    mesh.position.set(Math.cos(t) * orbitRadius, 0, Math.sin(t) * orbitRadius)
    if (!reducedMotion) {
      mesh.rotation.y += spinSpeed * state.clock.getDelta()
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive ?? '#000000'}
        emissiveIntensity={emissiveIntensity ?? 0}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  )
}

function OrbitRings({ ringColor, theme }: { ringColor: string; theme: OrbitTheme }) {
  const opacity = theme === 'light' ? 0.12 : 0.22
  const radii = [2.95, 2.12, 1.32]
  return (
    <>
      {radii.map((r) => (
        <mesh key={r} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r * 0.94, r * 1.02, 96]} />
          <meshBasicMaterial
            color={ringColor}
            side={THREE.DoubleSide}
            transparent
            opacity={opacity}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  )
}

function System({ theme, reducedMotion }: OrbitalSceneProps) {
  const rootRef = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!rootRef.current || reducedMotion) return
    rootRef.current.rotation.y = state.clock.elapsedTime * 0.018
  })

  const ambient = theme === 'light' ? 0.42 : 0.26
  const hemi = theme === 'light' ? 0.5 : 0.34

  return (
    <>
      <ambientLight intensity={ambient} />
      <hemisphereLight
        color="#b8cfff"
        groundColor="#2a1a12"
        intensity={hemi}
      />
      <directionalLight position={[8.5, 10.5, 6.5]} intensity={theme === 'light' ? 1.05 : 1.2} color="#fff5e8" />
      <pointLight position={[0, 0, 0]} intensity={theme === 'light' ? 0.95 : 1.2} color="#ffd9a8" distance={14} decay={2} />

      <group ref={rootRef} rotation={[0.58, 0, 0.15]}>
        <OrbitRings ringColor="#c9a6ff" theme={theme} />

        <mesh>
          <sphereGeometry args={[0.14, 48, 48]} />
          <meshStandardMaterial
            color="#ffcc66"
            emissive="#ff9933"
            emissiveIntensity={theme === 'light' ? 2.1 : 2.6}
            roughness={0.45}
            metalness={0.12}
          />
        </mesh>

        <PlanetBody
          radius={0.11}
          orbitRadius={2.82}
          orbitSpeed={0.15}
          phase={0.7}
          color="#d4623a"
          emissive="#3d1508"
          emissiveIntensity={0.08}
          roughness={0.9}
          metalness={0.06}
          reducedMotion={reducedMotion}
          fixedAngle={0.4}
          spinSpeed={0.2}
        />
        <PlanetBody
          radius={0.33}
          orbitRadius={2.05}
          orbitSpeed={-0.24}
          phase={2.05}
          color="#3a7ab8"
          emissive="#0a1830"
          emissiveIntensity={0.14}
          roughness={0.38}
          metalness={0.22}
          reducedMotion={reducedMotion}
          fixedAngle={3.75}
          spinSpeed={0.32}
        />
        <PlanetBody
          radius={0.17}
          orbitRadius={1.28}
          orbitSpeed={0.38}
          phase={4.15}
          color="#d9d2c6"
          emissive="#1a1612"
          emissiveIntensity={0.05}
          roughness={0.97}
          metalness={0.02}
          reducedMotion={reducedMotion}
          fixedAngle={5.05}
          spinSpeed={0.07}
        />
      </group>
    </>
  )
}

export default function OrbitalScene({ theme, reducedMotion }: OrbitalSceneProps) {
  return (
    <div className="orbit-canvas-wrap">
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 4.5, 9.6], fov: 39, near: 0.05, far: 100 }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <Suspense fallback={null}>
          <System theme={theme} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  )
}
