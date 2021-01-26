import { randomBorderRadius } from "./printEpisodes.js";


function printCharacter(data, elementToPrint){
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
    
    elementToPrint.appendChild($character);
    
}

function printCharacters(data, elementToPrint){
    if(data.length>0){
        data.forEach(character => {
            
            printCharacter(character.data, elementToPrint);
        });
    }else{
        const $info=document.createElement('p');
        $info.innerHTML='There are no characters here.';
        elementToPrint.appendChild($info);
    }
    
}

export { printCharacters };