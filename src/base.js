import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBMAOGqshqRsV6G0dn4iO2qWE_m6-kxDzY",
    authDomain: "react-todo-46f9f.firebaseapp.com",
    databaseURL: "https://react-todo-46f9f.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

/* for my demo, be sure to put yours in place
apiKey: "AIzaSyA60-RA1ZHZRXrmmAH-gsp1h7OpRFYWugY",
authDomain: "d18-demo.firebaseapp.com",
databaseURL: "https://d18-demo.firebaseio.com"
*/

export default base;
