import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import usersListReducer from "./store/usersList/reducer";
import userEditFormReducer from "./store/userEditForm/reducer";
import userAddFormReducer from "./store/userAddForm/reducer";


export const rootReducer = combineReducers({
    usersListReducer : usersListReducer,
    userEditFormReducer: userEditFormReducer,
    userAddFormReducer : userAddFormReducer
});



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
       <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
