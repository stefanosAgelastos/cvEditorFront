import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Detail } from '../../data-model/data-model';

@Injectable()
export class DetailsActions {

    constructor(private ngRedux: NgRedux<IAppState>) { }

    static ADD_PERSONAL: string = 'ADD_PERSONAL';
    static UPDATE_PERSONAL: string = 'UPDATE_PERSONAL';
    static DELETE_PERSONAL: string = 'DELETE_PERSONAL';

    static ADD_CONTACT: string = 'ADD_CONTACT';
    static UPDATE_CONTACT: string = 'UPDATE_CONTACT';
    static DELETE_CONTACT: string = 'DELETE_CONTACT';

    static GET_PERSONALS: string = 'GET_PERSONALS';
    static GET_CONTACTS: string = 'GET_CONTACTS';

    static GET_PERSONALS_SUCCESS: string = 'GET_PERSONALS_SUCCESS';
    static GET_PERSONALS_FAILURE: string = 'GET_PERSONALS_FAILURE';

    static GET_CONTACTS_SUCCESS: string = 'GET_CONTACTS_SUCCESS';
    static GET_CONTACTS_FAILURE: string = 'GET_CONTACTS_FAILURE';


    addPersonal(detail : Detail) {
        this.ngRedux.dispatch({
            type: DetailsActions.ADD_PERSONAL,
            payload: detail
        });
    }
    updatePersonal(detail : Detail) {
        this.ngRedux.dispatch({
            type: DetailsActions.UPDATE_PERSONAL,
            payload: detail
        });
    }
    deletePersonal(id : number) {
        this.ngRedux.dispatch({
            type: DetailsActions.DELETE_PERSONAL,
            payload: id
        });
    }
    
    addContact(detail : Detail) {
        this.ngRedux.dispatch({
            type: DetailsActions.ADD_CONTACT,
            payload: detail
        });
    }
    updateContact(detail : Detail) {
        this.ngRedux.dispatch({
            type: DetailsActions.UPDATE_CONTACT,
            payload: detail
        });
    }
    deleteContact(id : number) {
        this.ngRedux.dispatch({
            type: DetailsActions.DELETE_CONTACT,
            payload: id
        });
    }

    
    getPersonals() {
        this.ngRedux.dispatch({
            type: DetailsActions.GET_PERSONALS
        });
    }
    
    getContacts() {
        this.ngRedux.dispatch({
            type: DetailsActions.GET_CONTACTS
        });
    }
}
