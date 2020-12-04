class Registr {
	constructor (db, autWin) {
		this._db = db;
		this.autoris = autWin;
		this.newDiv = null;
	}

	getValue = event => {
		event.preventDefault();

		const login = document.getElementById("username").value;
        const password = document.getElementById("password").value;
		const currentValue = {
			login,
			password,
		};

		this._db.saveUser(currentValue);

		this.clearInput();
		const rem = document.getElementById('registr-box');
		const root = document.getElementById('root');
		this.newDiv.remove(this.newDiv);
		root.append(this.autoris.createDinamicLogIn());
        //создать функцию которая будет переключать страницу на authPage
	}

    clearInput = () => {
      document.getElementById("username").value = '';
      document.getElementById("password").value = '';
    }

    createDinamicLogIn = () => {
		this.newDiv = document.createElement('div');
		this.newDiv.setAttribute('class', 'registr-box');
		// document.getElementById('root').appendChild(newDiv);
		
		const newH2 = document.createElement('h2');
		newH2.innerText = 'registration ';
		this.newDiv.append(newH2);

		const newForm =  document.createElement('form');
		this.newDiv.append(newForm);

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

		const singInButton = document.createElement('button');
		singInButton.setAttribute('type', 'submit');

		const close = document.createElement('a');
		close.innerText = 'x';
		close.setAttribute('id', 'close');
		this.newDiv.append(close);

		singInButton.innerText = 'registration ';
		singInButton.setAttribute('id', 'submit');
		singInButton.addEventListener('click', this.getValue)
		newForm.append(singInButton);

		return this.newDiv;
	}
}

export default Registr;