window.onscroll = function () {
  if (window.innerWidth > 991) {
    myFunction();
  }
};

window.onresize = function () {
  toggle();
};

var headerTop = document.getElementById('headerTop');
var sticky = headerTop.offsetTop;
var headerDate = document.getElementById('headerDate');
var headerShevron = document.getElementById('headerShevron');
var headerBars = document.getElementById('headerBars');
var headerLogo = document.getElementById('headerLogo');
var headerSignin = document.getElementById('headerSignin');
var headerSubscribe = document.getElementById('headerSubscribe');

function myFunction() {
  if (window.pageYOffset > sticky + 120) {
    small();
  } else {
    big();
  }
}

function toggle() {
  if (window.innerWidth < 991) {
    small();
  } else {
    big();
  }
}

function big() {
  headerTop.style.paddingTop = "50px";
  headerTop.style.paddingBottom = "10px";
  headerTop.style.maxWidth = "1310px";
  headerDate.style.display = 'block';
  headerShevron.style.display = 'inline';
  headerBars.style.color = '#f72210';
  headerLogo.style.width = "396px";
  headerLogo.style.height = "60px";
  headerLogo.style.left = "50%";
  headerLogo.style.top = "15px";
  headerSignin.style.fontSize = "18px";
  headerSignin.style.top = "0px";
  headerSignin.style.right = "0";
}

function small() {
  headerTop.style.paddingTop = "5px";
  headerTop.style.maxWidth = "100%";
  headerDate.style.display = 'none';
  headerBars.style.color = '#fff';
  headerLogo.style.width = "132px";
  headerLogo.style.height = "20px";
  headerLogo.style.left = "80px";
  headerLogo.style.top = "18px";
  headerSignin.style.fontSize = "18px";
  headerSignin.style.top = "3px";
  headerSignin.style.right = "50px";
}