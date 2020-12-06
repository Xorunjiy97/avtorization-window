import Registr from "./registrModalWindow/RegistrModalWindow";
import Autoris from "./autorisModalWindow/AutorisModalWindow";


class Modals {
  constructor(db) {
    this._root = document.getElementById("root");
    this.isChek = false;
    this._autoris = new Autoris(db);
    this._registr = new Registr(db, this._autoris);
  }

  init = () => {
    this.closeWindow();
  };

  closeWindow = () => {
    if (this.isChek === true) {
      this._root.innerHTML = "";
      this._root.append(this._autoris.createDinamicLogIn());
      const closeBut = document.getElementById("close");
      closeBut.addEventListener("click", this.closeWindow);
      this.isChek = false;
    } else if (this.isChek === false) {
      this._root.innerHTML = "";
      this._root.append(this._registr.createDinamicLogIn());
      const closeBut = document.getElementById("close");
      closeBut.addEventListener("click", this.closeWindow);
      this.isChek = true;
    }
  };
}

export default Modals;
