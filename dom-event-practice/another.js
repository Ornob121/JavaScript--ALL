const text = document.getElementById('input-text');


document.getElementById('bold').addEventListener('click', function(){
    text.style.fontWeight = '600';
})



document.getElementById('italic').addEventListener('click', function(){
    text.style.fontStyle = 'italic';
})



document.getElementById('underline').addEventListener('click', function(){
    document.getElementById('input-text').style.textDecoration = 'underline';
})


document.getElementById('left').addEventListener('click', function(){
    text.style.textAlign = 'left';
})


document.getElementById('left').addEventListener('click', function(){
    text.style.textAlign = 'center';
})


document.getElementById('right').addEventListener('click', function(){
    text.style.textAlign = 'right';
})


document.getElementById('margin').addEventListener('click', function(){
    text.style.textAlign = 'justify';
})








