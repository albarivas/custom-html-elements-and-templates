import { createElement } from 'lwc';
import CustomLogo from 'my/customLogo';
import CustomLogoWithTemplate from 'my/customLogoWithTemplate';

// NO TEMPLATE
const h1 = document.createElement('h1');
h1.innerText = 'LWC - No template';

const el1 = createElement('custom-logo', {
    is: CustomLogo
});
el1.companyName = 'SalesforceDevs';
el1.backgroundColor = '#009EDB';

document.querySelector('body').appendChild(h1);
document.querySelector('body').appendChild(el1);

// TEMPLATE
const h1Template = document.createElement('h1');
h1Template.innerText = 'LWC - Template';

const el2 = createElement('custom-logo-with-template', {
    is: CustomLogo
});

el2.companyName = 'SalesforceDevs';
el2.backgroundColor = '#009EDB';

document.querySelector('body').appendChild(h1Template);
document.querySelector('body').appendChild(el2);
