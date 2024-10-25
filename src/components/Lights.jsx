import React from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useEffect, useRef, useState } from "react";

export const Lights = () => {
  const targetRef = useRef(null); // spotLight의 lookAt을 컨트롤하기 위한 targetRef
  const [target, setTarget] = useState();
  const lightRef = useRef(null);

  // lightHelper 선언을 도와주는 Hook
  // useHelper(lightRef, DirectionalLightHelper, 5, 0xffff00);
  // useHelper(lightRef, PointLightHelper, 5, 0xffff00);
  // useHelper(lightRef, HemisphereLightHelper, 5, 0xffff00);
  useHelper(lightRef, SpotLightHelper, 5);

  useEffect(() => {
    if (targetRef.current) setTarget(targetRef.current);
  }, []);
  return (
    <>
      {/* <ambientLight args={[0xffffff, 5]} /> */}

      {/* directionalLight 및 간단한 그림자 설정 */}
      {/* <directionalLight
        ref={lightRef}
        args={[0xffffff, 5]}
        position={[4, 4, 4]}
        castShadow
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      /> */}

      {/* <pointLight
        ref={lightRef}
        args={[0xffffff, 10, 10, 1]}
        position-y={4}
        castShadow
      /> */}
      {/* 
      <hemisphereLight
        ref={lightRef}
        args={[0x0000ff, 0xf00ff0, 5]}
        position-y={2}
      /> */}

      {/* <rectAreaLight
        args={[0xffffff, 5, 4, 4]}
        position-y={1}
        rotation-x={-Math.PI / 2}
        // rotation-x={Math.PI / 2}
      /> */}

      {/* <spotLight
        ref={lightRef}
        args={[0xffffff, 10, 100, Math.PI / 4, 1, 0.5]}
        castShadow
        position={[3, 3, 3]}
      /> */}

      {/* spotLight의 타겟 */}
      {/* <object3D ref={targetRef} />  */}
      {/* Drei에서 기능이 추가된 SpotLight */}

      <object3D ref={targetRef} position={[-2, 2, 2]} />
      <SpotLight
        color={0xffffff}
        intensity={10}
        distance={100}
        angle={Math.PI / 4}
        penumbra={1}
        decay={0.5}
        anglePower={100} // 빛의 집중 정도
        attenuation={5} // 빛의 세기가 광원으로 부터의 거리가 멀어질수록 빨리 감소하는 정도
        radiusTop={1} // 조명의 상단 반지름
        radiusBottom={10} // 조명의 하단 반지름
        opacity={1} // 불투명도
        volumetric // 조명을 좀 더 사실적으로 만들어줄지 여부(체적조명 사용 여부)
        debug // 디버그 모드 활성화 여부
        position={[3, 3, 3]}
        target={target}
        // castShadow={false}
      />
    </>
  );
};
