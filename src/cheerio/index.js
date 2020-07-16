const cheerio = require('cheerio');

const paginahtml = `<html>
<head>
    <title>Lista de aprovados</title>
</head>
<ul id="nomes">
    <li class="primeiro">Pedro</li>
    <li class="segundo">Fernanda</li>
    <li class="terceiro">João</li>
</ul>
<body>
</body>
</html>
` 
const $ = cheerio.load(paginahtml);
//const dados = $('*').text();
//const dados = $('#nomes').text();
//const dados = $('ul').text();
//const dados = $('.primeiro').text()
//const dados = $('.primeiro','#nomes').text();
const dados = $('title').text();

console.log(dados)