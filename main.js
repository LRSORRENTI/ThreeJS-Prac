import * as THREE from 'three'

// Creating the scene:
// To actually be able to 
//display anything with three.js, 
//we need three things: scene, camera and 
// renderer, so that we can render the scene 
// with camera.

// Let's take a moment to explain what's 
// going on here. We have now set up the scene, 
// our camera and the renderer.

const scene = new THREE.Scene();

// There are a few different cameras in three.js.
// For now, let's use a PerspectiveCamera.

// The first attribute is the field of view. 
// FOV is the extent of the scene that is seen 
// on the display at any given moment. 
// The value is in degrees.

// The second one is the aspect ratio. 
// You almost always want to use the width 
// of the element divided by the height, 
// or you'll get the same result as when you play 
// old movies on a widescreen TV - the image 
// looks squished.

// The next two attributes are the near and far 
// clipping plane. What that means, is 
// that objects further away from the camera than 
// the value of far or closer than near won't be 
// rendered. You don't have to worry about this now, 
// but you may want to use other values in your apps
// to get better performance.

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Next up is the renderer. In addition to creating 
// the renderer instance, we also need to set the 
// size at which we want it to render our app. 
// It's a good idea to use the width and height of 
// the area we want to fill with our app - in this case,
// the width and height of the browser window. 
// For performance intensive apps, you can also 
// give setSize smaller values, 
// like window.innerWidth/2 and window.innerHeight/2, 
// which will make the app render at quarter size.

// If you wish to keep the size of your app but render 
// it at a lower resolution, you can do so by calling 
// setSize with false as updateStyle (the third argument). 
// For example, setSize(window.innerWidth/2, 
// window.innerHeight/2, false) will render your 
// app at half resolution, given that your <canvas> 
// has 100% width and height.

const renderer = new THREE.WebGLRenderer();

// Last but not least, we add the renderer element 
// to our HTML document. This is a <canvas> element the 
// renderer uses to display the scene to us.

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );