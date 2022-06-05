import { all, call, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "./../user/user.types";

import { clearCart } from "./cart.action";

export function* ClearCartSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCES, ClearCartSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucces)]);
}
