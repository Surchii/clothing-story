import { createSelector } from "reselect";

const selecetUser = state => state.user;

export const selectCurrentUser = createSelector(
   [selecetUser],
   user => user.currentUser
)