class Model {
  constructor() {
    this._db = [{ login: "Alex", password: "333" }];
  }

  saveUser = (user) => {
    this._db.push(user);
  };

  findUser = (currentUser) =>
    this._db.find(
      (user) =>
        user.login === currentUser.login &&
        user.password === currentUser.password
    );

  check = (name, pass) => {
    const result = this._db.some(
      (el) => el.login === name && el.password === pass
    );

    if (!result) {
      this._db.push({ login: name, password: pass });
    }
  };
}

export default Model;
