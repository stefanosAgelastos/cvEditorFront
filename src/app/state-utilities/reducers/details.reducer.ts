import { DetailsActions } from '../actions/details.actions';
import { DetailsState } from '../store';
import { tassign } from 'tassign';

const INITIAL_STATE: DetailsState = {
  personalDetails: [
    {
      id: undefined,
      label: "demo",
      value: "demo"
    },
    {
      id: undefined,
      label: "demo",
      value: "demo"
    }
  ],
  contactDetails: [
    {
      id: undefined,
      label: "demo",
      value: "demo"
    },
    {
      id: undefined,
      label: "demo",
      value: "demo"
    }
  ]
}

export function detailsReducer(state: DetailsState = INITIAL_STATE, action: any) {

  switch (action.type) {

    /* GET */
    /* FOR PERSONAL DETAILS */
    case DetailsActions.GET_PERSONALS: // The component wants the data
      return state;
    case DetailsActions.GET_PERSONALS_SUCCESS: // The ws sent back the users.
      //action.payload: an array of users
      return tassign(state, { personalDetails: action.payload });
    // return state;
    case DetailsActions.GET_PERSONALS_FAILURE: // The ws failed or something else bad
      return state;

    /* FOR CONTACT DETAILS */
    case DetailsActions.GET_CONTACTS: // The component wants the data
      return state;
    case DetailsActions.GET_CONTACTS_SUCCESS: // The ws sent back the users.
      //action.payload: an array of users
      return tassign(state, { contactDetails: action.payload });
    // return state;
    case DetailsActions.GET_CONTACTS_FAILURE: // The ws failed or something else bad
      return state;

    /* ADD */
    // How to add an object to an array of objects without modifying the existing array?
    case DetailsActions.ADD_PERSONAL: // action.payload is baby: Baby
      return tassign(state, { personalDetails: [...state.personalDetails, action.payload] });
    case DetailsActions.ADD_CONTACT: // action.payload is baby: Baby
      return tassign(state, { contactDetails: [...state.contactDetails, action.payload] });

    /* UPDATE */
    case DetailsActions.UPDATE_PERSONAL: //payload is detail : Detail
      var allPersonals = [...state.personalDetails];
      var indexP = allPersonals.findIndex(detail => detail.id === action.payload.id);
      allPersonals[indexP] = action.payload;
      return tassign(state, { personalDetails: allPersonals });

    case DetailsActions.UPDATE_CONTACT: //payload is detail : Detail
      var allContacts = [...state.contactDetails];
      var indexC = allContacts.findIndex(detail => detail.id === action.payload.id);
      allPersonals[indexC] = action.payload;
      return tassign(state, { contactDetails: allContacts });

    /* DELETE */

    case DetailsActions.DELETE_PERSONAL: //payload is id : number
      var allPersonals = [...state.personalDetails];
      var indexP = allPersonals.findIndex(detail => detail.id === action.payload);
      allPersonals.splice(indexP,1);
      return tassign(state, {personalDetails : allPersonals});

    case DetailsActions.DELETE_CONTACT: //payload is id : number
      var allContacts = [...state.personalDetails];
      var indexC = allContacts.findIndex(detail => detail.id === action.payload);
      allContacts.splice(indexC,1);
      return tassign(state, {contactDetails : allContacts});

    default:
      return state;
  }
}
