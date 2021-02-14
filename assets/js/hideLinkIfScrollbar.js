let showLinkFunc = function() {
  if ($("body").height() > $(window).height()) {
    document.getElementsById("hide-if-scrollbar").style.visibility = "visible";
  } else {
    document.getElementsById("hide-if-scrollbar").style.visibility = "hidden";
  }
  console.log("blub");
};
$(document).ready(showLinkFunc);
$(document).resize(showLinkFunc);
