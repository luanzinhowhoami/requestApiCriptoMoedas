// API Key
var api = {
  url:
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY",
  key: "31c26c5d-4ef3-4291-8a74-6e05550f06bc",
};

// GET Fetch Request
const { url, key } = api;
fetch(`${url}=${key}`)
  .then((response) => {
    if (!response.ok)
      throw new Error(`Request Error, status ${response.status}`);
    return response.json();
  })
  .then((api) => {
    console.log(api.data);
    var text = "";
    // Get 10 coins and symbols
    for (let i = 0; i < 10; i++) {
      // Show API information
      text += `
        <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
            </div>
        </div>
      `;
      document.getElementById("coins").innerHTML = text;
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
