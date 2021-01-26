import { $mainCharacter, $mainLocation } from '../data/domElements.js'
import { hideAllModals } from '../listeners/mainEpisodeListeners.js';
import { addMainCharacterListsners } from '../listeners/mainCharacterListeners.js';

function printMainLocation(data){
    console.log(data.origin);
    let color='#cc0000'
    if(data.status=='Alive'){
        color='green';
    }
    const $episode=`<div class='main--character--grid'>
        <div class="main--character--title">
            <h2>${data.name}</h2>
        </div>
        <div class="main--character--info">
            <p>Type: ${data.type}</p>
            <p>Dimension: ${data.dimension}</p>
            <button class="back" >back</button>
        </div>
    </div>`;
    hideAllModals();
    $mainCharacter.classList.add('active');
    $mainCharacter.innerHTML=$episode;
    addMainCharacterListsners();
}

export { printMainLocation };