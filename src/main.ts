import { fetchRandom } from "./api";

import "./style.css";

const countDownDate = new Date("May 6, 2022 12:00:01").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const delta = countDownDate - now;
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((delta % (1000 * 60)) / 1000);

  const countDown = document.getElementById("countdown")!;
  countDown.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}, 1000);

let scarletWitch = ["scarlet", "witch"];

const setHtmlById = (elId: string, url: string) => {
  const el = document.getElementById(elId)!;
  return (el.innerHTML = imgMarkup(url));
};

const imgMarkup = (url: string) => `<img src=${url} alt='gif' />`;

const randomGif = () =>
  fetchRandom(scarletWitch)
    .then((res) => {
      if (res.meta.status === 200) {
        const {
          images: {
            fixed_height: { url },
          },
        } = res.data[Math.floor(Math.random() * 20)];
        setHtmlById("rando", url);
      }
    })
    .catch((err) => console.warn("Error", err));

// get gif on initial render
randomGif();

document.addEventListener(
  "click",
  function (event: MouseEvent) {
    const elem = event.target as Element;
    if (!elem.matches(".refresh-gif-btn")) return;

    event.preventDefault();

    randomGif();
  },
  false
);
