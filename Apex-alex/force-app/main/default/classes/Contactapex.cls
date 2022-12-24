public class Contactapex {
    public static void getload(string depart,string saluta){
list<contact> mcontact=[SELECT Id, Name, OtherCountry, Title, Email, FirstName, LastName, AccountId 
                        FROM Contact where Department=:depart and Salutation=:saluta];

system.debug(mcontact.size());

for(contact scontact:mcontact){system.debug(scontact.Name+' -- '+scontact.Email);}
    }
}