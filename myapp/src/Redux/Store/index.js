import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app'
import reducers from '../Reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

// const middleware = [thunk];

export default createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),

    )
);