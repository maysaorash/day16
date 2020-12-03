// Information to reach API
const apiKey = '03e42b69c5d74519807e88220cfca7a2';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten})
  
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
  
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
        renderResponse(xhr.response)
      }
    }
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);
  }
  
  // Clear page and call AJAX functions
 
  
  shortenButton.addEventListener('click', displayShortUrl);
  