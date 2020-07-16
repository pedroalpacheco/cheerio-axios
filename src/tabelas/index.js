const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://pedroalpacheco.github.io/htmlpurocurso/')
.then(resp=>{
    let dadoshtml = resp.data;
    const $ = cheerio.load(dadoshtml);

    //Raspando dados de tabela
    const colunas = [];
    $('[class="table"]>tbody>tr').each((i,e)=>{
        const todos = $(e).find('td');
        const pais = $(todos[0]).text();
        const previsao = $(todos[1]).text();
        const referencia = $(todos[2]).text();

        const coluna = {pais, previsao,referencia}
        colunas.push(coluna);
        
    })
    console.log(colunas);
    
    
    
})