import {$mainEpisode} from '../data/domElements.js'

function printMainEpisode(data){
    console.log(data);
    const $episode=`<div class='main--episode--grid'>
        <div class="main--episode--img">
            <img  src="https://upload.wikimedia.org/wikipedia/en/b/b8/Rick_and_Morty_season_1.png">
        </div>
        <div class="main--episode--title">
            <h2>${data.name}</h2>
        </div>
        <div class="main--episode--date">
            <p>Date: ${data.air_date}</p>
        </div>
        <div class="main--episode--code">
            <p>${data.episode}</p>
        </div>
    </div>
    <div class="main--episode--characters"></div>`;

    $mainEpisode.innerHTML=$episode;
}

export { printMainEpisode };