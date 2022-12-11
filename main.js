const API = 'https://api.jikan.moe/v4/anime/48583';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

async function loadContent() {
  const description = document.getElementById('description');
  const poster = document.getElementById('poster');
  const content = document.getElementById('content');
  let nodes_characters = '';

  const response = await fetchData(API);
  const characters = await fetchData(`${API}/characters`);
  poster.src = response.data.images.jpg.large_image_url;
  description.textContent = response.data.synopsis;
  characters.data.forEach(character => {
    nodes_characters += `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${character.character.images.jpg.image_url}" 
            alt="${character.character.name} image" 
            class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${character.character.name}
          </h3>
        </div>
      </div>
    `;
  });

  content.innerHTML = nodes_characters;
}

loadContent();