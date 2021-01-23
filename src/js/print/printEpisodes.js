import covers from './covers.js'

function printEpisode(episode){
    const season=episode.episode.substring(0,3);
    const $episode=document.createElement('button');
    const $background=document.createElement('div');
    const $title=document.createElement('h3');
    $episode.setAttribute('style', `background-image: url(${covers[season]}); border-radius: ${randomBorderRadius()}; `);
    $episode.classList.add('episodeList--episode');
    $episode.classList.add('handMadeBorder');
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

function randomBorderRadius(){
    let borderRadius='';
    for(let i=0; i<8; i++){
        if(i==4){
            borderRadius+=' / ';
        }
        const percent = Math.random() * 15;
        borderRadius+=percent+'% ';
    }
    
     return borderRadius;
}

export {printEpisodes};