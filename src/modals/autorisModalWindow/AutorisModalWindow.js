class Autoris {
  constructor(db) {
    this._db = db;
  }

  getValue = (event) => {
    event.preventDefault();

    const login = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const currentValue = {
      login,
      password,
    };

    this._db.findUser(currentValue);

    this.clearInput();
  };

  clearInput = () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };

  createDinamicLogIn = () => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "login-box");
    // document.getElementById('root').appendChild(newDiv);

    const newH2 = document.createElement("h2");
    newH2.innerText = "Sign in";
    newDiv.append(newH2);

    const newForm = document.createElement("form");
    newDiv.append(newForm);

    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "user-box");
    newForm.append(newDiv2);

    const newInput = document.createElement("input");
    newInput.setAttribute("id", "username");
    newDiv2.append(newInput);

    const newLabel = document.createElement("label");
    const labelTxt = document.createTextNode("Username");
    newLabel.append(labelTxt);
    newDiv2.append(newLabel);

    const newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "user-box");
    newForm.append(newDiv3);

    const newInput2 = document.createElement("input");
    newInput2.setAttribute("id", "password");
    newDiv3.append(newInput2);

    const newLabel2 = document.createElement("label");
    newLabel2.innerText = "Password";
    newDiv3.append(newLabel2);

    const singInButton = document.createElement("button");
    singInButton.setAttribute("type", "submit");

    singInButton.innerText = "Sign in";
    singInButton.setAttribute("id", "submit");
    singInButton.addEventListener("click", this.getValue);
    newForm.append(singInButton);
    return newDiv;
  };
}

export default Autoris;
