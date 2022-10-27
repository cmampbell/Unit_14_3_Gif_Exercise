const searchForm = document.querySelector("#search-form");
const gifSection = document.querySelector("#gif-area");
const removeBtn = document.querySelector('.remove');

searchForm.addEventListener("submit", async function(evt){
    evt.preventDefault();
    const searchTerm = document.querySelector("#search");
    const gifURL = await getGIF(searchTerm.value);
    searchTerm.value = '';
    appendGIF(gifURL);
})

async function getGIF(q){
    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {'params': 
        {api_key: 'eU0GcQnlhV6SM8lLqD2nddbx0OtFYHDF', q} } );
    const foundGIF = response.data.data[0];
    return foundGIF.images.downsized.url;
}

function appendGIF(url){
    let newGIF = document.createElement('img');
    newGIF.setAttribute('src', url);
    newGIF.classList.add('gif');
    gifSection.append(newGIF);
}

removeBtn.addEventListener('click', () => gifSection.innerHTML = '');