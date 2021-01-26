import { goBack } from '../data/back.js';
import { showCharacter } from './mainEpisodeListeners.js'
function addMainLocationListsners(){
    const $back=document.querySelector('.main--location--info>.back');
    $back.addEventListener('click', function(){

        goBack();

    })
    const $characters=document.querySelector('.main--location--characters');
    $characters.addEventListener('click', function(event){
        if(event.target.classList.contains('main--episode--character')){
            showCharacter(event.target);
        }else if(event.target.parentNode.classList.contains('main--episode--character')){
            showCharacter(event.target.parentNode);
        }
    })

}

function removeMainLocationListsners(){
    const $back=document.querySelector('.main--location--info>.back');
    $back.removeEventListener('click', function(){
        goBack();
    })
    const $characters=document.querySelector('.main--location--characters');
    $characters.removeEventListener('click', function(event){
        if(event.target.classList.contains('main--episode--character')){
            showCharacter(event.target);
        }else if(event.target.parentNode.classList.contains('main--episode--character')){
            showCharacter(event.target.parentNode);
        }
    })

}
export { addMainLocationListsners, removeMainLocationListsners };