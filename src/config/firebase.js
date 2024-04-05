import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBp6zlj_E-WDnjRqZyrD-bwGGv2hYYyJGQ",
    authDomain: "crested-climber-415011.firebaseapp.com",
    projectId: "crested-climber-415011",
    storageBucket: "crested-climber-415011.appspot.com",
    messagingSenderId: "858668911457",
    appId: "1:858668911457:web:8bc9773502b4a7575e1320",
    measurementId: "G-Y4ZE81N5VT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
