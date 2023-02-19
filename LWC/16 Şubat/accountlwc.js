import { LightningElement, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import retrive from "@salesforce/apex/accountlwc.retrive";

const columns = [
    { label: 'Company Name', fieldName: 'Name' },
    { label: 'Website', fieldName: 'Website', type: 'url' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry' },
   
  ];

export default class Accountlwc extends LightningElement {

@track mua;
inputs;
columns=columns;

handin(e){
    this.inputs=e.target.value;
    console.log(this.inputs); 
    


  // imperative
  retrive({
    acc:this.inputs
  })
  .then(data=>{
    console.log('retrieved Accounts');
    console.log(data);
  this.mua=data;
  const event = new ShowToastEvent({
    title: 'Success!',
    message: 'Record {0} created! See it {1}!',
    variant:'success',
    mode:'dismisable'
        });
this.dispatchEvent(event);


  })
  .catch(err=>{
    console.log(err);
  });
}
  connectedCallback(){
    console.log('connected callback is running');
   
   }

}







