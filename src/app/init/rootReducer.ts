// Core
import { combineReducers } from '@reduxjs/toolkit';

import { profileReducer } from '../reducers/reducer';

// Reducers
export const rootReducer = combineReducers({
    profileReducer,
});
