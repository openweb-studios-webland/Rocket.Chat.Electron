import { combineReducers } from 'redux';
import { reducer as windowVisible } from './windowVisible';
import { reducer as loading } from './loading';
import { reducer as preferences } from './preferences';
import { reducer as servers } from './servers';
import { reducer as view } from './view';
import { reducer as editFlags } from './editFlags';
import { reducer as historyFlags } from './historyFlags';
import { reducer as modal } from './modal';
import { reducer as update } from './update';
import { reducer as screensharing } from './screensharing';


export const reducer = combineReducers({
	windowVisible,
	loading,
	preferences,
	servers,
	view,
	editFlags,
	historyFlags,
	modal,
	update,
	screensharing,
});