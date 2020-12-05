class Autoris {
	constructor (db, welcome) {
		this._db = db;
		this.newDiv = null;
		this._welcome = welcome
	}

	getValue = event => {
		event.preventDefault();

		const login = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		const currentValue = {
			login,
			password,
		};
		this.openWelcomeWin(currentValue);
	}

	openWelcomeWin = (currentValue) => {
		if(undefined == this._db.findUser(currentValue)) {
			alert('net takoqo')
			
		} else {
			const root = document.getElementById('root');
			root.innerHTML = '';
			const div = document.createElement("div");
			const h2 = document.createElement("h2");
			div.append(h2);		  
			h2.setAttribute("class", "welcome");			  
			h2.innerHTML = `Велкоме ${currentValue.login}`;			  
			root.append(div);
		}
	}

    createDinamicLogIn = () => {
		this.newDiv = document.createElement('div');
		this.newDiv.setAttribute('class', 'login-box');
		
		const newH2 = document.createElement('h2');
		newH2.innerText = 'Авторизация';
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
		newDiv.append(close);

		singInButton.innerText = 'Sign in';
		singInButton.setAttribute('id', 'submit');
		singInButton.addEventListener('click', this.getValue)
		newForm.append(singInButton);
		return this.newDiv;
	}
}

export default Autoris;

// function validateEmail(email) 
//     {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }

// function isValidPassword(passw) {
//     var pattern = new RegExp(/[A-Za-z0-9]{6,}/);
//     return pattern.test(passw);
// }
