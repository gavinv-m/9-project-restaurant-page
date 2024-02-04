const omelette =  () => {

    const omeletteContainer = document.createElement('div');

    const omeletteImage = document.createElement('img');
    omeletteImage.setAttribute('src', '../src/assets/images/the-bear-omelette.jpg');
    omeletteImage.setAttribute('alt', 'Two people having a meal with omelette and juice');

    const omeletteParagraph = document.createElement('p');
    omeletteParagraph.textContent = `A classic French omelette with a twist, 
                                    filled with creamy Boursin cheese and garnished 
                                    with chopped chives and sour cream and onion potato`; 


    omeletteContainer.appendChild(omeletteImage);
    omeletteContainer.appendChild(omeletteParagraph);

    return omeletteContainer;
}; 


const focaccia =  () => {

    const focacciaContainer = document.createElement('div'); 

    const focacciaImage = document.createElement('img');
    focacciaImage.setAttribute('src', '../src/assets/images/focaccia-the-bear.jpeg'); 
    focacciaImage.setAttribute('alt', 'Person holding tray with focaccia and other dishes'); 

    const focacciaParagraph = document.createElement('p');
    focacciaParagraph.textContent = `A large, beautifully baked focaccia bread served with 
                                    various accompaniments of meats and vegetables, 
                                    reflecting the Berzatto’s Italian heritage`; 
    
    focacciaContainer.appendChild(focacciaImage); 
    focacciaContainer.appendChild(focacciaParagraph);

    return focacciaContainer; 
}; 


const sevenFishes = () => {

    const sevenFishesContainer = document.createElement('div'); 

    const sevenFishesImage = document.createElement('img');
    sevenFishesImage.setAttribute('src', '../src/assets/images/the-bear-seven-fishes.jpg');
    sevenFishesImage.setAttribute('alt', 'Plate with seafood items in yellow-orange sauce');


    const sevenFishesParagraph = document.createElement('p');
    sevenFishesParagraph.textContent = ` A traditional Italian-American Christmas meal, 
                                         featuring seven different types of fish and seafood, 
                                         prepared with love and served amidst family feuds 
                                         and chaos`; 

    sevenFishesContainer.appendChild(sevenFishesImage);
    sevenFishesContainer.appendChild(sevenFishesParagraph);

    return sevenFishesContainer;
}; 


const bucatini =  () => {

    const bucatiniContainer = document.createElement('div'); 

    const bucatiniImage = document.createElement('img');
    bucatiniImage.setAttribute('src', '../src/assets/images/bucatini.jpg');
    bucatiniImage.setAttribute('alt', 'Close-up of pasta with cream sauce and cheese');
    
    const bucatiniParagraph = document.createElement('p');
    bucatiniParagraph.textContent = `A thick spaghetti with a thin hole in the middle, 
                                      served in a cream sauce, potentially with meat or seafood`;


    bucatiniContainer.appendChild(bucatiniImage);
    bucatiniContainer.appendChild(bucatiniParagraph);

    return bucatiniContainer;
                                      
                                      
}; 



const cherryDonut = () => {

    const cherryDonutContainer = document.createElement('div'); 

    const cherryDonutImage = document.createElement('img');
    cherryDonutImage.setAttribute('src', '../src/assets/images/the-bear-cherry-donut.jpg'); 
    cherryDonutImage.setAttribute('alt', 'Small bowl with fried food item on metal tray'); 

    const cherryDonutParagraph = document.createElement('p'); 
    cherryDonutParagraph.textContent = `A deconstructed version of the cherry donut that 
                                        Marcus was perfecting in the first season, 
                                        a symbol of his diligence and passion.`; 

    cherryDonutContainer.appendChild(cherryDonutImage);
    cherryDonutContainer.appendChild(cherryDonutParagraph);

    return cherryDonutContainer;
}; 


const chocolateCake = () => {

    const chocolateCakeContainer = document.createElement('div'); 

    const chocolateCakeImage = document.createElement('img');
    chocolateCakeImage.setAttribute('src', '../src/assets/images/chocolate-cake.jpg');
    chocolateCakeImage.setAttribute('alt', 'Person serving slice of chocolate cake onto plate');

    const chocolateCakeParagraph = document.createElement('p');
    chocolateCakeParagraph.textContent = `A layered chocolate cake that has become an 
                                          object of admiration, featuring an airy chocolate 
                                          mousse filling, cocoa-forward frosting, and moist 
                                          layers of rich and fudgy chocolate cake`; 

    chocolateCakeContainer.appendChild(chocolateCakeImage);
    chocolateCakeContainer.appendChild(chocolateCakeParagraph);

    return chocolateCakeContainer;

}; 

function images() {
    
     const menuContainer = document.createElement('div');
     menuContainer.classList.add('menu-container'); 

     menuContainer.appendChild(omelette());
     menuContainer.appendChild(focaccia());
     menuContainer.appendChild(sevenFishes());
     menuContainer.appendChild(bucatini());
     menuContainer.appendChild(cherryDonut());
     menuContainer.appendChild(chocolateCake());

     let children = menuContainer.children; 
     let numberOfChildren = children.length;
     
     for (let i = 0; i < numberOfChildren; i++) {

        children[i].classList.add('menu-item');
     }

     return menuContainer;


}


export default function() {

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('our-menu');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    descriptionContainer.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Welcome to "The Berf", where
                            the wilderness meets culinary delight! 
                            Our menu is inspired by the TV series 
                            “The Bear”, 
                            <br> <div style='text-align:center;'> offering a unique dining 
                            experience that brings the show's charm to your plate.</div>`; 
    
    descriptionContainer.appendChild(paragraph);

    const menuItemsContainer = images();

    const packageToExport = document.createElement('div');
    packageToExport.classList.add('menu-section');
    packageToExport.appendChild(descriptionContainer);
    packageToExport.appendChild(menuItemsContainer);
    
    return packageToExport;

}