import { LightningElement , api} from 'lwc';

import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
import Email from '@salesforce/schema/Contact.Email';


export default class Contactlwc extends LightningElement {

    fields= [FirstName, LastName,Phone ,Email];
    @api recordId;
    @api objectApiName;
}