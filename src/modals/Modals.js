import Autoris from './autorisModalWindow/AutorisModalWindow';

class Modals {
	constructor(db) {
		this._root = document.getElementById('root');
		this._autoris = new Autoris(db);
	}

	init = () => {
		const autorisModal = this._autoris.createDinamicLogIn();

		this._root.append(autorisModal);
	}
}

export default Modals;