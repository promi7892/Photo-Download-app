const loadImages = () => {
	fetch(
		'https://pixabay.com/api/?key=23253337-65e9159af77dc6549c662e441?per-page=1',
	)
		.then((res) => res.json())
		.then((data) => displayAllImages(data.hits));
};
loadImages();

const fetchApi = (url) => {
	fetch(
		'https://pixabay.com/api/?key=23253337-65e9159af77dc6549c662e441?per-page=1',
	)
		.then((res) => res.json())
		.then((data) => displayAllImages(data.hits));
};

const displaySearchResults = () => {
	let searchInput = document.getElementById('search-input');
	let searchText = searchInput.value;
	searchInput.value = '';

	fetch(
		`https://pixabay.com/api/?key=23253337-65e9159af77dc6549c662e441&q=${searchText}`,
	)
		.then((res) => res.json())
		.then((data) => displayAllImages(data.hits));
};

const displayAllImages = (images) => {
	const ShowResults = document.getElementById('get-results');
	ShowResults.textContent = '';
	images.forEach((image) => {
		const ImageCards = document.createElement('div');
		ImageCards.classList.add('col');
		ImageCards.innerHTML = `
					<div class="card h-100 bg-dark text-white border-0 rounded shadow">
						<img src="${image.webformatURL}" class="card-img-top h-50  py-2" alt="..." />
						<div class="card-body ">
							<h5 class="card-title">${image.tags ? image.tags : 'No Match Found'}</h5>
							
							<p class="card-text">Posted By : ${image.user}</p>
							<button onclick = "largeImage(${image.id})"
							class = "mx-auto text-white border-0 bg-secondary p-2">Download Here </button>
						</div>
						<div class="card-footer d-flex justify-content-between">
							<small class="text-muted"><i class="fas fa-heart"></i> ${image.likes}</small>
							<small class="text-muted"> <i class="fas fa-comments"></i> ${
								image.comments
							}</small>
							<small class="text-muted"> <i class="far fa-eye"></i></i> ${image.views}</small>
						</div>
                        </div>
        `;
		ShowResults.appendChild(ImageCards);
	});
};

const largeImage = (image) => {
	const viewLargeImage = document.getElementById('view-image');
	const imageDiv = document.createElement('div');
	imageDiv.innerHTML = `
	<img src="${image.largeImageURL}" class="card-img-top " alt="..." />

	`;
	viewLargeImage.appendChild(imageDiv);
};

console.log(largeImage);
