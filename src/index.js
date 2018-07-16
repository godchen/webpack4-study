import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过import依赖库引入）
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());