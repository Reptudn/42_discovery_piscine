$(document).ready(function () {
  $('body').css('background-color', `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);
  $("#changeBackground").click(function () {
    $('body').css('background-color', `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);
  });
});
