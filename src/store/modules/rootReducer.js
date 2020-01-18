import { combineReducers } from 'redux';
import signin from './signin/reducer';
import student from './student/reducer';
import plan from './plan/reducer';
import load from './loading/reducer';
import registration from './registration/reducer';

export default combineReducers({ signin, load, student, plan, registration });
