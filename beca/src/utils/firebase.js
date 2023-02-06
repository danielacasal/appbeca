import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD12qETLgUP5jnZzBrTeJfSBu8I_qH7irM",
  authDomain: "beca-7ddbe.firebaseapp.com",
  projectId: "beca-7ddbe",
  storageBucket: "beca-7ddbe.appspot.com",
  messagingSenderId: "903090107514",
  appId: "1:903090107514:web:394d4eb89cd9caf25237c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function getItems(){
    const servicesCollectionRef = collection(db, "servicios");
    getDocs(servicesCollectionRef).then(snapshot => {
        console.log(snapshot);
    })

};
