import { fetchRandom } from "./api";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="message">
    <h1>MoM</h1>
    <hr />
    <h2>COMING TO CINEMARK N🍩RTH</h2>
    <hr />
    <div id="countdown"></div>
    <div id="rando"></div>
    <div class="postscript">made for nona - 2022</div>
    </div>
  </div>
`;

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
