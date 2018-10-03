$(function() {
	$('.mainSlide').slick({
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    fade: true,
  });

  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

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
var member = document.getElementById('member');
var loginbutton = document.getElementById('loginbutton');
var logout = document.getElementById('logout');

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
  loginbutton.classList.add('hide');
}


function logoutDisplay() {
  logout.classList.add('hide');
	member.classList.add('hide');
  loginbutton.classList.remove('hide');
}
