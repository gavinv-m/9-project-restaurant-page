function createForm() {

    const form = document.createElement('form');

    const contactData = document.createElement('div');
    contactData.classList.add('contact-data');

    const textAndBtn = document.createElement('div');
    textAndBtn.classList.add('text-and-button');

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Name');
    contactData.appendChild(name);


    const lastName = document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('placeholder', 'Last Name');
    contactData.appendChild(lastName);


    const phoneNumber = document.createElement('input');
    phoneNumber.setAttribute('type', 'text');
    phoneNumber.setAttribute('placeholder', 'Phone Number');
    contactData.appendChild(phoneNumber);


    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'Email');
    contactData.appendChild(email);


    const text = document.createElement('textarea');
    text.setAttribute('type', 'textarea');
    text.setAttribute('placeholder', 'Text');
    textAndBtn.appendChild(text);


    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    textAndBtn.appendChild(sendBtn);

    form.appendChild(contactData);
    form.appendChild(textAndBtn);

    return form;
}


export default function() {

    const packageToExport = document.createElement('div');
    packageToExport.classList.add('container');

    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-form');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    contactForm.appendChild(heading);

    const form = createForm();
    contactForm.appendChild(form);

    packageToExport.appendChild(contactForm);

    return packageToExport;



}