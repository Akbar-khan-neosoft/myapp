import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import FirebaseConfig from '../../Config/FirebaseConfig'

// const middleware = [thunk];

export default createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(FirebaseConfig),
        reactReduxFirebase(FirebaseConfig)

    )
);