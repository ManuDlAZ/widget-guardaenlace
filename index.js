let misLinks = []
const guardar = document.getElementById("el-guardado")
const ingreso = document.getElementById("el-ingreso") 
const lista = document.getElementById("el-ul")
const almacenamieto = JSON.parse(localStorage.getItem("links"))
const borrar = document.getElementById("borra2")
const salvar = document.getElementById("salvar-pes")


if (almacenamieto){
  misLinks = almacenamieto
  renderizar(misLinks)
}

salvar.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    misLinks.push(tabs[0].url)
  localStorage.setItem("links", JSON.stringify(misLinks));
  renderizar(misLinks)
})
})

function renderizar(links){
  listar= ""
  for (let i = 0; i < links.length; i++){
    listar += `
      <li>
        <a target='_blank' href='${links[i]}'> 
          ${links[i]}  
        </a>
      </li>`
   }
   
   lista.innerHTML = listar
}

guardar.addEventListener("click", function(){
  misLinks.push(ingreso.value)
  ingreso.value = ""
  localStorage.setItem("links", JSON.stringify(misLinks));
  renderizar(misLinks)
})

borrar.addEventListener("dblclick", function(){
  localStorage.clear()
  misLinks = []
  renderizar(misLinks)
})
