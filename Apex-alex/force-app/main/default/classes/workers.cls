public class workers {  // outer Class - Wrapper Class
    
    // INNER CLASS
    
    public class course{
        // property
        public String name;
        public Integer session;
        public Integer studentNum;
        
        // method
        // Constructor Method
           public course(String courseName){
           name= courseName;
           }}
    public string name;
    public decimal expense=0;
    public integer hours=0;
    decimal income=0;
    
    public static integer totalhours=0;
 public static decimal totalexpense=0;
    public static decimal totalincome=0;
    
           public workers (string workersname){
  system.debug('constructo method is ok: + ');
        name=workersname;    }
    
    public void tekharcama(decimal miktar){
        totalexpense+=miktar;   expense+=miktar;}
      public void tekincome(decimal mikta){
        totalincome+=mikta;  income+=mikta;}
    public void teksaat(integer saat){
       hours+=saat;  totalhours+=saat;   }
    
   public decimal tekincame(){
        return income;}
}