window.onload = function() {
  document.querySelector('input[submit]').addEventListener('click', function(event) {
    event.preventDefault()

    console.log('send message clicked')
  })
}