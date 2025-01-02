import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import Target from '../components/Target.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import CanvasLoader from '../components/CanvasLoader.js';
import HackerRoom from '../components/HackerRoom.js';
import ReactLogo from '../components/RecatLogo.js';
import Button from '../components/Button.js';

const Hero = () => {
    // 使用媒体查询判断屏幕尺寸
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    // 根据屏幕尺寸计算组件大小和位置
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* 标题部分 */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am ajie <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>

            {/* 3D 场景部分 */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        {/* 隐藏 Leva 控制器 */}
                        <Leva hidden />

                        {/* 设置默认相机 */}
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        {/* HeroCamera 控制视角 */}
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition as [number, number, number]}
                                rotation={[0.1, -Math.PI, 0]}
                            />
                        </HeroCamera>

                        {/* 其他 3D 组件 */}
                        <group>
                            <Target position={sizes.targetPosition as [number, number, number]} />
                            <ReactLogo position={sizes.reactLogoPosition as [number, number, number]} />
                            <Rings position={sizes.ringPosition as [number, number, number]} />
                            <Cube position={sizes.cubePosition as [number, number, number]} />
                        </group>

                        {/* 灯光 */}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            {/* 底部按钮 */}
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit block mx-auto">
                    <Button
                        name="Let's work together"
                        isBeam
                        containerClass="sm:w-fit w-full sm:min-w-96"
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;