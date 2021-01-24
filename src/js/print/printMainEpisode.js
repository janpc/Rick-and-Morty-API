import {$mainEpisode} from '../data/domElements.js'
import { addMainEpisodeListsners } from '../listeners/mainEpisodeListeners.js';
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
    <div id="mainEpisodeCharacters" class="main--episode--characters"></div>`;

    $mainEpisode.innerHTML=$episode;
    addMainEpisodeListsners();
}

export { printMainEpisode };