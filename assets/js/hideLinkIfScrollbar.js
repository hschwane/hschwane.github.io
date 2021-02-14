let showLinkFunc = function() {
  var elm = document.getElementsByClassName("hide-if-scrollbar");
  if(elm) {
    if ($("body").height() > $(window).height()) {
      for (i = 0; i < x.length; i++) {
        elm[i].style.visibility = "visible";
      } 
    } else {
      for (i = 0; i < x.length; i++) {
        elm[i].style.visibility = "hidden";
      } 
    }
  }
  console.log("blub");
};
$(document).ready(showLinkFunc);
$(document).resize(showLinkFunc);
