import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["home"],
    blacklist: ["form"],
};

const persistedReducer = persistReducer(persistConfig, Reducer)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
