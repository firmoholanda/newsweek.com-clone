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

  headerDate.style.display = "block";

  headerShevron.style.display = "inline";

  headerBars.style.color = '#f72210';
  headerBars.style.display = "none";

  headerLogo.style.width = "396px";
  headerLogo.style.height = "60px";
  headerLogo.style.left = "50%";
  //headerLogo.style.top = "13px";

  headerSignin.style.fontSize = "18px";
  headerSignin.style.top = "50%";
  headerSignin.style.right = "0";

  headerSubscribe.style.padding = "0px";
  
  headerBottom.style.top = "50%";
  headerBottom.style.display = "block";
}

function small() {
  //console.log(document.body.scrollWidth);

  if (document.body.scrollWidth <= 480) {
    headerSignin.style.fontSize = "12px";
    headerSubscribe.style.fontSize = "12px";
    headerShevron.style.display = "none";
  } 
  else {
    headerTop.style.paddingTop = "5px";
    headerTop.style.maxWidth = "100%";

    headerDate.style.display = "none";

    headerBars.style.color = '#fff';
    headerBars.style.display = "inline";

    headerLogo.style.width = "132px";
    headerLogo.style.height = "20px";
    headerLogo.style.left = "5rem";
    //headerLogo.style.Top = "5px";

    headerSignin.style.fontSize = "14px";
   // headerSignin.style.top = "3px";
    headerSignin.style.rigt = "0px";

    //headerSubscribe.style.paddingTop = "6px";
    //headerSubscribe.style.paddingBottom = "6px";
    headerSubscribe.style.paddingLeft = "10px";
    headerSubscribe.style.paddingRight = "10px";
    headerSubscribe.style.fontSize = "14px";

    headerBottom.style.display = "none";

    headerShevron.style.display = "inline";
    //headerShevron.style.paddingTop = "5px";
    headerShevron.style.fontSize = "18px";
  }
}