// main.js - menu + forms + demo inbox

// menu toggle (drawer)
const menuBtn = document.querySelectorAll('.menu-btn');
const drawer = document.getElementById('menuDrawer');
menuBtn.forEach(b=>b&&b.addEventListener('click', ()=> {
  drawer.classList.toggle('open');
}));

// close drawer when clicking link
document.addEventListener('click', (e)=>{
  if(e.target.matches('.menu-close')) drawer.classList.remove('open');
});

// smooth scroll helper
function smoothTo(id){
  const el = document.querySelector(id);
  if(el) el.scrollIntoView({behavior:'smooth', block: 'start'});
  drawer.classList.remove('open');
}

// handle contact form - sends to Web3Forms (or fallback mailto)
async function sendContactForm(form){
  // If you have a Web3Forms access_key, add it to the hidden input "access_key"
  const data = new FormData(form);
  const accessKey = data.get('access_key') || '';
  // If no accessKey, fallback to mailto prefill
  if(!accessKey){
    const name = data.get('nome');
    const email = data.get('email');
    const serv = data.get('servico') || 'Contato';
    const body = `Nome: ${name}\nEmail: ${email}\nServiço: ${serv}\n\n` + (data.get('mensagem') || '');
    window.location.href = `mailto:alexandremalungo17@gmail.com?subject=${encodeURIComponent('Pedido - ' + serv)}&body=${encodeURIComponent(body)}`;
    return;
  }

  // send to Web3Forms
  try{
    const res = await fetch('https://api.web3forms.com/submit', {method:'POST', body: data});
    const json = await res.json();
    if(json.success){
      alert('Mensagem enviada — obrigado. Iremos responder em até 24h úteis.');
      form.reset();
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  } catch(err){
    console.error(err);
    alert('Erro de rede. Tente novamente mais tarde.');
  }
}

// demo inbox: store messages locally for preview (admin)
function inboxSaveDemo(message){
  const key = 'leano_inbox_demo';
  const arr = JSON.parse(localStorage.getItem(key) || '[]');
  arr.unshift(Object.assign({id:Date.now()}, message));
  localStorage.setItem(key, JSON.stringify(arr));
}
function inboxLoadDemo(){
  const key = 'leano_inbox_demo';
  return JSON.parse(localStorage.getItem(key) || '[]');
}
