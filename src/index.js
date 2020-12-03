// import './style.less';
// import RegistrWindow from './registr.js';
// console.log(registr);



// class ButView {
//     constructor () {
//         this._logIn = null;
//         this._registr = null;
//         this._root = null;
//         this.init();
//     }

//     init = () => {
//         this._root = document.getElementById('root');
//         registr.createDinamicLogIn();
//         const sigin = document.getElementById("submit");
//         sigin.addEventListener("click", registr.getValue);
//     }
// }
// new ButView();

// // addLogBut = () => {
//     //     const but = document.createElement('button');
//     //     but.id = 'login';
//     //     but.className = 'button blue';
//     //     this._root.appendChild(but);
//     //       const span = document.createElement('span');
//     //        span.innerText ='Войти';
//     //         but.appendChild(span);
//     // }

//     // addRegBut = () => {
//     //     const but = document.createElement('a');
//     //     but.className = 'button purple';
//     //     this._root.appendChild(but);
//     //     const butTxt = document.createTextNode('зарегестрироваться');
//     //     const span = document.createElement('span');
//     //     span.appendChild(butTxt);
//     //     but.appendChild(span);
//     // }

//     // this.addLogBut();
//         // this.addRegBut();

//         // this._logIn = document.getElementById('login');
//         // this._logIn.addEventListener('click', regWindow.win.createDinamicLogIn, {once: true});

import Model from './model/Model';
import Modals from './modals/Modals';
import './style.less';

function init() {
	const db = new Model();

	window.db = db;
	const modals = new Modals(db);
	modals.init();
}

init();