class Customer{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

}
