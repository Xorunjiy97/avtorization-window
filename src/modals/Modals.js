import Registr from './registrModalWindow/RegistrModalWindow';
import Autoris from './autorisModalWindow/AutorisModalWindow';

class Modals {
	constructor(db) {
        this._root = document.getElementById('root');
		this._autoris = new Autoris(db);
        this._registr = new Registr(db, this._autoris);
        this.isChek = true;
	}

	init = () => {
		const registrModal = this._registr.createDinamicLogIn();
        this._root.append(registrModal);
        // const closeBut = document.getElementById('close');
        // closeBut.addEventListener('click', this.closeWindow);
    }

    // closeWindow = () => {
    //     console.log(1111111111111);
    //     if(this.isChek === true) {
    //         this._root.innerHTML = ''
    //         this._root.append(this._autoris.createDinamicLogIn());
    //         this.isChek = false;
    //     } else if (this.isChek === false) {
    //         this._root.innerHTML = ''
    //         this._root.append(this._registr.createDinamicLogIn());
    //         this.isChek = true;
    //     }

    // }
}

export default Modals;