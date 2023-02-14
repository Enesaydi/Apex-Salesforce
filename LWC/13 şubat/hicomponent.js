import { LightningElement, track } from 'lwc';

export default class Hicomponent extends LightningElement {
    //es6 ve sonrası
    cardbody='this is my first Lwc';
   @track cardtext={              //track a dikkat koymazsak sadece consol da değişir.
        footerText : 'Cohort 3',
        titleText : 'Track Decorator Example'
    }
    
    titlechange(){
        console.log(this.cardtext.titleText);
        this.cardtext.titleText='button clicked';
        console.log(this.cardtext.titleText);
    }
}