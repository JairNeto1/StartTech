const fields = document.querySelectorAll('[required]')

//console.log(fields)

for (field of fields) 'invalid', evvent => {}

document.querySelector('form').addEventListener('submit', event => {
  console.log('enviar formulario')
  envent.preventDefault()
})
