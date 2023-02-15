import { LightningElement, wire, track } from 'lwc';

import retrive from "@salesforce/apex/accountlwc.retrive";


export default class Accountlwc extends LightningElement {

    inputs;


    //wire 
    // parametreli wire
    @wire (retrive,{acc:'$inputs'}) accounts;
    renderedCallback(){
        console.log(this.accounts);
      }

    handin(e){
this.inputs=e.target.value;
console.log(this.inputs); 

    }
  
    /*
    // parametresiz wire
@wire (retrive) accounts;


@track mua;

connectedCallback(){
    //imperative
retrive()
.then(data=>{
    this.mua=data;
})

.catch(err=>{
    console.log(err);
})
}
*/

}