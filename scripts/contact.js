// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function thankYouMessage(){
    
    const contactPage = document.getElementById('contact-page');
    const thankTheCustomer = document.createElement('p');
    
    
    thankTheCustomer.style.fontSize = '24px';
    thankTheCustomer.textContent = 'Thank you for your message';

    contactPage.innerHTML = '';
    contactPage.appendChild(thankTheCustomer);

}



document.getElementById('submit-button').addEventListener('click', function(){
    document.getElementById('submit-button').addEventListener('click', function () {
    thankYouMessage();

    });
});
