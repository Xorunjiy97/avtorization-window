import Registr from './registrModalWindow/RegistrModalWindow';
import Autoris from './autorisModalWindow/AutorisModalWindow';
import Welcome from './welcomeWindow/welcomeWindow';


class Modals {
	constructor(db) {
        this._root = document.getElementById('root');
		  this._welcome = new Welcome(db);
		this._autoris = new Autoris(db, this._welcome);
		  this._registr = new Registr(db, this._autoris);
	}

	init = () => {
		const registrModal = this._registr.createDinamicLogIn();
		this._root.append(registrModal);
    }
    
}

export default Modals;