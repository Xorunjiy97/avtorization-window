import Registr from './registrModalWindow/RegistrModalWindow';
import Autoris from './autorisModalWindow/AutorisModalWindow';

class Modals {
	constructor(db) {
        this._root = document.getElementById('root');
        this._registr = new Registr(db);
        this._autoris = new Autoris(db);
	}

	init = () => {
        const registrModal = this._registr.createDinamicLogIn();
        const autorisModal = this._autoris.createDinamicLogIn();
        this.choiseWindow(registrModal, autorisModal);
    }
    
    choiseWindow = (registrModal, autorisModal) => {
        let val = 2;
        if(registrModal && typeof registrModal === 'object' && registrModal.nodeType) {
            val == 1
            this._root.append(registrModal);
        } else if(value === 2) {
            registrModal.remove();
            this._autoris.createDinamicLogIn();
            this._root.append(autorisModal); 
        }
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