import './style.less';


import './style.less';

class ButView {
    constructor () {
        this._logIn = null;
        this._registr = null;
        this._root = null;
		  const data = null;
		  const sigin = null;

        this.init();
    }

    init = () => {
		  this._root = document.getElementById('root');
		  this.data = [];
		  
        this.addLogBut();
        this.addRegBut();
		  
        this._logIn = document.getElementById('login');
		  this._logIn.addEventListener('click', this.createDinamicLogIn, {once: true});
		  
		  this.sigin = document.getElementById("submit");
		  this.sigin.addEventListener("submit", this.getValue);
    }

    addLogBut = () => {
        const but = document.createElement('button');
        but.id = 'login';
        but.className = 'button blue';
        this._root.appendChild(but);
        // const unlock = document.createElement('i');
        // unlock.className = 'fa fa-unlock';
		  // but.appendChild(unlock);
		  
		  const span = document.createElement('span');
       	span.innerText ='Войти';
			but.appendChild(span);
    }

    addRegBut = () => {
        const but = document.createElement('a');
        but.className = 'button purple';
        this._root.appendChild(but);
        // const userPlus = document.createElement('i');
        // userPlus.className = 'fa fa-user-plus';
        // but.appendChild(userPlus);
        const butTxt = document.createTextNode('зарегестрироваться');
        const span = document.createElement('span');
        span.appendChild(butTxt);
        but.appendChild(span);
    }

    createDinamicLogIn = () => {
		const newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'login-box');
		this._root.appendChild(newDiv);
		
		const newH2 = document.createElement('h2');
		newH2.innerText = 'Sign in';
		newDiv.append(newH2);

		const newForm =  document.createElement('form');
		newDiv.append(newForm);

		const newDiv2 =  document.createElement('div');
		newDiv2.setAttribute('class', 'user-box');
		newForm.append(newDiv2);

		const newInput = document.createElement('input');
		newInput.setAttribute('id','username');
		newDiv2.append(newInput);

		const newLabel = document.createElement('label');
		const labelTxt = document.createTextNode('Username');
		newLabel.append(labelTxt);
		newDiv2.append(newLabel);

		const newDiv3 = document.createElement('div');
		newDiv3.setAttribute('class', 'user-box');
		newForm.append(newDiv3);

		const newInput2 = document.createElement('input');
		newInput2.setAttribute('id','password');
		newDiv3.append(newInput2);

		const newLabel2 = document.createElement('label');
		newLabel2.innerText = 'Password';
		newDiv3.append(newLabel2);

		const newBtn = document.createElement('button');
		newBtn.setAttribute('type', 'submit');

		newBtn.innerText = 'Sign in';
		newBtn.setAttribute('id', 'submit')
        newForm.append(newBtn);
	 }
	 
	 getValue = event => {
		event.preventDefault();
		let usName = document.getElementById("username").value;
		let psWord = document.getElementById("password").value;
	 
		const obj = {};
		obj.usName = usName;
		obj.psWord = psWord;
		this.data.push(obj);

		return obj;
	 }
}
new ButView();