import { $content, $sidebar } from "../data/domElements.js";

function sidebarListeners(){
    $sidebar.addEventListener('click', function(event){
        if(event.target.classList.contains('episodeList--episode')){
            $content.classList.remove('content--full');
        }else if(event.target.classList.contains('episodeList--episode--background')){
            $content.classList.remove('content--full');
        }else if(event.target.classList.contains('episodeList--episode--title')){
            $content.classList.remove('content--full');
        }
    });
}

export {sidebarListeners};
