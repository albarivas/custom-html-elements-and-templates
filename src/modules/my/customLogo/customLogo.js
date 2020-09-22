import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api backgroundColor;
    @api companyName;

    connectedCallback() {
        const span = document.createElement('span');
        span.setAttribute(
            'style',
            `background-color:${this.backgroundColor}; color:white; padding:10px; font-size:40px;`
        );
        span.innerText = this.companyName;
        this.template.appendChild(span);
    }
}
