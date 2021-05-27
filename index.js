import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({ count, user });

const store = createStore(reducers);

console.log(store);
const counter = document.querySelector('#counter');
count.textContent = store.getState().count;

const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

const incrementAction = {
    type: 'INCREMENT',
    payload: { amount: 10, accountNumber: 'ABC123' }
};

const decrementAction = {
    type: 'DECREMENT',
    payload: { amount: -10, accountNumber: 'ABC123' }
};

incrementButton.addEventListener('click', () => {
    store.dispatch(incrementAction);
});

decrementButton.addEventListener('click', () => {
    store.dispatch(decrementAction);
});

store.subscribe(() => {
    counter.textContent = store.getState().count;
    console.log(store.getState());
});

function count(state = 0, action) {
switch (action.type) {
    case 'INCREMENT':
        return state + action.payload.amount;
    case 'DECREMENT':
        return state + action.payload.amount;
    default:
        return state;
    }
}

function user(state = {}, action) {
switch (action.type) {
    case 'INCREMENT':
        return { accountNumber: action.payload.accountNumber };
    default:
        return state;
    }
}