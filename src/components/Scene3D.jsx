import { useRef, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Neural Network Node ─── */
function NeuronNode({ position, baseColor, size, layerIdx }) {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Data flow wave effect: pulses travel from layer 0 to layer 4
    const wave = Math.max(0, Math.sin(t * 1.5 - layerIdx * 0.7));
    const pulse = 0.3 + 0.7 * wave;
    
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = pulse * 1.8;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + 0.5 * wave);
      glowRef.current.material.opacity = 0.05 + 0.15 * wave;
    }
  });

  return (
    <group position={position}>
      {/* Outer glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 3, 12, 12]} />
        <meshBasicMaterial color={baseColor} transparent opacity={0.1} depthWrite={false} />
      </mesh>
      {/* Core neuron */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 12, 12]} />
        <meshStandardMaterial
          color={baseColor}
          emissive={baseColor}
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ─── Synaptic Connection Lines ─── */
function SynapseLines({ connections, nodes }) {
  const linesRef = useRef();

  const { positions, colors } = useMemo(() => {
    const pos = [];
    const col = [];
    const colorA = new THREE.Color('#4ade80');
    const colorB = new THREE.Color('#22d3ee');
    const colorDim = new THREE.Color('#1a3a2a');

    connections.forEach(([fromIdx, toIdx]) => {
      const from = nodes[fromIdx];
      const to = nodes[toIdx];
      pos.push(from[0], from[1], from[2]);
      pos.push(to[0], to[1], to[2]);
      const mix = Math.random();
      const c = colorA.clone().lerp(colorB, mix).lerp(colorDim, 0.5);
      col.push(c.r, c.g, c.b);
      col.push(c.r, c.g, c.b);
    });

    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(col),
    };
  }, [connections, nodes]);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      const t = clock.getElapsedTime();
      linesRef.current.material.opacity = 0.12 + 0.06 * Math.sin(t * 0.5);
    }
  });

  return (
    <lineSegments ref={linesRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.15}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

/* ─── Floating Data Particles ─── */
function DataParticles({ count = 80 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const posArr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.001;
      posArr[i * 3] += Math.cos(t * 0.2 + i * 0.5) * 0.0005;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4ade80"
        size={0.04}
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Biolume Fly (Scroll Guide) ─── */
function BiolumeFly() {
  const flyRef = useRef();

  useFrame(({ clock }) => {
    if (!flyRef.current) return;
    const t = clock.getElapsedTime();
    const scrollY = window.scrollY;

    // Fluttering effect (high frequency, small amplitude)
    const flutterX = Math.sin(t * 30) * 0.05;
    const flutterY = Math.cos(t * 35) * 0.05;

    // Base erratic hovering
    const hoverX = Math.sin(t * 3) * 2;
    const hoverY = Math.cos(t * 4) * 0.4;
    const hoverZ = Math.sin(t * 2) * 1.5;

    // Initial animation logic: Start near top, then dive to the bottom to hint at content
    let baseTargetY = 2.5; // Start high
    if (t > 2) {
      // After 2 seconds, smoothly dive down to the bottom over 2 seconds
      const diveProgress = Math.min((t - 2) / 2, 1);
      // Easing function for smooth dive
      const easeInOut = diveProgress < 0.5 ? 2 * diveProgress * diveProgress : -1 + (4 - 2 * diveProgress) * diveProgress;
      baseTargetY = 2.5 - (easeInOut * 5.5); // Move down to y = -3
    }

    // Scroll adds even more downward movement if they scroll
    const boundedScroll = Math.min(scrollY * 0.005, 2);
    const targetY = baseTargetY - boundedScroll + hoverY + flutterY;
    const targetX = hoverX + flutterX;
    const targetZ = hoverZ;

    // Smooth pursuit
    flyRef.current.position.x += (targetX - flyRef.current.position.x) * 0.08;
    flyRef.current.position.y += (targetY - flyRef.current.position.y) * 0.08;
    flyRef.current.position.z += (targetZ - flyRef.current.position.z) * 0.08;
  });

  return (
    <group ref={flyRef}>
      <mesh>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={4} toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      <pointLight color="#4ade80" intensity={1.5} distance={5} />
    </group>
  );
}

/* ─── Main Neural Network Group ─── */
function NeuralNetwork() {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  // Generate neural network layers
  const { nodes, connections, nodeData } = useMemo(() => {
    // 1 node on left, 1 node on right, with hidden layers in between
    const layers = [1, 5, 8, 5, 1];
    const layerSpacing = 3.2;
    const allNodes = [];
    const allConnections = [];
    const allNodeData = [];
    const layerStarts = [];
    const colors = ['#4ade80', '#22d3ee', '#a78bfa', '#34d399', '#4ade80'];

    layers.forEach((neuronCount, layerIdx) => {
      layerStarts.push(allNodes.length);
      const x = (layerIdx - (layers.length - 1) / 2) * layerSpacing;
      for (let j = 0; j < neuronCount; j++) {
        const y = (j - (neuronCount - 1) / 2) * 1.4;
        const z = (Math.random() - 0.5) * 1.0; // Flatter network so it's easier to see
        const idx = allNodes.length;
        allNodes.push([x, y, z]);
        allNodeData.push({
          position: [x, y, z],
          color: colors[layerIdx % colors.length],
          size: (layerIdx === 0 || layerIdx === layers.length - 1) ? 0.25 : 0.12 + Math.random() * 0.08,
          layerIdx: layerIdx
        });

        if (layerIdx > 0) {
          const prevStart = layerStarts[layerIdx - 1];
          for (let k = 0; k < layers[layerIdx - 1]; k++) {
            // Connect heavily to ensure the single input/output nodes are fully connected
            if (layerIdx === 1 || layerIdx === layers.length - 1 || Math.random() < 0.6) {
              allConnections.push([prevStart + k, idx]);
            }
          }
        }
      }
    });

    return { nodes: allNodes, connections: allConnections, nodeData: allNodeData };
  }, []);

  useFrame(({ clock, mouse: mousePos }) => {
    mouse.current.x = mousePos.x;
    mouse.current.y = mousePos.y;

    if (groupRef.current) {
      // Smoothly interpolate rotation to prevent snapping/fluctuation when mouse enters
      const targetRotY = mouse.current.x * 0.2;
      const targetRotX = mouse.current.y * 0.2;
      
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
      
      // Fixed to the top.
      groupRef.current.position.y = 2.8 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <SynapseLines connections={connections} nodes={nodes} />
      {nodeData.map((data, i) => (
        <NeuronNode
          key={i}
          position={data.position}
          baseColor={data.color}
          size={data.size}
          layerIdx={data.layerIdx}
        />
      ))}
      <DataParticles count={80} />
    </group>
  );
}

/* ─── Exported Canvas Wrapper ─── */
export default function Scene3D() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#4ade80" />
        <pointLight position={[-5, -3, 3]} intensity={0.2} color="#22d3ee" />
        <NeuralNetwork />
        <BiolumeFly />
      </Canvas>
    </div>
  );
}
