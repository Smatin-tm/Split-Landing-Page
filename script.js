'use district';

let left = document.querySelector('.left');
let middle = document.querySelector('.middle');
let right = document.querySelector('.right');

    // LEFT SIDE
left.addEventListener('mouseenter', ()=>{
    left.classList.add('wider');
})
left.addEventListener('mouseleave', ()=>{
    left.classList.remove('wider');
})

    // middle
middle.addEventListener('mouseenter', ()=>{
    middle.classList.add('wider');
})
middle.addEventListener('mouseleave', ()=>{
    middle.classList.remove('wider');
})
    // right side
right.addEventListener('mouseenter', ()=>{
    right.classList.add('wider');
})
right.addEventListener('mouseleave', ()=>{
    right.classList.remove('wider');
})