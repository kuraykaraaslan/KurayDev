import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect, createRef, Component } from 'react'
import { Canvas, useFrame, useLoader, PointsMaterial } from '@react-three/fiber'
import Link from 'next/link'
import { OrbitControls } from 'three/addons/controls/OrbitControls';

import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'

const HeroTop = () => {

    function Box(props) {
        // This reference will give us direct access to the mesh
        const meshRef = useRef()
        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (meshRef.current.rotation.x += delta))
        // Return view, these are regular three.js elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={meshRef}
                scale={active ? 1.5 : 1}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
        )
    }

    function Model(props) {
    
        const loader = useLoader(PCDLoader, '/assets/models/Zaghetto.pcd')

        return (
            <points {...props}>
                <bufferGeometry
                    attach="geometry"
                    
                    >
                    <bufferAttribute
                        attachObject={['attributes', 'position']}
                        
                        />
                </bufferGeometry>
                <pointsMaterial
                    attach="material"
                    color

                    />
            </points>
        )
    }

    // This component was auto-generated from Canvas.js

    


    // This component was auto-generated from Canvas.js
    /*
    useEffect(() => {
        createRoot(document.getElementById('canvas')).render(
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model position={[0, 0, 0]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>,
        )

    }, [])

    */

    return (
        <div className="hero min-h-screen bg-base-300 -mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse mx-4 md:mx-20">
                <div className="max-w-sm rounded-lg shadow-2xl hidden lg:block" id='canvas' >
                    <div className="mockup-code  bg-base-100 rounded-box">
                        <pre data-prefix="$" className="text-info"><code>curl https://kuray.dev/cli/whoami.py</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>python whoami.py</code></pre>
                        <pre data-prefix=">" className="text-success"><code>welcome to kuray's portfolio</code></pre>
                    </div>
                </div>
                <div className="flex-1 lg:mr-12">
                    <h1 className="text-5xl font-bold  relative overflow-hidden animate-shake pb-4">i do things with code.</h1>
                    <p className="py-6">full stack developer, linux enthusiast, and a big fan of open source. I love to automate things and make life easier.</p>
                    <Link href="/contact">
                    <p className="btn btn-primary lowercase">contact me</p>
                    </Link>
                    <Link href="/projects" locale="en">
                    <p className="btn btn-ghost ml-2 lowercase">see my work</p>
                    </Link>
                </div>
            </div>
        </div>
    )

    
      
}

export default HeroTop;
