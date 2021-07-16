import app from 'firebase/app'; 
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}//firebase 로그인/아웃, DB, 권한 접근, 메시지 추가 가능 코드

app.initializeApp(config);
const db = new app.firestore(); //db 접근 
const auth = new app.auth(); //로그인, 권한 관련 접근
export { db, auth };