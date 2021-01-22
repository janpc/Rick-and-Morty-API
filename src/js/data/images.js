import { $randomImage } from "./domElements.js";

let canAnimate=true;
const rickAndMortyImages=[
    {
        src:'https://lh3.googleusercontent.com/proxy/l34rhNpxKpUNlVnTs4bNP-1ktWSAU_nXOW5eVrA8UenpHgCQNiK7vVaKeNKBNsUZ-vppXxdfG-ZTtZb5ULk63rkubvnUvUT2s2Akq2byl1tl8i4H_R-q9AC7zeC46i3rRDU',
        style:'width: 30%;'
    },
    {
        src:'https://lh3.googleusercontent.com/proxy/TCEIRYQ9NPy8_7PfI9X51qce3WzL88NGj_fytnN0mHlq7Gtg2dn6_zLW-ZhipLL359-dVq9mvGNwriZPoRzdjMGGn0U6StAvqp_SOYsdK7-KAjNIJpPCRUEp8pF-FtBZGw',
        style:'width: 20%;'
    },
    {
        src:'https://userscontent2.emaze.com/images/a44648de-a57e-4bd4-b505-7defaa13e8da/2442060187038be38691bf947b140fe1.png',
        style:'width: 25%;'
    },
    {
        src:'https://lh3.googleusercontent.com/proxy/AcaGRXb2OFuDf3EflNxEzBQeZZmkA1wjiL2-nzkYe9Nc9RZKr17GmuptcmLBLXCF1R2QGxovaFLriHQ8NiDCapeWwI66dtemHS_RB5D4Nhr023zfNg',
        style:'width: 15%;'
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
    const pos = Math.floor(Math.random() * (rickAndMortyImages.length+0.9));
    const left = Math.floor(Math.random() * 70);
    $randomImage.src = rickAndMortyImages[pos].src;
    $randomImage.classList.add('animate')
    $randomImage.setAttribute('style', rickAndMortyImages[pos].style+` left: ${left}%;`);
    canAnimate=false;
    console.log(pos)
    setTimeout(function(){
        canAnimate=true;
        $randomImage.classList.remove('animate')
        console.log('ya')
        $randomImage.src = '';
    }, 6000)}
}

export { showRandomImage };