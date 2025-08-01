const resposta = document.querySelector('.resposta')
const elementoImg = document.getElementById('imagem')
const descricao = document.getElementById('descricao')
const titulo = document.getElementById('titulo')
const erro = document.getElementById('erro')



const buscar = document.getElementById('buscar')
buscar.addEventListener('click', () => {
    const data = document.getElementById('data').value
    console.log(data)

    pegarDados(data)
})


async function pegarDados(data) {
    const carregando = document.getElementById('carregando')
    carregando.style.display = 'block'
    
    try {
        const resposta = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${data}`)
        
        
        if(!resposta.ok) {
            throw new Error("Não foi possível buscar os dados!")
        }

        const dados = await resposta.json()
        console.log(dados)

        exibeResposta(dados)
    }

    catch(error) {

        console.log(error)
        erro.style.display = 'block'
        resposta.style.display = 'none'

    }

    carregando.style.display = 'none'
}


const exibeResposta = (dados) => {

        const caminhoImg = dados.url

        erro.style.display = 'none'

        resposta.style.display = 'grid'
        elementoImg.src = caminhoImg
        elementoImg.style.display = 'block'
        descricao.innerText = dados.explanation
        titulo.innerText = dados.title

}