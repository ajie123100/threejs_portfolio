import { useGSAP } from '@gsap/react'; // 用于在 React 中使用 GSAP 动画
import { Center, useTexture } from '@react-three/drei'; // 从 drei 库中导入 Center 和 useTexture
import gsap from 'gsap'; // 导入 GSAP 动画库
import { useCallback, useRef } from 'react'; // 导入 React 钩子
import { Mesh } from 'three'; // 导入 Three.js 的 Mesh 类型

// 定义 Rings 组件的 props 接口
interface RingsProps {
    position: [number, number, number]; // 环的位置，类型为三元组数组
}

const Rings = ({ position }: RingsProps) => {
    // 使用 useRef 创建一个存储 Mesh 引用的数组
    const refList = useRef<Mesh[]>([]);

    // 获取 mesh 的引用
    const getRef = useCallback((mesh: Mesh | null) => {
        // 如果 mesh 存在且不在 refList 中，则将其添加到 refList
        if (mesh && !refList.current.includes(mesh)) {
            refList.current.push(mesh);
        }
    }, []);

    // 使用 useTexture 加载纹理
    const texture = useTexture('textures/rings.png');

    // 使用 useGSAP 初始化动画
    useGSAP(
        () => {
            // 如果 refList 为空，则直接返回
            if (refList.current.length === 0) return;

            // 设置每个环的初始位置
            refList.current.forEach((r) => {
                r.position.set(position[0], position[1], position[2]);
            });

            // 创建 GSAP 动画时间线
            gsap
                .timeline({
                    repeat: -1, // 动画无限循环
                    repeatDelay: 0.5, // 每次循环之间的延迟
                })
                .to(
                    refList.current.map((r) => r.rotation), // 对每个环的旋转属性进行动画
                    {
                        y: `+=${Math.PI * 2}`, // 绕 Y 轴旋转 360 度
                        x: `-=${Math.PI * 2}`, // 绕 X 轴旋转 -360 度
                        duration: 2.5, // 动画持续时间
                        stagger: {
                            each: 0.15, // 每个环的动画延迟
                        },
                    },
                );
        },
        { dependencies: [position] }, // 当 position 变化时重新运行动画
    );

    return (
        <Center> {/* 使用 Center 将内容居中 */}
            <group scale={0.5}> {/* 缩放整个组 */}
                {Array.from({ length: 4 }, (_, index) => ( // 创建 4 个环
                    <mesh key={index} ref={getRef}> {/* 每个环的 Mesh */}
                        <torusGeometry args={[(index + 1) * 0.5, 0.1]} /> {/* 环的几何体，半径逐渐增大 */}
                        <meshMatcapMaterial matcap={texture} toneMapped={false} /> {/* 使用加载的纹理作为材质 */}
                    </mesh>
                ))}
            </group>
        </Center>
    );
};

export default Rings; // 导出 Rings 组件