import { LightningElement, api } from 'lwc';

export default class Handsonfreddie2 extends LightningElement {
    @api rec;
    @api objectApiName;
    fields=["AccountId","Name","Phone"];
}