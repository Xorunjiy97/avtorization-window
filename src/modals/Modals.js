import Registr from './registrModalWindow/RegistrModalWindow';
import Autoris from './autorisModalWindow/AutorisModalWindow';

class Modals {
	constructor(db) {
        this._root = document.getElementById('root');
		this._autoris = new Autoris(db);
        this._registr = new Registr(db, this._autoris);
	}

	init = () => {
		const registrModal = this._registr.createDinamicLogIn();
		this._root.append(registrModal);
        // const autorisModal = this._autoris.createDinamicLogIn();
        // this.choiseWindow(registrModal, autorisModal);
    }
    
    choiseWindow = () => {
        // let val = 2;
        // if(registrModal && typeof registrModal === 'object' && registrModal.nodeType) {
        //     val == 1
        //     this._root.append(registrModal);
        // } else if(value === 2) {
        //     registrModal.remove();
        //     this._autoris.createDinamicLogIn();
        //     this._root.append(autorisModal); 
        // }
        // if ( ) {  
        //     this._root.append(registrModal);
        //     val = 2;      
        // } else {
        //     this._root.append(autorisModal);

        //     val = 1;
        // }
    }
}

export default Modals;