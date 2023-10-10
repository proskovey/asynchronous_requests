const loader = document.getElementById('loader');
const items = document.getElementById('items');

const xhr  = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (e) => {
	e.preventDefault();
	if (xhr.readyState === xhr.DONE){
		loader.classList.remove('loader_active');
		
		const currencyList = JSON.parse(xhr.response)['response']['Valute'];
		
		for (let i in currencyList){
			const html = `
				<div class="item">
					<div class="item__code">
					    ${currencyList[i].CharCode}
					</div>
					<div class="item__value">
					    ${currencyList[i].Value}
					</div>
					<div class="item__currency">
					    руб.
					</div>
				</div>
			`;
			items.insertAdjacentHTML('beforeend',html);
		}
	}
});

xhr.open('GET','https://netology-slow-rest.herokuapp.com');
xhr.send();

