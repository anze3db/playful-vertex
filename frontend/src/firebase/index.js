import firebase from '@firebase/app'
import '@firebase/firestore'

let firestore
function FirebaseException () {
  this.name = 'FirebaseException'
  this.message = 'config/firebase.env.js is missing or incorrectly configured'
}
// Initialize Firebase
if (process.env.NODE_ENV === 'test') {
  firestore = {} // Don't use firestore when testing
} else if (!process.env.projectId) {
  throw new FirebaseException()
} else {
  firebase.initializeApp(process.env)
  firestore = firebase.firestore()
}
export default firestore
