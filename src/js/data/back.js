import { getUrl } from "./apiRequests.js";

let back={
    function:null, 
    url:null
}
let next={
    function:null, 
    url:null
}

function setBack(url, fun){
    back.function=next.function;
    back.url=next.url;
    next.url=url;
    next.function=fun;
}

function goBack(){
    getUrl(back.url, back.function);
    setBack(back.url, back.function);
}

export { setBack, goBack };