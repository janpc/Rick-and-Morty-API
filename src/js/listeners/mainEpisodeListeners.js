import { getUrl } from "../data/apiRequests.js";

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

function showCharater(target){
    let url=target.getAttribute('data-url');
    console.log(url);
    getUrl(url, console.log );
}

export { addMainEpisodeListsners };