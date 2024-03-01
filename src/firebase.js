import firebase from 'firebase'
import 'firebase/messaging';
const config ={
  apiKey: "AIzaSyBAIbU3WgdgvmLV1U6GH-E6H2UTPYr7fTw",
  authDomain: "umrah-ride-bbcba.firebaseapp.com",
  projectId: "umrah-ride-bbcba",
  storageBucket: "umrah-ride-bbcba.appspot.com",
  messagingSenderId: "719159743497",
  appId: "1:719159743497:web:8344a578d1aa80823d94d8",
  measurementId: "G-7BN5NQXX31"
}
firebase.initializeApp(config)
const messaging = firebase.messaging();

const generateFCMToken = () => {
  return messaging.getToken({ vapidKey: "BKONrrJLFRqd3QpBgT165-ywda0-pJGmQcnzvxQsfvN7uEnnySVWpB64YDO7vi2g5PsVTTs84-YZQgofW5vDqrY" });
};

export { firebase, messaging, generateFCMToken };
export default firebase