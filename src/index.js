import './index.less'

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'hedfsdddfdssdsllo';
    element.classList.add('changeColor');
  
    return element;
  }
  
  document.body.appendChild(component());