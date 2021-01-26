import { getUrl } from "../data/apiRequests.js";
import { setBack } from "../data/back.js";
import { $mainCharacter, $mainEpisode, $mainLocation } from "../data/domElements.js";
import { printMainCharacter } from "../print/printMainCharacter.js";
import { removeMainCharacterListsners } from "./mainCharacterListeners.js";
import { removeMainLocationListsners } from "./mainLocationListeners.js";

function addMainEpisodeListsners(){
    const $mainEpisodeCharacters=document.getElementById('mainEpisodeCharacters');
    $mainEpisodeCharacters.addEventListener('click', function(event){
        if(event.target.classList.contains('main--episode--character')){
            showCharacter(event.target);
        }else if(event.target.parentNode.classList.contains('main--episode--character')){
            showCharacter(event.target.parentNode);
        }
    })

}

function removeMainEpisodeListsners(){
    const $mainEpisodeCharacters=document.getElementById('mainEpisodeCharacters');
    $mainEpisodeCharacters.removeEventListener('click', function(event){
        if(event.target.classList.contains('main--episode--character')){
            showCharacter(event.target);
        }else if(event.target.parentNode.classList.contains('main--episode--character')){
            showCharacter(event.target.parentNode);
        }
    })

}

function showCharacter(target){
    let url=target.getAttribute('data-url');
    setBack(url, printMainCharacter);
    getUrl(url, printMainCharacter );
}


function hideAllModals(){
    if($mainEpisode.classList.contains('active')){

        removeMainEpisodeListsners();
        $mainEpisode.classList.remove('active');

    }else if($mainCharacter.classList.contains('active')){

        removeMainCharacterListsners();
        $mainCharacter.classList.remove('active');

    }else if($mainLocation.classList.contains('active')){
        removeMainLocationListsners();
        $mainLocation.classList.remove('active');
    }

}

export { addMainEpisodeListsners, hideAllModals, showCharacter };