export const setHtmlById = (document: any, elId: string, url: string) => {
  const el = document.getElementById(elId)!;
  return (el.innerHTML = imgMarkup(url));
};

export const imgMarkup = (url: string) => `<img src=${url} alt='gif' />`;

