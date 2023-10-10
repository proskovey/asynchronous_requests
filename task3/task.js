const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
	
    const input = form.elements.file;
    const file = input.files[0];
    
    if (file) {
	    const xhr = new XMLHttpRequest();
	  
	    xhr.upload.onprogress = function(event) {
		progress.setAttribute('max', event.total);
		progress.value = event.loaded;
	    }
	  
	    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	    xhr.send(file);
    }    
});

