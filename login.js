const firebaseConfig = {
    apiKey: "AIzaSyCEwWFvkQ5JxXLkTq2k5HixoIr3Yb4T_s0",
    authDomain: "fir-146a0.firebaseapp.com",
    projectId: "fir-146a0",
    storageBucket: "fir-146a0.firebasestorage.app",
    messagingSenderId: "635457977876",
    appId: "1:635457977876:web:8ef9bfde4c7d45befdf101",
    measurementId:" G-2H59LVK487"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore(); // Optional if you want to use Firestore