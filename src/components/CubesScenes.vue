<script setup>
    import * as THREE from 'three';
    import { onMounted, markRaw, onUnmounted } from 'vue'
    import { sceneStore } from 'src/store/sceneStore';
    import { renderStore } from 'src/store/renderStore';
    import { animate } from 'src/services/animate';
    import { useCameraLookAtPosition } from 'src/services/mouse/useCameraLookAtPosition';
    import { createCubeMatrix } from 'src/services/createCubeMatrix';
    import { addCamera } from 'src/services/camera/addCamera';
    import { addSpotLight } from 'src/services/light/addSpotLight';
    import { useCameraTargetPosition } from 'src/services/mouse/useCameraTargetPosition';
    import { cameraStore } from 'src/store/cameraStore';

    useCameraLookAtPosition()
    useCameraTargetPosition()

    onMounted(() => {
        window.addEventListener('resize', handleResizeWindow)
    })

    onMounted(() => {
        const scene = new THREE.Scene();
        sceneStore.setScene(markRaw(scene))

        const light = new THREE.DirectionalLight( 0xffffff, 0.5);
        light.position.set( 0, 0, 5);
        light.castShadow = true;

        scene.add(light)

        createCubeMatrix()
        addCamera()
        addSpotLight(scene)

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight);

        renderStore.setRenderer(markRaw(renderer))

        document.body.appendChild( renderer.domElement );

        animate()
    })

    onUnmounted(() => {
        document.removeEventListener('resize', handleResizeWindow)
    })

    const handleResizeWindow = () => {
        if(cameraStore.camera){
            cameraStore.camera.aspect = window.innerWidth / window.innerHeight;
            cameraStore.camera.updateProjectionMatrix();
        }
        renderStore.renderer?.setSize( window.innerWidth, window.innerHeight);
    }

</script>

<template></template>
