/* script.js - menu toggle e formulário simulado */
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menuToggle');
  const mobile = document.getElementById('mobileMenu');
  if(toggle && mobile){
    toggle.addEventListener('click', function(){
      mobile.classList.toggle('open');
      const hidden = mobile.getAttribute('aria-hidden') === 'true';
      mobile.setAttribute('aria-hidden', String(!hidden));
    });
  }
  // simple form simulation (if forms exist later)
  window.simulateSubmit = function(el){
    // el: form element or event
    alert('Pedido simulado: obrigado! Vamos responder em até 24h úteis.');
    return false;
  };
});
