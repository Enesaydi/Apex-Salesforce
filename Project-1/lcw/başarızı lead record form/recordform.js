import { LightningElement,api } from 'lwc';
import FirstName from '@salesforce/schema/Lead.FirstName';
import LastName from '@salesforce/schema/Lead.LastName';
import Phone from '@salesforce/schema/Lead.Phone';
import Email from '@salesforce/schema/Lead.Email';
import Country from '@salesforce/schema/Lead.Country';
import Info_Session_Date_Time__c from '@salesforce/schema/Lead.Info_Session_Date_Time__c';

export default class Recordform extends LightningElement {
    fields= [FirstName, LastName, Phone , Email, Country, Info_Session_Date_Time__c];
    @api recordId;
    @api objectApiName;

   
}