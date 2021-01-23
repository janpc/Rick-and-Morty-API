import { getEpisodes } from './data/apiRequests.js'
import { showRandomBackground } from './data/backgrounds.js';
import { sidebarListeners } from './listeners/sidebarListeners.js';

window.onload=function(){
    showRandomBackground();
    getEpisodes();
    sidebarListeners();
}