import { getUrl } from "../data/apiRequests.js";
import { goBack, setBack } from "../data/back.js";
import { printMainLocation } from "../print/printMainLocation.js";

function addMainCharacterListsners(event){
    const $back=document.querySelector('.back');
    $back.addEventListener('click', function(){

        goBack();

    })
    const $origin=document.querySelector('.origin');
    $origin.addEventListener('click', function(event){

        showLocation(event.target);

    })

}

function showLocation(target){
    let url=target.getAttribute('data-url');
    setBack(url, printMainLocation);
    getUrl(url, printMainLocation);
}

export { addMainCharacterListsners };