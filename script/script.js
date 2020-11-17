// for allowing animations after load since they’re initially prevented from firing
document.addEventListener("DOMContentLoaded", function () {
  this.forms[0].switch.addEventListener("change", function () {
    this.removeAttribute("class");
  });
});
