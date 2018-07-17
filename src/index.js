import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过import依赖库引入）
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  console.log(Data);

    return element;
}

document.body.appendChild(component());