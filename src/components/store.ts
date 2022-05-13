import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORE_NAME } from "./consts";
import { IMainPageState } from "./types";

const INIT_STATE: IMainPageState = {
  menuItemId: 1,
};

const mainPageStore = createSlice({
  name: STORE_NAME,
  initialState: INIT_STATE,
  reducers: {
    setMenuItemId: (
      state,
      { payload: id }: PayloadAction<number>
    ) => {
      state.menuItemId = id;
    },
  },
});

/* export const GET_START_VALUES = `${STORE_NAME}/get-start-values`;
export const GET_CARDS_DATA = `${STORE_NAME}/get-cards-data`;
export const GET_TRADING_ACCOUNTS = `${STORE_NAME}/get-trading-accounts`;
export const TRANSACTION_SUBMIT_FORM = `${STORE_NAME}/transaction-submit-form`;
export const GET_CURRENCIES_FOR_OTHER_DEPOSIT = `${STORE_NAME}/get-currencies-for-other-deposit`;
export const CREATE_LINK_FOR_OTHER_DEPOSIT = `${STORE_NAME}/create-link-for-other-deposit`;
export const GET_ACCOUNTS_FOR_TRANSFER = `${STORE_NAME}/get-accounts-for-transfer`;
export const GET_PAYMENT_METHODS = `${STORE_NAME}/get-payment-methods`; */

export const mainPageActions = {
  ...mainPageStore.actions,
/*   getStartValues: createAction<number>(GET_START_VALUES),
  getCardsData: createAction(GET_CARDS_DATA),
  getTradingAccounts: createAction(GET_TRADING_ACCOUNTS),
  submitFormTransaction: createAction(TRANSACTION_SUBMIT_FORM),
  getCurrenciesForOtherDeposit: createAction(GET_CURRENCIES_FOR_OTHER_DEPOSIT),
  createLinkForOtherDeposit: createAction(CREATE_LINK_FOR_OTHER_DEPOSIT),
  getAccountsForTransfer: createAction(GET_ACCOUNTS_FOR_TRANSFER),
  getPaymentMethods: createAction(GET_PAYMENT_METHODS), */
};

export const mainPageReducer = mainPageStore.reducer;