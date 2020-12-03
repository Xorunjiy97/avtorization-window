import Model from './model/Model.js';
import Modals from './modals/Modals';
import './style.less';

function init() {
	const db = new Model();

	window.db = db;
	const modals = new Modals(db);
	modals.init();
}

init();