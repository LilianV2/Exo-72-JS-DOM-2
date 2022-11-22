

let containers = document.getElementsByClassName('name-tag');

let newDiv = document.createElement('p');
newDiv = "HELLO WORLD";

for(let i = 0; i <= containers.length; i++){
    if (i >= 0) {
        containers[i].innerHTML = newDiv;
    }
    else {
        alert('bonsoir');
    }
}









