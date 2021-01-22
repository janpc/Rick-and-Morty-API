import { $content, $sidebar } from "../data/domElements.js";
import { getUrl } from "../data/apiRequests.js"

function sidebarListeners(){
    $sidebar.addEventListener('click', function(event){
        if(event.target.classList.contains('episodeList--episode')){
            $content.classList.remove('content--full');
            let url=event.target.getAttribute('data-url');
            getUrl(url);
        }else if(event.target.classList.contains('episodeList--episode--background')){
            $content.classList.remove('content--full');
            let url=event.target.parentNode.getAttribute('data-url');
            getUrl(url);
        }else if(event.target.classList.contains('episodeList--episode--title')){
            $content.classList.remove('content--full');
            let url=event.target.parentNode.parentNode.getAttribute('data-url');
            getUrl(url);
        }
    });
}

export {sidebarListeners};
