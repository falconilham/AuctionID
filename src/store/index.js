import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from '../reducer/'
//import { createStore } from 'redux'
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

export function configureAppStore(preloadedState) {
	// const persistConfig = {	
	//   key: 'root',
	//   storage,
	// }

//	const persistedReducer = persistReducer(persistConfig, rootReducer)

	const store = configureStore({
		reducer: rootReducer,
		middleware: [...getDefaultMiddleware()],
		preloadedState,
	})

	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./../reducer', () => store.replaceReducer(rootReducer))
	}

	return store
}

// export function configurePersistStore(store){



// 	return persistStore(store)


// }

const store = configureAppStore()
//const persistor = configurePersistStore(store)
export {store, /*persistor*/} 