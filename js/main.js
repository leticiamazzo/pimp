let resp1
let resp2
let resp3

let respClicada1
let respClicada2
let respClicada3

let concatResps

function clicaImovel(valor) {
  resp1 = valor
  resp2 = valor
  resp3 = valor

  if (resp1 === "a") {
    respClicada1 = resp1
  } else {
    respClicada1 = resp1
  }
  console.log(respClicada1)
}

function clicaImovel2(valor) {
  resp2 = valor

  if (resp2 === "a") {
    respClicada2 = resp2
  } else {
    respClicada2 = resp2
  }
  console.log(respClicada2)
}

function clicaImovel3(valor) {
  resp3 = valor

  if (resp3 === "a") {
    respClicada3 = resp3
  } else {
    respClicada3 = resp3
  }
  console.log(respClicada3)
}

function armazenaResultado() {
  concatResps = respClicada1 + respClicada2 + respClicada3
  console.log(concatResps)

  if(concatResps === "aaa") {
    document.getElementById("resultado").innerHTML =
    `<p>- Colete água da chuva utilizando grandes recipientes. Utilize para regar o jardim, lavar o quintal ou usar na descarga</p>
    <p>- Reutilize materiais e consuma menos. Reaproveite!</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra3.gif" alt="gif com o planeta terra dançando e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "aab") {
    document.getElementById("resultado").innerHTML =
    `<p>-Invista em sistemas de captação de água pluvial. Utilize para regar o jardim, lavar o quintal ou usar na descarga</p>
    <p>- Para áreas externas opte por pisos permeáveis</p>
    <p>- Reutilize materiais e consuma menos. Reaproveite!</p>
    <p>- Opte por um vaso sanitário com caixa acoplada e acionamento duplo, pois resíduos líquidos não precisam de uma descarga completa</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra3.gif" alt="gif com o planeta terra dançando e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "aba") {
    document.getElementById("resultado").innerHTML =
    `<p>- Para iluminação artificial existem lâmpadas de baixo consumo, como as fluorescentes ou de LED</p>
    <p>- Ambientes integrados (sem divisão por paredes) e com janelas, permitem maior circulação de ar e proporcionam melhor iluminação natural, minimizando o uso de sistema de ar-condicionado e iluminação artificial.</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra3.gif" alt="gif com o planeta terra dançando e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "abb"){
    document.getElementById("resultado").innerHTML =
    `<p>- Ambientes integrados (sem divisão por paredes) e com janelas, permitem maior circulação de ar e proporcionam melhor iluminação natural, minimizando o uso de sistema de ar-condicionado e iluminação artificial.</p>
    <p>- Os panos de vidro (como janelas, porém sem abertura) também funcionam para trazer mais luz natural ao ambiente. Para espaços centrais, onde não é possível realizar aberturas nas paredes, clarabóias (aberturas no alto da construção “cobertas” com material translúcido que permite entrada de luz ou até ventilação) podem ser uma boa opção</p>
    <p>- Invista em captação de energia solar. A princípio o investimento é alto, mas torna-se vantajoso a longo prazo</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra3.gif" alt="gif com o planeta terra dançando e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "bbb") {
    document.getElementById("resultado").innerHTML =
    `<p>- Ambientes integrados (sem divisão por paredes) e com janelas, permitem maior circulação de ar e proporcionam melhor iluminação natural, minimizando o uso de sistema de ar-condicionado e iluminação artificial</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra4.gif" alt="gif com uma plantinha brotando do planeta terra, que está sorrindo e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "bba") {
    document.getElementById("resultado").innerHTML =
    `<p>- Ambientes integrados (sem divisão por paredes) e com janelas, permitem maior circulação de ar e proporcionam melhor iluminação natural, minimizando o uso de sistema de ar-condicionado e iluminação artificial</p>
    <p>- Para a iluminação artificial, existem as lâmpadas de baixo consumo de energia elétrica, como as fluorescentes</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra4.gif" alt="gif com uma plantinha brotando do planeta terra, que está sorrindo e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "bab"){
    document.getElementById("resultado").innerHTML =
    `<p>- Utilize a água da máquina de lavar, por exemplo, na descarga</p>
    <p>- Reutilize materiais e consuma menos. Reaproveite!</p>
    <p>- Opte por um vaso com caixa acoplada e acionamento duplo, pois resíduos líquidos não precisam de uma descarga completa</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra4.gif" alt="gif com uma plantinha brotando do planeta terra, que está sorrindo e feliz">`
    resultado.style.display = "block"
  } else if (concatResps === "baa"){
    document.getElementById("resultado").innerHTML =
    `<p>- Utilize a água da máquina de lavar, por exemplo, na descarga</p>
    <p>- Reutilize materiais e consuma menos. Reaproveite!</p>
    <p>- Opte por um vaso com caixa acoplada e acionamento duplo, pois resíduos líquidos não precisam de uma descarga completa</p>
    <p> O planeta agradece! ;)`
    document.getElementById("gif").innerHTML =
    `<img src="./img/terra4.gif" alt="gif com uma plantinha brotando do planeta terra, que está sorrindo e feliz">`
    resultado.style.display = "block"
  } 
}

function refazerTeste() {
  concatResps = 0;
  resultado.style.display = "none"
}