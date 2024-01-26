document.addEventListener('DOMContentLoaded', function () {
    const imagemContainer = document.getElementById('imagemContainer');
    const circuloAzul = document.getElementById('circuloAzul');
  
    imagemContainer.addEventListener('mousemove', function (event) {
      const mouseX = event.clientX - imagemContainer.getBoundingClientRect().left;
      const mouseY = event.clientY - imagemContainer.getBoundingClientRect().top;
  
      circuloAzul.style.left = mouseX - circuloAzul.clientWidth / 2 + 'px';
      circuloAzul.style.top = mouseY - circuloAzul.clientHeight / 2 + 'px';
    });
  
    imagemContainer.addEventListener('mouseenter', function () {
      circuloAzul.style.display = 'block';
    });
  
    imagemContainer.addEventListener('mouseleave', function () {
      circuloAzul.style.display = 'none';
    });
  
    imagemContainer.addEventListener('click', function (event) {
      const mouseX = event.clientX - imagemContainer.getBoundingClientRect().left;
      const mouseY = event.clientY - imagemContainer.getBoundingClientRect().top;
  
      const pontoPreto = document.createElement('div');
      pontoPreto.className = 'pontoPreto';
      pontoPreto.style.left = mouseX - 1 + 'px';
      pontoPreto.style.top = mouseY - 1 + 'px';
      imagemContainer.appendChild(pontoPreto);
  
      switch (getClickedArea(mouseX, mouseY)) {
        case 'maoArea':
          window.location.href = '/traumatologia/mao/';
          break;
        case 'punhoArea':
          window.location.href = '/traumatologia/punho/';
          break;
        case 'antebracoArea':
          window.location.href = '/traumatologia/antebraco/';
          break;
        case 'cotoveloArea':
          window.location.href = '/traumatologia/cotovelo/';
          break;
        case 'bracoArea':
          window.location.href = '/traumatologia/braco/';
          break;
        case 'ombroArea':
          window.location.href = '/traumatologia/ombro/';
          break;
        case 'colunaCervicalArea':
          window.location.href = '/traumatologia/cervical/';
          break;
        case 'colunaDorsalArea':
          window.location.href = '/traumatologia/toracica/';
          break;
        case 'colunaLombarArea':
          window.location.href = '/traumatologia/lombar/';
          break;
        case 'baciaArea':
          window.location.href = '/traumatologia/bacia/';
          break;
        case 'quadrilArea':
          window.location.href = '/traumatologia/quadril/';
          break;
        case 'coxaArea':
          window.location.href = '/traumatologia/coxa/';
          break;
        case 'joelhoArea':
          window.location.href = '/traumatologia/joelho/';
          break;
        case 'pernaArea':
          window.location.href = '/traumatologia/perna/';
          break;
        case 'tornozeloArea':
          window.location.href = '/traumatologia/tornozelo/';
          break;
        case 'peArea':
          window.location.href = '/traumatologia/pe/';
          break;
        // Adicione mais cases conforme necessário
      }
    });
  
    function getClickedArea(x, y) {
      const hoverAreas = document.querySelectorAll('.hover-area');
      for (const area of hoverAreas) {
        const x1 = parseInt(area.getAttribute('data-x1'));
        const y1 = parseInt(area.getAttribute('data-y1'));
        const x2 = parseInt(area.getAttribute('data-x2'));
        const y2 = parseInt(area.getAttribute('data-y2'));
  
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
          return area.id;
        }
      }
      return null;
    }
  });
  