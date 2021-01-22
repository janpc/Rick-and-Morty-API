import { printEpisodes } from '../print/printEpisodes.js';

function getEpisodes() {
  axios.get("https://rickandmortyapi.com/api/episode/").then((response) => {
    if (response.status == 200) {
        printEpisodes(response.data.results)
    }
  });
}

export { getEpisodes };
