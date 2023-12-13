const click = document.getElementById('btn');
const clickd = document.getElementById('dbtn');

const contents = document.getElementById('show-achievements')

click.addEventListener('click',function() {
    contents.style.display = 'block';
    dbtn.style.display = 'inline-block';
})

clickd.addEventListener('click',function() {
    contents.style.display = 'none';
    dbtn.style.display = 'none';
})
