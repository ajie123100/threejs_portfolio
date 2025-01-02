import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import * as THREE from 'three';

interface HeroCameraProps {
    children: React.ReactNode;
    isMobile: boolean;
}

const HeroCamera = ({ children, isMobile }: HeroCameraProps) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        // 平滑移动相机位置
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        // 如果不是移动设备且 groupRef.current 存在，则旋转 group
        if (groupRef.current && !isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
        }
    });

    return (
        <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
            {children}
        </group>
    );
};

export default HeroCamera;