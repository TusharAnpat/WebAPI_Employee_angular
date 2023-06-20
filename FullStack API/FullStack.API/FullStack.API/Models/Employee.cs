namespace FullStack.API.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public long phone { get; set; }
        public long salary { get; set; }
        public string Department { get; set; }
    }
}
