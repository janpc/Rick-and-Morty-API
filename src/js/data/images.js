import { $randomImage } from "./domElements.js";

let canAnimate=true;
const rickAndMortyImages=[
    {
        src:'https://userscontent2.emaze.com/images/a44648de-a57e-4bd4-b505-7defaa13e8da/2442060187038be38691bf947b140fe1.png',
        style:'width: 25%;'
    },
    {
        src:'https://image.ibb.co/g2459F/morty.png',
        style:'width: 25%;'
    },
    {
        src:'https://i.pinimg.com/originals/04/68/7e/04687eeebbbbd3979150f96244953a6e.gif',
        style:'width: 15%;'
    }
]

function showRandomImage(){
    if(canAnimate){
    const pos = Math.floor(Math.random() * (rickAndMortyImages.length));
    const left = Math.floor(Math.random() * 70);
    $randomImage.src = rickAndMortyImages[pos].src;
    $randomImage.classList.add('animate')
    $randomImage.setAttribute('style', rickAndMortyImages[pos].style+` left: ${left}%;`);
    canAnimate=false;
    setTimeout(function(){
        canAnimate=true;
        $randomImage.classList.remove('animate')
        $randomImage.src = '';
    }, 6000)}
}

export { showRandomImage };