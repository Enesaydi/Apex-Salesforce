import { LightningElement,wire } from 'lwc';


import {
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
  MessageContext
} from 'lightning/messageService';

import mc from '@salesforce/messageChannel/mc__c'; // mc.messageChannel-meta.xml


export default class MessageSubscriber extends LightningElement {
 
  datareceived;

  @wire(MessageContext)
    messageContext;


    subscribeToMessageChannel() {
      if (!this.subscription) {
          this.subscription = subscribe(
              this.messageContext,
              mc,
              (mes) => this.handleMessage(mes),
              { scope: APPLICATION_SCOPE }
          );
      }
  }


// Handler for message received by component
handleMessage(mes) {
  console.log('message received ');
  console.log(mes);


  this.datareceived = mes.recordId;

}


unsubscribeToMessageChannel() {
  unsubscribe(this.subscription);
  this.subscription = null;
}



connectedCallback() {

    
  this.subscribeToMessageChannel();


   
}


disconnectedCallback() {
  this.unsubscribeToMessageChannel();
}





}