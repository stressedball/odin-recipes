const hiddenMenu = document.querySelector('.attentionMessage');
mouseMenu = document.addEventListener('mouseover', showingMenu);
mouseMenuOut = document.addEventListener('mouseout', hidingMenu);
const recipes = document.querySelector('.recipes');

function showingMenu(activate) {

    if(activate.target === hiddenMenu) {
        const lasagna = document.createElement('div');
        lasagna.className = 'singleRecipe';
        lasagna.textContent = "LASAGNE";
        stylingSingleRecipe(lasagna);
        recipes.appendChild(lasagna);
    
        const tajine = document.createElement('div');
        tajine.className = 'singleRecipe';
        tajine.textContent = 'TAJINE';
        stylingSingleRecipe(tajine);
        recipes.appendChild(tajine);
    
        const cake = document.createElement('div');
        cake.className = 'singleRecipe';
        cake.textContent = 'CAKE';
        stylingSingleRecipe(cake);
        cake.style.borderBottomRightRadius = '5px';
        recipes.appendChild(cake);

        hiddenMenu.style.borderBottomRightRadius = 0;




        let pos = 0;
        clearInterval(id);  
        id = setInterval(frame, 10);
        function frame() {
            if (pos === 312) {
                clearInterval(id);
            } else {
                pos++;
                tajine.style.right = pos + 'px';
            }
        }  

    }
}

function hidingMenu() {
    const notHidden = document.querySelectorAll('.singleRecipe');
    if (notHidden === null) {
        return;
    } else {
        for (i = 0; i < notHidden.length; i++) {
            notHidden[i].parentElement.removeChild(notHidden[i]);
            hiddenMenu.style.borderBottomRightRadius = '5px';
        }   
    }     
}

function stylingSingleRecipe (food) {

    food.style.backgroundColor = '#ff914d';
    food.style.color = '#5e5962';
    food.style.fontSize = '20px';
    food.style.padding = '5px';
    food.style.paddingRight = '20px';
    food.style.paddingLeft = '60px';
    return food;
}

let id = null;
function pleaseMove(wontyou) {

 
}

