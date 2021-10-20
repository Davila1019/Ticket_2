
function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) {micookie=lista[i]}
        }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual+1);
    return valor;
    }

let token = leerCookie("jwt")

let tokenDecode = JSON.parse(window.atob(token.split('.')[1]));
var emailUser = tokenDecode.data.email;


async function getProfile() {
    let url = await fetch('http://localhost:2500/user/'+emailUser, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    let data = await url.json(url);
    console.log(data)
    let imageProfile = document.getElementById("profile");
    var contenedor = document.createElement("div");
    contenedor.setAttribute("class","card-body")
    let card = `

                <div class="d-flex flex-column align-items-center text-center">
                <img src="data:image/png;base64,"alt="Admin" class="rounded-circle" width="150">
                <div class="mt-3">
                <h4>${data.names}</h4>
                
                <p class="text-secondary mb-1"></p>
                <p class="text-muted font-size-sm"></p>

                </div>
                `
    let information = document.getElementById("personal");
    contenedor2 = document.createElement("div");
    contenedor2.setAttribute("class", "card-body");
    let personalInformation = `
   
                            <div class="row">
                                <h3>Información Personal</h1>
                            </div>
                          <div class="row">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Nombre completo</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            ${data.names} ${data.f_last_name} ${data.s_last_name}
                            </div>
                          </div>
                          <hr>
                          <div class="row">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            ${data.email}
                            </div>
                          </div>
                          <hr>
                          <div class="row">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Edad</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                            ${data.age} años
                            </div>
                          </div>
                          </div>
                        
    `

    contenedor.innerHTML += card;
    imageProfile.appendChild(contenedor)
    contenedor2.innerHTML += personalInformation;
    information.appendChild(contenedor2)
    
}

getProfile()

