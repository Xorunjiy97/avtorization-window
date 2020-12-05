class Model {
	constructor() {
		this._db = [{ login: 'Alex', password: '333' }];
	}

  saveUser = (user) => {
    this._db.push(user);
  };

	findUser = currentUser => this._db.find(user => user.login === currentUser.login && (user.password === currentUser.password));

	checkReg = currentUser => this._db.find(user => user.login === currentUser.login);
}

export default Model;
