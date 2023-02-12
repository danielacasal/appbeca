import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD12qETLgUP5jnZzBrTeJfSBu8I_qH7irM",
  authDomain: "beca-7ddbe.firebaseapp.com",
  projectId: "beca-7ddbe",
  storageBucket: "beca-7ddbe.appspot.com",
  messagingSenderId: "903090107514",
  appId: "1:903090107514:web:394d4eb89cd9caf25237c3"
};

const app = initializeApp(firebaseConfig);
export const initFirebase = () => app

/*
const db = getFirestore(app);

export async function gFetch(){
    const servicesCollectionRef = collection(db, "servicios");
    const snapshot = await getDocs(servicesCollectionRef);
    const docsData = snapshot.docs.map (doc => {
    return {... doc.data(), id: doc.id}
    });
    return docsData
}

export async function getSimpleItem(detailId) {
    const servicesCollectionRef = collection(db, "servicios");
    const serviceRef = doc (servicesCollectionRef, detailId);
    const snapshot = await getDoc(serviceRef);
    return{...snapshot.data(), id: snapshot.id}
}

export async function getItemsByCategory(categoryId) {
    const servicesCollectionRef = collection(db, "servicios");
    const q = query(servicesCollectionRef, where("categoria", "==", categoryId))
    const snapshot = await getDoc(q);
    return{...snapshot.data(), id: snapshot.id}
}
*/