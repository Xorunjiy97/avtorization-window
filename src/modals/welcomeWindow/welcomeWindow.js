
class Welcome {

	constructor (db) {

		this.div = null;
		this.db = db;
	}

	showWelcome = ()  => {
		const div = document.createElement("div");
		const h2 = document.createElement("h2");

		div.append(h2);
		h2.setAttribute("class", "welcome");
		h2.innerText = 'Велкоме ';
	}

}


 export default Welcome ;
