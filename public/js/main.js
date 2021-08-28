const cmodal = document.querySelector('.form-modal');
const closemodal = document.querySelector('#closemodal');
closemodal.addEventListener('click',()=>{
	cmodal.classList.remove('modalshow');
})

const closemodalbtn = document.querySelector('#closemodalbtn');
closemodalbtn.addEventListener('click',()=>{
	cmodal.classList.remove('modalshow');
})
const addResource = document.querySelector('#add-resource');
const modal = document.querySelector('#add-resource-modal');

addResource.addEventListener('click',()=>{
	modal.classList.toggle('modalshow');
});
