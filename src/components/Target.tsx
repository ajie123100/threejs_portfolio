import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

const Target = (props: GroupProps) => {
    const targetRef = useRef<THREE.Object3D>(null);
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true
            });
        }
    }, { dependencies: [targetRef.current] });

    return <primitive ref={targetRef} object={scene} {...props} />;
};

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

export default Target;