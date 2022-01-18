createElement = (data) => {

  const body = document.querySelector('body');

  let paragraph = document.createElement('p')
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
}

queryWikipedia = (callback) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", createElement)
  oReq.open("GET", 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*')
  oReq.overrideMimeType("text/plain; charset=x-user-defined")
  oReq.send()
  oReq.callback = callback;
}

queryWikipedia(createElement)
