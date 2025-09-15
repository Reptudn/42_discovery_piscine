$(document).ready(function () {
  document.body.style.backgroundColor = `rgb(${Math.random() * 256}, ${
    Math.random() * 256
  }, ${Math.random() * 256})`;
  $("#changeBackground").click(function () {
    document.body.style.backgroundColor = `rgb(${Math.random() * 256}, ${
      Math.random() * 256
    }, ${Math.random() * 256})`;
  });
});
