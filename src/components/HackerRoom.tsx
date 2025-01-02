/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 hacker-room-new.glb -T 
Files: hacker-room-new.glb [34.62MB] > /Users/hsuwinlat/Desktop/jsm pj/threejscc-portfolio/public/models/hacker-room-new-transformed.glb [2.56MB] (93%)
*/

import { useGLTF, useTexture } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three'; // 导入 THREE 命名空间

type GLTFResult = GLTF & {
    nodes: {
        screen_screens_0: THREE.Mesh;
        screen_glass_glass_0: THREE.Mesh;
        table_table_mat_0_1: THREE.Mesh;
        table_table_mat_0_2: THREE.Mesh;
        table_table_mat_0_3: THREE.Mesh;
        table_table_mat_0_4: THREE.Mesh;
        table_table_mat_0_5: THREE.Mesh;
        table_table_mat_0_6: THREE.Mesh;
        table_table_mat_0_7: THREE.Mesh;
        table_table_mat_0_8: THREE.Mesh;
        table_table_mat_0_9: THREE.Mesh;
        table_table_mat_0_10: THREE.Mesh;
        table_table_mat_0_11: THREE.Mesh;
        table_table_mat_0_12: THREE.Mesh;
        // 其他节点的类型
    };
    materials: {
        screens: THREE.Material;
        glass: THREE.Material;
        table_mat: THREE.Material;
        computer_mat: THREE.Material;
        server_mat: THREE.Material;
        vhsPlayer_mat: THREE.Material;
        stand_mat: THREE.Material;
        mat_mat: THREE.Material;
        arm_mat: THREE.Material;
        tv_mat: THREE.Material;
        cables_mat: THREE.Material;
        props_mat: THREE.Material;
        ground_mat: THREE.Material;
        key_mat: THREE.Material;
        // 其他材质的类型
    };
};

const HackerRoom = (props: GroupProps) => {
    const { nodes, materials } = useGLTF('/models/hacker-room.glb') as GLTFResult;

    const monitortxt = useTexture('textures/desk/monitor.png');
    const screenTxt = useTexture('textures/desk/screen.png');

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
                <meshMatcapMaterial map={screenTxt} />
            </mesh>
            <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
            <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
            <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
                <meshMatcapMaterial map={monitortxt} />
            </mesh>
            <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
            <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
            <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
            <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
            <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
            <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
                <meshMatcapMaterial map={monitortxt} />
            </mesh>
            <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
            <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
            <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
            <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
        </group>
    );
}

useGLTF.preload('/models/hacker-room.glb');

export default HackerRoom