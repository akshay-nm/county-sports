window.onload = function() {
  document.getElementById('new-message-button').addEventListener('click', function(event) {
    event.preventDefault()

    var form = document.getElementById('new-message-form')

    var nameInput = document.getElementById('new-message-name')
    var emailInput = document.getElementById('new-message-email')
    var messageInput = document.getElementById('new-message-message')

    var FD = new FormData(form)

    if(nameInput.validity.typeMismatch || emailInput.validity.typeMismatch || messageInput.validity.typeMismatch) {

      alert("Please fill the complete form correctly")

    } else if(FD.get('name').length == 0 || FD.get('email').length == 0 || FD.get('message').length == 0) {
      alert("Please fill the complete form")

    } else {

      var XHR = new XMLHttpRequest()

      // Define what happens on successful data submission
      XHR.addEventListener("load", function(event) {
        if(XHR.status == 200) {
          alert("Thank you for reaching out, we'll get back to you shortly.")
        } else if (XHR.status == 400) {
          alert("Please fill the form correctly.")
        } else {

          alert("We are having some technical difficulties, please try contacting us telephonically.")
        }
      });

      // Define what happens in case of error
      XHR.addEventListener("error", function(event) {
        alert("We are having some technical difficulties, please try contacting us telephonically.")
      });

      // Set up our request
      XHR.open("POST", "https://countysports.in/message")

      // XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      // The data sent is what the user provided in the form
      XHR.send(FD)
    }

  })
}