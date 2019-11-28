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
var headerBottom = document.getElementById("headerBottom");
var headerShevron = document.getElementById("headerShevron");

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
  headerTop.style.height = "95px";

  headerDate.style.display = "block";

  headerShevron.style.display = "inline";

  headerBars.style.color = '#f72210';
  headerBars.style.display = "none";

  headerLogo.style.width = "396px";
  headerLogo.style.height = "60px";
  headerLogo.style.left = "50%";

  headerSignin.style.fontSize = "18px";
  headerSignin.style.top = "50%";
  headerSignin.style.right = "0";

  headerSubscribe.style.padding = "0px";
  headerSignin.style.fontSize = "18px";
  
  headerBottom.style.top = "60%";
  headerBottom.style.display = "block";
}

function small() {
  if (document.body.scrollWidth <= 480) {
    headerSignin.style.fontSize = "12px";
    headerSubscribe.style.fontSize = "12px";
    headerShevron.style.display = "none";
  } 
  else {
    headerTop.style.padding = "10px";
    headerTop.style.height = "50px";
    headerTop.style.maxWidth = "100%";

    headerDate.style.display = "none";

    headerBars.style.color = '#fff';
    headerBars.style.display = "inline";

    headerLogo.style.width = "132px";
    headerLogo.style.height = "20px";
    headerLogo.style.top = "15px";
    headerLogo.style.left = "80px";
    
    headerSignin.style.fontSize = "16px";

    headerSubscribe.style.fontSize = "16px";

    headerBottom.style.display = "none";

    headerShevron.style.display = "inline";
    headerShevron.style.fontSize = "18px";
  }
}