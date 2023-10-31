const API = async () => {
    const busqueda = document.getElementById("textoBusqueda").value;
    const url = `https://api-formula-1.p.rapidapi.com/circuits?search=${busqueda}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aefa138a1emsh5b50aeacd0b5d94p167611jsn1417329d8b33',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result);

        let conteHTML =`<div class="container text-center"> 
        <div class="row">
        <div class="col-md-12">
            <img src="${result.response[0].image}" class="mx-auto text-center" alt="Circuito">
            <h4>${result.response[0].name}</h4>
            <h5>Pais: ${result.response[0].competition.name}</h5>
            <p>Vueltas: ${result.response[0].laps}</p>
            <p>Tiene una distancia de: ${result.response[0].length}</p>
        </div>
        </div>`;
        document.getElementById("resultadoCircuito").innerHTML = conteHTML;

    } catch (error) {
        //document.getElementById("resultadoCircuito").innerHTML = `<h5 class="text-center my-5">No se encontró el Circuito.</h5>`;
        document.getElementById("resultadoCircuito").innerHTML = `<h3 class="alert alert-warning my-5 text-center" role="alert">No se encontró el Circuito.</h3>`;
    }
}

document.getElementById("btnBuscar").addEventListener("click", API);