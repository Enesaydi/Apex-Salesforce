public class firstclass {
    public static string name;
    
    public static void setcome(string cd){
        cd=name;
    }
    public static string getcome(){
        return name;
    }
    
     public static void come(){
        if(string.isNotBlank(name)){
            system.debug('hello dear ' + name);}else{
            system.debug('hii');
        }    } 
    
}