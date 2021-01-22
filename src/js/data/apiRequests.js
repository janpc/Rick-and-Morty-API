import { printEpisodes } from '../print/printEpisodes.js';
import { printMainEpisode } from '../print/printMainEpisode.js';

function getEpisodes() {
  axios.get("https://rickandmortyapi.com/api/episode/").then((response) => {
    if (response.status == 200) {
        printEpisodes(response.data.results)
    }
  });
}

function getUrl(url){
  axios.get(url).then((response) => {
    if (response.status == 200) {
      printMainEpisode(response.data);
    }
  });
}

export { getEpisodes, getUrl };
