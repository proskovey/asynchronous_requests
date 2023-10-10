const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', (e) => {
	e.preventDefault();
	if (xhr.readyState === xhr.DONE){	
		
		console.log(xhr.response);
		
		const question = JSON.parse(xhr.response)['data']['title'];
		pollTitle.innerText = question;
		
		const answers =  JSON.parse(xhr.response)['data']['answers'];
		for (let i in answers){
			const html = `
			<button class="poll__answer">
			  ${answers[i]}
			</button>
			`;
			  pollAnswers.insertAdjacentHTML('beforeend',html);
		}
		
		
	}
});

pollAnswers.addEventListener('click', ()=> {
	alert('Спасибо, Ваш голос засчитан!');
});

xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();