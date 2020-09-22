import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api backgroundColor;
    @api companyName;

    get spanStyle() {
        return `background-color:${this.backgroundColor}; color:white; padding:10px; font-size:40px;`;
    }
}
