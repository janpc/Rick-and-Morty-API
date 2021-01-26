import { getUrl } from "../data/apiRequests.js";
import { goBack, setBack } from "../data/back.js";
import { printMainLocation } from "../print/printMainLocation.js";

function addMainCharacterListsners(){
    const $back=document.querySelector('.main--character--info>.back');
    $back.addEventListener('click', function(){

        goBack();

    })
    const $origin=document.querySelector('.origin');
    $origin.addEventListener('click', function(event){

        showLocation(event.target);

    })

}

function removeMainCharacterListsners(){
    const $back=document.querySelector('.back');
    $back.removeEventListener('click', function(){

        goBack();

    })
    const $origin=document.querySelector('.origin');
    $origin.removeEventListener('click', function(event){

        showLocation(event.target);

    })

}

function showLocation(target){
    let url=target.getAttribute('data-url');
    if(url){
        setBack(url, printMainLocation);
        getUrl(url, printMainLocation);
    }
    
}

export { addMainCharacterListsners, removeMainCharacterListsners };