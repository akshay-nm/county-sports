window.onload = function() {
  document.getElementById('new-message-button').addEventListener('click', function(event) {
    event.preventDefault()

    console.log('send message clicked')
  })
}