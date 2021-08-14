import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function handleKeyDown(event) {
      if (event.keyCode === 40) {
        //40 is down arrow
        window.isBDown = true;
      }
    }

    function handleKeyUp(event) {
      if (event.keyCode === 40) {
        window.isBDown = false;
      }
    }

    window.addEventListener("keydown", handleKeyDown, false);
    window.addEventListener("keyup", handleKeyUp, false);

    var animate = function () {
      requestAnimationFrame(animate);

      //  requestAnimationFrame(animate);
  if (window.isBDown) {
    cube.rotation.x += 0.01;
  }

      renderer.render(scene, camera);
    };
  
    
    

    animate();

    
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
  

}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
