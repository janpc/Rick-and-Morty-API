import { $content, $sidebar } from "../data/domElements.js";
import { getUrl, getCharacters, getEpisodes } from "../data/apiRequests.js";
import { showRandomImage } from "../data/images.js";
import { printMainEpisode } from "../print/printMainEpisode.js";
import { setBack } from "../data/back.js";

function sidebarListeners() {
  $sidebar.addEventListener("click", function (event) {
    if (event.target.classList.contains("episodeList--episode")) {
      showEpisode(event.target);
      
    } else if (
      event.target.classList.contains("episodeList--episode--background")
    ) {
      showEpisode(event.target.parentNode);
    } else if (event.target.classList.contains("episodeList--episode--title")) {
      showEpisode(event.target.parentNode.parentNode);
    }
  });
  detectScrollBottom();
}

function showEpisode(target) {
  $content.classList.remove("content--full");
  let url = target.getAttribute("data-url");
  setBack(url, printMainEpisodeInfo);
  getUrl(url, printMainEpisodeInfo);
  showRandomImage();
}

function printMainEpisodeInfo(data) {
  printMainEpisode(data);
  getCharacters(data);
}

function detectScrollBottom() {
  $sidebar.addEventListener("scroll", function () {
    detectBottom();
  });
}
function detectBottom() {
  let $lastPost = $sidebar.lastChild;
  let rect = $lastPost.getBoundingClientRect();
  let lastPostTop = rect.top;
  let lastPostHeight = $lastPost.offsetHeight;
  let windowHeight = window.innerHeight;

  if (lastPostTop + lastPostHeight / 2 - windowHeight < 0) {
    getEpisodes();
  }
}

export { sidebarListeners };
