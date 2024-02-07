import about from './about.js'; 
import menu from './menu.js';
import contact from './contact.js';
import './style.css';


function createEventListener() {

    const navigationButtons = document.querySelectorAll('.navigation-button');

    navigationButtons.forEach((button) => {

        button.addEventListener('click', (event) => {

            let functionToCall = event.target.innerText.toLowerCase();
            updateScreen(functionToCall);
        });
    });

    updateScreen();
}


function updateScreen(tabName = 'contact') {

    const functionObject = {

        'menu': menu,
        'about': about,
        'contact': contact
    };

    const content = document.getElementById('content');

    while (content.firstChild && tabName !== 'reservations') {

        content.removeChild(content.firstChild);
    }
    console.log(tabName);

    if (tabName === 'home') {

        const img = document.createElement('img');
        img.setAttribute('src', '../src/assets/images/omelette.jpg');
        img.setAttribute('alt', 'Fluffy omelette garnished with herbs and potato chips');
        content.appendChild(img);

        const welcomeSection = document.createElement('div');
        welcomeSection.classList.add('welcome-section');

        const welcomeHeading = document.createElement('h1');
        welcomeHeading.classList.add('welcome-heading');
        welcomeHeading.textContent = 'WELCOME'; 
        welcomeSection.appendChild(welcomeHeading);

        const reserveButton = document.createElement('button');
        reserveButton.textContent = 'Reserve';
        welcomeSection.appendChild(reserveButton); 

        content.appendChild(welcomeSection);       
    }

    else {

        let functionToCall = functionObject[tabName];
        let divToAppend =  functionToCall();
        content.appendChild(divToAppend);
    }
}


createEventListener();