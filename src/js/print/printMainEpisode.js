import {$mainEpisode} from '../data/domElements.js'
import { addMainEpisodeListsners, hideAllModals } from '../listeners/mainEpisodeListeners.js';
import { getCharacters } from "../data/apiRequests.js";
import covers from './covers.js'

function printMainEpisode(data){
    const season=data.episode.substring(0,3);
    const $episode=`<div class='main--episode--grid'>
        <div class="main--episode--img sketchy">
            <div style="background-image: url(${covers[season]})"></div>
        </div>
        <div class="main--episode--title">
            <h2>${data.name}</h2>
        </div>
        <div class="main--episode--date">
            <p>Date: ${data.air_date}</p>
            <p>${data.episode}</p>
        </div>
    </div>
    <div id="mainEpisodeCharacters" class="main--episode--characters">
        <h3>Characters</h3>
    </div>`;

    $mainEpisode.innerHTML=$episode;
    
    const $mainEpisodeCharacters=document.getElementById('mainEpisodeCharacters');
    getCharacters(data.characters, $mainEpisodeCharacters);

    hideAllModals();
    $mainEpisode.classList.add('active');
    addMainEpisodeListsners();
}

export { printMainEpisode };