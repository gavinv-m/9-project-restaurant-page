const createImageSection = () => {

    const aboutUsImagesContainer = document.createElement('div');
    aboutUsImagesContainer.classList.add('about-images'); 

    const risotto = document.createElement('img');
    risotto.setAttribute('src', '../src/assets/images/cola-braised-ribs.jpeg');
    risotto.setAttribute('alt', 'A plate of pork braised in cola, served over risotto, with vegetables and a glass of dark liquid.');
    aboutUsImagesContainer.appendChild(risotto); 

    const carmSyd = document.createElement('img');
    carmSyd.setAttribute('src', '../src/assets/images/carmy-syd.jpg');
    carmSyd.setAttribute('alt', 'People working in a busy kitchen, with stacks of plates in the foreground and an oven in the background.'); 
    aboutUsImagesContainer.appendChild(carmSyd); 
    
    const carmTina = document.createElement('img');
    carmTina.setAttribute('src', '../src/assets/images/carmy-tina.jpeg');
    carmTina.setAttribute('alt', 'Two chefs preparing dough in a commercial kitchen.');
    aboutUsImagesContainer.appendChild(carmTina);

    return aboutUsImagesContainer; 
}


const createTextSection = () => {

    const textContainer = document.createElement('div');
    textContainer.classList.add('about-text');

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    textContainer.appendChild(heading); 

    const horizontalLine = document.createElement('hr');
    textContainer.appendChild(horizontalLine);

    const paragraph = document.createElement('p');

    paragraph.innerHTML = `Welcome to “The Bear’s Den”, a unique dining experience nestled 
                  in the heart of the wilderness. Our restaurant was born out of 
                  a love for nature and a passion for food. <br>
                  We believe in the magic of a meal enjoyed in the great outdoors, 
                  under the canopy of the forest, surrounded by the sounds of the wild.
                  <br><br>
                  Our menu is a celebration of the forest’s bounty, featuring dishes 
                  crafted with the freshest ingredients sourced from the wilderness itself. 
                  <br><br>Each dish tells a story of the forest, its seasons, and its inhabitants.

                  At “The Bear’s Den”, we strive to create more than just a meal. 
                  We offer an adventure, a journey through the wilderness, a taste of 
                  the wild that stays with you long after you’ve left our tables.`;

    textContainer.appendChild(paragraph); 


    const btn = document.createElement('button');
    btn.classList.add('learn-more');
    btn.textContent = 'Learn More';
    textContainer.appendChild(btn); 


    return textContainer;
}


export default function() {

    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    aboutSection.appendChild(createImageSection());
    aboutSection.appendChild(createTextSection());

    console.log('I hope I work');
    return aboutSection;

}