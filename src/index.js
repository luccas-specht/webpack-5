import functionHello from './hello-world';
import addImage from './add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import heading from './components/heading/heading.js';

const hee = new HelloWorldButton();
const he = new heading();
addImage();
he.render();
hee.render();
