

//Swaps the pages out when the user taps on a choice
function openPage(pageName, ignoreHistoryPush) {
  window.scrollTo(0,1);

}

window.onpopstate = function(e) {
  if (e.state != null) {
    console.log(e.state);
    openPage(e.state.page);
  }
  else {
    openPage('root', true);
  }
}


//Shows a modal dialog when fetcing data from Facebook
function setAction(msg, hideBackground) {
  
  window.scrollTo(0, 1);
}



//Automatically scroll away the address bar
addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);

function hideURLbar() {
  window.scrollTo(0,1);
}

function hideButton(button) {
  button.style.display = 'none';
}
