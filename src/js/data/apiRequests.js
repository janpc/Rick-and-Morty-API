import { printCharacters } from '../print/printCharacters.js';
import { printEpisodes } from '../print/printEpisodes.js';

let canLoadMoreEpisodes=true;
let episodesUrl="https://rickandmortyapi.com/api/episode/";

function getEpisodes() {
  if(canLoadMoreEpisodes){
    canLoadMoreEpisodes=false;
    axios.get(episodesUrl).then((response) => {
      if (response.status == 200) {
        printEpisodes(response.data.results)
        episodesUrl=response.data.info.next;
        if(episodesUrl!=null){
          canLoadMoreEpisodes=true;
        }
      }
    });
  }
}

function getUrl(url, callback){
  axios.get(url).then((response) => {
    if (response.status == 200) {
      callback(response.data);
    }
  });
}

function getCharacters(data, elementToPrint){
  axios.all(data.map(link => axios.get(link)))
  .then(axios.spread(function (...res) {
    printCharacters(res, elementToPrint);
  }));
}

export { getEpisodes, getUrl,  getCharacters };
