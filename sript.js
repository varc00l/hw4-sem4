document.getElementById('action-btn').addEventListener('click', function () {
    alert('Button Clicked!');
});

document.getElementById('my-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log('Name:', name);
    console.log('Email:', email);
});
  
document.getElementById('action-btn').addEventListener('click', function () {
    const infoDiv = document.getElementById('info');
    infoDiv.textContent = 'This is some additional information!';
});
  
document.getElementById('action-btn').addEventListener('click', function () {
    const infoDiv = document.getElementById('info');
    infoDiv.textContent = 'This is some additional information!';
    infoDiv.classList.add('show');
});
  