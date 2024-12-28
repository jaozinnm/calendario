function mostrar() {
  let dias = document.getElementById("msg");
  let fotoDiv = document.getElementById('foto');
  let imagem = document.createElement('img');
  let data = new Date();
  let semana = data.getDay();

  switch (semana) {
    case 0:
      dias.innerHTML = "Hoje e Domingo";
      document.body.style.backgroundColor ='#FFA07A'
      imagem.setAttribute('src', 'domingo.jpg')
      break;

    case 1:
      dias.innerHTML = "Hoje e Segunda";
      document.body.style.backgroundColor ='#ADD8E6'
      imagem.setAttribute('src', 'segunda.jpg')
      break;

    case 2:
      dias.innerHTML = "Hoje e Terça";
      document.body.style.backgroundColor ='#90EE90'
      imagem.setAttribute('src', 'terça.jpg')
      break;

    case 3:
      dias.innerHTML = "Hoje e Quarta";
      document.body.style.backgroundColor ='#FFFFE0'
      imagem.setAttribute('src', 'quarta.jpg')
      break;

    case 4:
      dias.innerHTML = "Hoje e Quinta";
      document.body.style.backgroundColor ='#FFD700'
      imagem.setAttribute('src', 'quinta.jpg')
      break;

    case 5:
      dias.innerHTML = "Hoje e Sexta";
      document.body.style.backgroundColor ='#FFC0CB'
      imagem.setAttribute('src', 'sexta.jpg')
      break;

    case 6:
      dias.innerHTML = "Hoje e Sabado";
      document.body.style.backgroundColor ='#DDA0DD'
      imagem.setAttribute('src', 'sabado.jpg')
      break;

    default:
      dias.innerHTML = "[ERRO] Dia invalido";
      document.body.style.backgroundColor =' rgb(12, 2, 49)'
      break;
  }
  fotoDiv.innerHTML = ''; 
  fotoDiv.appendChild(imagem);
 
}
