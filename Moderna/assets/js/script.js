const urlCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT-ICaRPKOjwewPWesvRU5UrOcyEMBHJzhHeE1yYnLVu7RSb9LqN97XkCLNj8_YMIYKMRRRZZ7k7mcm/pub?gid=170797728&single=true&output=csv';

fetch(urlCSV)
  .then(response => {
    if (!response.ok) throw new Error('Erro ao buscar o CSV');
    return response.text();
  })
  .then(data => {
    // Separar linhas
    const linhas = data.trim().split('\n');
    // Pega a primeira linha que tem os títulos das colunas
    const cabecalho = linhas.shift().split(',');

    const listaRecados = document.getElementById('lista-recados');

    linhas.forEach(linha => {
      const colunas = linha.split(',');

      // Por exemplo, se a coluna "Recado" for a 2ª, índice 1, adapta aqui:
      const recado = colunas[1];

      const li = document.createElement('li');
      li.textContent = recado;
      listaRecados.appendChild(li);
    });
  })
  .catch(err => {
    console.error(err);
    alert('Erro ao carregar os recados');
  });
