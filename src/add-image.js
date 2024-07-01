import Kiwi from './kiwi.jpg';
import altText from './alt.txt';

export default function addImage() {
  const img = document.createElement('img');
  img.src = Kiwi;
  img.alt = altText;
  img.width = 300;

  const body = document.querySelector('body');
  body.appendChild(img);
}
