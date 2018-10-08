//firebaseの初期化
var config = {
  apiKey: "AIzaSyBznuHQZgE-Y9twkbOTLFWa2azJouNmf9s",
  authDomain: "spaceshuttle-hp.firebaseapp.com",
  databaseURL: "https://spaceshuttle-hp.firebaseio.com",
  projectId: "spaceshuttle-hp",
  storageBucket: "spaceshuttle-hp.appspot.com",
  messagingSenderId: "772619856753"
};
firebase.initializeApp(config);

//DOM取得
var inputarea = document.getElementById('input-area');
//var newuser = document.getElementById('newuser');
var login = document.getElementById('login');
var loginbutton = document.getElementById('loginbutton');
var logout = document.getElementById('logout');
var info = document.getElementById('info');
var member = document.getElementById('member');
var logincontent = document.getElementById('logincontent');
var buttonarea = document.getElementById('button-area');



//新規登録処理
/*
newuser.addEventListener('click', function(e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    alert('登録できません（' + error.message + '）');
  });
});
*/


//ログイン処理
login.addEventListener('click', function(e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    alert('ログインできません（' + error.message + '）');
  });
});



//ログアウト処理
logout.addEventListener('click', function() {
  firebase.auth().signOut();
});



//認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    loginDisplay();
  }
  else {
    logoutDisplay();
  }
});



function loginDisplay() {
  logout.classList.remove('hide');
  member.classList.remove('hide');
  buttonarea.classList.remove('hide');
  inputarea.classList.add('hide');
  loginbutton.classList.add('hide');
  logincontent.classList.add('hide');

  info.textContent = "ログインしました";
}


function logoutDisplay() {
  logout.classList.add('hide');
  member.classList.add('hide');
  buttonarea.classList.add('hide');
  inputarea.classList.remove('hide');
  loginbutton.classList.remove('hide');
  logincontent.classList.remove('hide');

  info.textContent = "";
}
