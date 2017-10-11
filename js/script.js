var body = document.getElementsByTagName('body')[0];
var button = document.createElement('button');
var h1 = document.createElement('h1');
var p = document.createElement('p');

body.appendChild(button);
button.textContent = 'Click Me';
button.className = 'center-block';
button.style.marginTop = '100px';
button.addEventListener('click',function() {
    let title = prompt('What is your favorite movie?');
    body.appendChild(h1);
    h1.textContent=(title);
    if (title.includes('')) {
        let things = prompt('What did you do today?');
        body.appendChild(p);
        p.textContent=(things);
        if (things.includes('')) {
            let color = prompt('What is your favorite color?');
            p.style = 'background-color:'+color;
        }
    } else {
        title;
    }
});

h1.className = 'text-center';
p.classList.add('col-sm-8', 'col-sm-offset-2');
p.style.textAlign = 'justify';

//