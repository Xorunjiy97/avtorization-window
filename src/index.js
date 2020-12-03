import Model from './model/Model';
import Modals from './modals/Modals';
import './autoris-style.less';

function init() {
	const db = new Model();

	window.db = db;
	const modals = new Modals(db);
	modals.init();
}

init();
