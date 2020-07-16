const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://pedroalpacheco.github.io/htmlpurocurso/')
.then(resp=>{
    let dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);
    //const tudo = $('*').html()
    //const titulo = $('title').text();
    //const link = $('link').attr('href');
    //const otitulo = $('h1').text();
    //const verificaclasse = $('a').hasClass('text-muted');
    //const destaque = $('[class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"]').text()
    //const meses = $('[class="list-unstyled mb-0"]').text()
    console.log(meses);
})