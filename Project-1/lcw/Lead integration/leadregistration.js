import { LightningElement } from 'lwc';

export default class Leadregistration extends LightningElement {
    singlel={
        FirstName:'',
        Lastname:'',
        Phone:'',
        Email:'',
        Country:'',
        Info_Session_Date_Time__c:null
    };

    onchang(event){
        console.log(event.target.name);

        switch (event.target.name) {
            case 'FirstName':
                this.singlel.FirstName=event.target.value;
                break;
                case 'Lastname':
                    this.singlel.Lastname=event.target.value;
                    break;
                    case 'Phone':
                        this.singlel.Phone=event.target.value;
                        break;
                        case 'Email':
                            this.singlel.Email=event.target.value;
                            break;
                            case 'Country':
                                this.singlel.Country=event.target.value;
                                break;
                                case 'Info_Session_Date_Time__c':
                                    this.singlel.Info_Session_Date_Time__c=event.target.value;
                                    break;
        
            default:
                console.log(defaolt)
        }
        console.log(this.singlel)

    }
}