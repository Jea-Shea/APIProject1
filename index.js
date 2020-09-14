const baseURL = 'https://ghibliapi.herokuapp.com/people';

const submit = document.getElementById('submit');
submit.innerText = 'Find Out'


const characters = document.getElementById('name');
//characters.style = "font-size: 25px; font-family: 'Kaushan Script', cursive; color: #0a265c"; ADD RESPONSIVENESS TO THIS PORTION

const films = document.getElementById('movies');
//movies.style = "font-family: 'Nanum Brush Script', cursive; color: #0a265c;"

submit.addEventListener('click', fetchCharacter);

function fetchCharacter(e){
    e.preventDefault(); 

    fetch(baseURL)
    .then(result => result.json())
    .then(json => {
        console.log(json);
        displayCharacter(json);
    })
    

    .catch(err => console.log(err))

}

function displayCharacter(character){
    let who = document.createElement("h1");
    who.style = "font-size: 15vw; font-family: 'Kaushan Script', cursive; color: antiquewhite; transform: rotate(-10deg);"; // consider a loop to dictate answer and size?
    let where = document.createElement("h2");
    where.style = "font-size: 3vw; font-family: 'Nanum Brush Script', cursive; color: antiquewhite;"

    submit.innerText = 'Another?';
  

    let v = character[Math.floor(Math.random() * character.length)];
    
    for (let c of character ){
        if ( c == v ){
        who.innerText = c.name;
        
        let  appearances = c.films;
        console.log(appearances);

        fetch(appearances)
        .then(result => result.json())
        .then(json => {
            console.log(json.title);
            where.innerText = json.title;
        })

        characters.appendChild(who); 
         films.appendChild(where)
} else {
       console.log('err');
     }
    }

    submit.addEventListener('click', () => {
        characters.removeChild(who);
        films.removeChild(where);
        displayCharacter();
    })
 } 



