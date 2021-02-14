let showLinkFunc = function() {
  if ($("body").height() > $(window).height()) {
    document.getElementsByClassName("hide-if-scrollbar").style.visibility = "visible";
  } else {
    document.getElementsByClassName("hide-if-scrollbar").style.visibility = "hidden";
  }
  console.log("blub");
};
$(document).ready(showLinkFunc);
$(document).resize(showLinkFunc);
