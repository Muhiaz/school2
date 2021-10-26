
const addResource = document.querySelector('#add-resource');
const modal = document.querySelector('#add-resource-modal');

addResource.addEventListener('click',()=>{
	modal.classList.toggle('modalshow');
});
const cmodal = document.querySelector('.form-modal');
const closemodal = document.querySelector('#closemodal');
closemodal.addEventListener('click',()=>{
	cmodal.classList.remove('modalshow');
})

const bookmark = document.querySelector('.bookmark');
bookmark.addEventListener('click',() =>{
	document.querySelector('.bookmark').classList.toggle('active');
});

const heart = document.querySelector('.heart');
heart.addEventListener('click',() =>{
	document.querySelector('.heart').classList.toggle('active');
});

const times = document.querySelector('.times');
times.addEventListener('click',() =>{
	document.querySelector('.times').classList.toggle('active');
});
const closemodalbtn = document.querySelector('#closemodalbtn');
closemodalbtn.addEventListener('click',()=>{
	cmodal.classList.remove('modalshow');
})

