namespace FCBapi.Models {
   public class PersonModel {
      public string LastName { get; set; } = "";
      public string FirstName { get; set; }= "";
      public string ZipCode { get; set; } = "";

      public PersonModel() { }

      public PersonModel(string lastName, string firstName, string zipCode)
      {
         LastName = lastName;
         FirstName = firstName;
         ZipCode = zipCode;
      }
   }
}
