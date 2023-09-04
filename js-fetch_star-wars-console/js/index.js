console.clear();
const main= document.getElementById("root");
const url = "https://swapi.dev/api/people";

async function fetchData() {
    try {
        const response= await fetch(url);
        const data= await response.json();
        console.log(data);
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

const people= await fetchData();
if(people){
    console.log(people);
    people?.forEach(person => {
        console.log(person);
        const div= document.createElement("div");
        const name= document.createElement("h3");
        const height= document.createElement("p");
    
        name.textContent= person.name;
        height.textContent= person.height;
        div.append(name)
        div.append(height)
        main.append(div)
        
    })

}

