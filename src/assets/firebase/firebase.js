import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import firbaseConfig from './firebaseConfig'

firebase.initializeApp(firbaseConfig)

export const db = firebase.database()
