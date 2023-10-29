const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ob9wqj8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mensaje enviado correctamente');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});