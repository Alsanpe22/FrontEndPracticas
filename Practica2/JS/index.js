//https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
    const barra = document.getElementById("Barra")
    const botonBusqueda = document.getElementById("SearchButton")
    const fotosAbajo = document.getElementById("ParteAbajo")


    const searchOnClick = async (value) => {
        const data = await (await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)).json();
        console.log(data)
        var html="";
      

        for(var i = 0; i<data.results.length; i++){
            html += "<div class='character'>"
                html += "<img class='img' src='" + data.results[i].image + "'/>"
                html += "<div class='details'>"
                    html += "Name: " + data.results[i].name + "<br>" 
                    html += "Gender: " + data.results[i].gender + "<br>" 
                    html += "Location: " + data.results[i].location.name + "<br>" 
                    html += "Species: " + data.results[i].species + "<br>" 
                    html += "Status: " + data.results[i].status + "<br>" 
                html += "</div>"
            html += "</div>"
        }

        document.getElementById("CartaDisplay").innerHTML = html;


    }

    botonBusqueda.addEventListener("click", (e) =>{
        e.preventDefault();
        if(barra.value){
            searchOnClick(barra.value)
        }
    })