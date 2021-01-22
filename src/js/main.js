import { getEpisodes } from './data/apiRequests.js'
import { sidebarListeners } from './listeners/sidebarListeners.js';

window.onload=function(){
    getEpisodes();
    sidebarListeners();
}