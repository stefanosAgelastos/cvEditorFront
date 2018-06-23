import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { detailsReducer } from './reducers/details.reducer';
import { Detail } from '../data-model/data-model';


export class DetailsState {
 personalDetails: Detail[];
 contactDetails: Detail[];
}

export class IAppState {
 users?: DetailsState;
}

export const rootReducer = combineReducers<IAppState>({
 users: detailsReducer,
 router: routerReducer 
});
