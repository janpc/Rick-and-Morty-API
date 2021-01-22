import { $content, $sidebar } from "../data/domElements.js";
import { getUrl } from "../data/apiRequests.js"
import { showRandomImage } from "../data/images.js";

function sidebarListeners(){
    $sidebar.addEventListener('click', function(event){
        if(event.target.classList.contains('episodeList--episode')){
            showEpisode(event.target)
        }else if(event.target.classList.contains('episodeList--episode--background')){
            showEpisode(event.target.parentNode)
        }else if(event.target.classList.contains('episodeList--episode--title')){
            showEpisode(event.target.parentNode.parentNode)
        }
    });
}

function showEpisode(target){
    $content.classList.remove('content--full');
    let url=target.getAttribute('data-url');
    getUrl(url);
    showRandomImage();
}

export {sidebarListeners};
