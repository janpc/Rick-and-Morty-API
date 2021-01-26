import { getUrl } from "./apiRequests.js";
let lastPages=[]
let actual={
    function:null, 
    url:null
}

function setBack(url, fun){
    if(actual.url!=null){
        const newObject={
            function: actual.function,
            url: actual.url
        }
        lastPages.push(newObject);
    }

    actual.url=url;
    actual.function=fun;
}

function goBack(){
    let index=lastPages.length-1;
    getUrl(lastPages[index].url, lastPages[index].function);
    actual={
        function:lastPages[index].function, 
        url:lastPages[index].url
    }
    lastPages.splice(-1,1);
}

export { setBack, goBack };