let showLinkFunc = function() {
  var elm = document.getElementsByClassName("hide-if-scrollbar");
  if(elm) {
    if ($("body").height() > $(window).height()) {
      elm.style.visibility = "visible";
    } else {
      elm.style.visibility = "hidden";
    }
  }
  console.log("blub");
};
$(document).ready(showLinkFunc);
$(document).resize(showLinkFunc);
