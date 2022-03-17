import { Window } from "happy-dom";

import { imgMarkup, setHtmlById } from "../src/htmlUtils";
import { beforeEach, describe, expect, test } from "vitest";

describe("imgMarkup", () => {
  const window = new Window();
  const document = window.document;

  beforeEach(async () => {
    await window.happyDOM.whenAsyncComplete();
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  test("imgMarkup", () => {
    const url = "http://www.evilabed.biz";
    const html = imgMarkup(url);
    const newNode = document.createElement("div");
    newNode.innerHTML = html;
    const img = newNode.querySelector("img");
    expect(img.getAttribute("src")).toBe(url);
  });
});

describe("setHtmlById", () => {
  const window = new Window();
  const document = window.document;

  beforeEach(async () => {
    document.body.innerHTML = '<my-button id="world"></my-button>';
    await window.happyDOM.whenAsyncComplete();
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  test("settimeout", () => {
    const url = "http://www.evilabed.biz";
    const html = setHtmlById(document, 'world', url);
    console.log('html', html);
    const newNode = document.createElement("div");
    newNode.innerHTML = html;
    const img = newNode.querySelector("img");
    expect(img.getAttribute("src")).toBe(url);
  });
});
