import './style.less';

class RegistrWindow {
    constructor () {
        this.root = null;

        this.init();
    }

    init = () => {
        this._root = document.getElementById('root');


    }

    getValue = event => {
        event.preventDefault();
        let usName = document.getElementById("username").value;
        let psWord = document.getElementById("password").value;

        const values = {
        usName: usName,
        psWord: psWord,
    };

    console.log(values);
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

        this.sigin = document.getElementById("submit");
        this.sigin.addEventListener("submit", this.getValue);
        
        // const sigin = document.getElementById("submit");
        // sigin.addEventListener("click", getValue);
	}
}

// export const win = new RegistrWindow ();
