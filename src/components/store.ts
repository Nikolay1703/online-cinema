import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORE_NAME } from "./consts";
import { IMainPageState, ITestData } from "./types";

const INIT_STATE: IMainPageState = {
  values: [],
};

const mainPageStore = createSlice({
  name: STORE_NAME,
  initialState: INIT_STATE,
  reducers: {
    setValue: (
      state,
      { payload: values }: PayloadAction<ITestData[]>
    ) => {
      state.values = values;
    },
  },
});

export const GET_VALUES = `${STORE_NAME}/get-values`;
/*export const GET_CARDS_DATA = `${STORE_NAME}/get-cards-data`;
export const GET_TRADING_ACCOUNTS = `${STORE_NAME}/get-trading-accounts`;
export const TRANSACTION_SUBMIT_FORM = `${STORE_NAME}/transaction-submit-form`;
export const GET_CURRENCIES_FOR_OTHER_DEPOSIT = `${STORE_NAME}/get-currencies-for-other-deposit`;
export const CREATE_LINK_FOR_OTHER_DEPOSIT = `${STORE_NAME}/create-link-for-other-deposit`;
export const GET_ACCOUNTS_FOR_TRANSFER = `${STORE_NAME}/get-accounts-for-transfer`;
export const GET_PAYMENT_METHODS = `${STORE_NAME}/get-payment-methods`; */

export const mainPageActions = {
  ...mainPageStore.actions,
  getValues: createAction(GET_VALUES),
  /*getCardsData: createAction(GET_CARDS_DATA),
  getTradingAccounts: createAction(GET_TRADING_ACCOUNTS),
  submitFormTransaction: createAction(TRANSACTION_SUBMIT_FORM),
  getCurrenciesForOtherDeposit: createAction(GET_CURRENCIES_FOR_OTHER_DEPOSIT),
  createLinkForOtherDeposit: createAction(CREATE_LINK_FOR_OTHER_DEPOSIT),
  getAccountsForTransfer: createAction(GET_ACCOUNTS_FOR_TRANSFER),
  getPaymentMethods: createAction(GET_PAYMENT_METHODS), */
};

export const mainPageReducer = mainPageStore.reducer;