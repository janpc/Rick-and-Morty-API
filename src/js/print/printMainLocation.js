import { $mainLocation } from '../data/domElements.js'
import { hideAllModals } from '../listeners/mainEpisodeListeners.js';
import { getCharacters } from '../data/apiRequests.js';
import { addMainLocationListsners } from '../listeners/mainLocationListeners.js';

function printMainLocation(data){
    const $episode=`<div class='main--location--content'>
        <div class="main--location--title">
            <h2>${data.name}</h2>
        </div>
        <div class="main--location--info">
            <p>Type: ${data.type}</p>
            <p>Dimension: ${data.dimension}</p>
            <button class="back" >back</button>
        </div>
        <div id="mainLocationCharacters" class="main--location--characters">
            <h3>Residents</h3>
        </div>
    </div>`;
    hideAllModals();
    $mainLocation.classList.add('active');
    $mainLocation.innerHTML=$episode;
    const $mainLocationCharacters=document.getElementById('mainLocationCharacters');
    getCharacters(data.residents, $mainLocationCharacters);
    addMainLocationListsners();
}

export { printMainLocation };