/**
 * Created by x22a on 25.02.16.
 */
import { combineReducers } from 'redux';
import roland from './roland';
import dashboard from './dashboard'

export default Object.assign({}, roland, dashboard);
