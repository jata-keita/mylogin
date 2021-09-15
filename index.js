var firebaseConfig = {
    apiKey: "AIzaSyBnWxJYaQS1DNRjYLwihWvFUAffIbULe0Q",
    authDomain: "gominz-1c9f0.firebaseapp.com",
    projectId: "gominz-1c9f0",
    storageBucket: "gominz-1c9f0.appspot.com",
    messagingSenderId: "314118770316",
    appId: "1:314118770316:web:4dae8147bb6fd81e4235a9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let form = firebase.database().ref('jata')


// even lisinner 
document.querySelector("#form").addEventListener('submit', e=>{
   // alert("we got you")
    e.preventDefault();
    let name = document.querySelector("#fname").value;
    let email = document.querySelector("#eemail").value;
    let password = document.querySelector("#lpassword").value;
    console.log(name);

    savemessage(name, email, password);

});

function savemessage(name, email, password){
    let newform = form.push();
    newform.set({
        name:name,
        email:email,
        password:password,
    });
} 