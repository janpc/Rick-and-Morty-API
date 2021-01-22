import covers from './covers.js'

function printEpisode(episode){
    let season=episode.episode.substring(0,3)
    const $episode=document.createElement('button');
    const $background=document.createElement('div');
    const $title=document.createElement('h3');
    $episode.setAttribute('style', `background-image:${covers[season]}`);
    $episode.classList.add('episodeList--episode');
    $title.innerHTML=episode.episode+ ': '+ episode.name;
    $title.classList.add('episodeList--episode--title');
    $background.appendChild($title);
    $background.classList.add('episodeList--episode--background');
    $episode.appendChild($background);
    $episode.setAttribute('data-url', episode.url);

    document.getElementById("sidebar").appendChild($episode);
}

function printEpisodes(data){
    console.log(covers);
    data.forEach(episode => {
        printEpisode(episode);
    });
}

export {printEpisodes};