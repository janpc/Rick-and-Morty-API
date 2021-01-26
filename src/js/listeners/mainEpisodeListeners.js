import { getUrl } from "../data/apiRequests.js";
import { setBack } from "../data/back.js";
import { $mainCharacter, $mainEpisode, $mainLocation } from "../data/domElements.js";
import { printMainCharacter } from "../print/printMainCharacter.js";

function addMainEpisodeListsners(){
    const $mainEpisodeCharacters=document.getElementById('mainEpisodeCharacters');
    $mainEpisodeCharacters.addEventListener('click', function(event){
        if(event.target.classList.contains('main--episode--character')){
            showCharater(event.target);
        }else if(event.target.parentNode.classList.contains('main--episode--character')){
            showCharater(event.target.parentNode);
        }
    })

}

function removeMainEpisodeListsners(){
    const $mainEpisodeCharacters=document.getElementById('mainEpisodeCharacters');
    $mainEpisodeCharacters.removeEventListener('click', function(event){
        if(event.target.classList.contains('main--episode--character')){
            showCharater(event.target);
        }else if(event.target.parentNode.classList.contains('main--episode--character')){
            showCharater(event.target.parentNode);
        }
    })

}

function showCharater(target){
    let url=target.getAttribute('data-url');
    setBack(url, printMainCharacter);
    getUrl(url, printMainCharacter );
}


function hideAllModals(){
    if($mainEpisode.classList.contains('active')){
        removeMainEpisodeListsners();
        $mainEpisode.classList.remove('active');

    }else if($mainCharacter.classList.contains('active')){

        $mainCharacter.classList.remove('active');

    }else if($mainLocation.classList.contains('active')){

        $mainLocation.classList.remove('active');
    }

    
    
}

export { addMainEpisodeListsners, hideAllModals };