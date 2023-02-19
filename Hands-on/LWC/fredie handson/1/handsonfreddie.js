import { LightningElement } from 'lwc';

export default class Handsonfreddie extends LightningElement {
    name;
   
    bir(event){
        this.name=event.target.value;
    }
    button(){
        alert("enter a text");
        
    }

}