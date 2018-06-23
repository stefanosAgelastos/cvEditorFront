import { Detail } from "./data-model/data-model.ts";

/*
 * action types
 */
​
export const ADD_PERSONAL = 'ADD_PERSONAL'
export const UPDATE_PERSONAL = 'UPDATE_PERSONAL'
export const DELETE_PERSONAL = 'DELETE_PERSONAL'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

/*
 * action creators
 */
​
export function addPersona(value) {
  return { type: ADD_PERSONAL, value }
}
​
​
export function updatePersonal(value) {
  return { type: UPDATE_PERSONAL, value }
}
​
​
export function deletePersona(index) {
  return { type: DELETE_PERSONAL, index }
}
export function toggleIsFetching(flag) {
  return { type: TOGGLE_IS_FETCHING, flag }
}
​