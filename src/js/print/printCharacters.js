import { randomBorderRadius } from "./printEpisodes.js";


function printCharacter(data){
    const $mainEpisodeCharacters=document.getElementById('mainEpisodeCharacters');
    const $character=document.createElement('button');
    const $image=document.createElement('div');
    const $name=document.createElement('p');
    $character.setAttribute('data-url', data.url);
    $character.classList.add('main--episode--character');
    $image.style=`background-image: url(${data.image}); border-radius: ${randomBorderRadius(35,60)};`;
    $image.classList.add('main--episode--characterImage');
    $name.innerHTML=data.name;

    $character.appendChild($image);
    $character.appendChild($name);

    $mainEpisodeCharacters.appendChild($character);
}

function printCharacters(data){
    data.forEach(character => {
        
        printCharacter(character.data);
    });
}

export { printCharacters };