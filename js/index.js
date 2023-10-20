document.addEventListener('DOMContentLoaded', () =>{
    const about = document.getElementById('about');
    const portfolio = document.getElementById('portfolio');
    const contacts = document.getElementById('contacts');

    const pageAbout = document.querySelector('.About');
    const pagePortfolio = document.querySelector('.Portfolio')
    const pageContacts = document.querySelector('.Contants')

    about.addEventListener('click', function() {
        if(!pageAbout.classList.contains('Page-visible')){
            about.classList.add('header__item-selected')
            portfolio.classList.remove('header__item-selected')
            contacts.classList.remove('header__item-selected')

            pageAbout.classList.add('Page-visible')
            pagePortfolio.classList.remove('Page-visible')
            pageContacts.classList.remove('Page-visible')
        }
    })

    portfolio.addEventListener('click', function() {
        if(!pagePortfolio.classList.contains('Page-visible')){
            portfolio.classList.add('header__item-selected')
            about.classList.remove('header__item-selected')
            contacts.classList.remove('header__item-selected')

            pagePortfolio.classList.add('Page-visible')
            pageAbout.classList.remove('Page-visible')
            pageContacts.classList.remove('Page-visible')
        }
    })

    contacts.addEventListener('click', function() {
        if(!pageContacts.classList.contains('Page-visible')){
            contacts.classList.add('header__item-selected')
            about.classList.remove('header__item-selected')
            portfolio.classList.remove('header__item-selected')

            pageContacts.classList.add('Page-visible')
            pageAbout.classList.remove('Page-visible')
            pagePortfolio.classList.remove('Page-visible')
        }
    })
});