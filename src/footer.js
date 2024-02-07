const left = () => {

    const leftToReturn = document.createElement('div');

    const heading = document.createElement('h1');
    heading.classList.add('footer-heading');
    heading.textContent = 'The Berf';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `Welcome to “The Bear’s Den”, where we offer a unique dining experience that goes beyond just a meal. 
                           Our menu features <br>dishes crafted with the freshest ingredients, <br>each telling a story of its own.`;

    leftToReturn.appendChild(heading);
    leftToReturn.appendChild(paragraph);

    return leftToReturn; 
}


const middle = () => {

    const middleToReturn = document.createElement('div');

    const heading = document.createElement('h1');
    heading.classList.add('footer-heading');
    heading.textContent = 'Contact';
    middleToReturn.appendChild(heading);


    const information = document.createElement('div');
    information.classList.add('information');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent ='Tel: +1 555-0100';
    information.appendChild(phoneNumber);


    const hours = document.createElement('p');
    hours.innerHTML = `Mon-Sat: 10am - 4pm<br>
                         Sun: Closed`;
    information.appendChild(hours);


    const address = document.createElement('p');
    address.innerHTML = `Address: 666 N Orleans St, Chicago, IL <br>60654`;
    information.appendChild(address);

    middleToReturn.appendChild(information);
    return middleToReturn;

}


const right = () => {

    const rightToReturn = document.createElement('div');

    const heading = document.createElement('h1');
    heading.classList.add('footer-heading');
    heading.textContent = 'Subscribe';

    const emailAndBtn = document.createElement('div');
    emailAndBtn.classList.add('emailAndBtn');

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Email'); 
    emailAndBtn.appendChild(email);

    
    const subscribeBtn = document.createElement('button')
    subscribeBtn.textContent = 'Subscribe';
    emailAndBtn.appendChild(subscribeBtn);

    rightToReturn.appendChild(heading);
    rightToReturn.appendChild(emailAndBtn);

    return rightToReturn;


}


export default function() {

    const packageToExport = document.createElement('div');
    packageToExport.classList.add('footer');

    packageToExport.appendChild(left());
    packageToExport.appendChild(middle());
    packageToExport.appendChild(right());

    return packageToExport;
}