import { $mainCharacter } from '../data/domElements.js'
import { hideAllModals } from '../listeners/mainEpisodeListeners.js';
import { addMainCharacterListsners } from '../listeners/mainCharacterListeners.js';

function printMainCharacter(data){
    console.log(data.origin);
    let color='#cc0000'
    if(data.status=='Alive'){
        color='green';
    }
    const $episode=`<div class='main--character--grid'>
        <div class="main--character--img sketchy">
            <div style="background-image: url(${data.image})"></div>
        </div>
        <div class="main--character--title">
            <h2>${data.name}</h2>
        </div>
        <div class="main--character--info">
            <p>Status: <b style="color:${color};">${data.status}</b></p>
            <p>Specie: ${data.species}</p>
            <p>Gender: ${data.gender}</p>
            <span>Origin: </span><button class="origin" data-url='${data.origin.url}'>${data.origin.name}</button>
            <button class="back" >back</button>
        </div>
    </div>`;
    hideAllModals();
    $mainCharacter.classList.add('active');
    $mainCharacter.innerHTML=$episode;
    addMainCharacterListsners();
}

export { printMainCharacter };