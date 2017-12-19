export class Contact{
    id:number;
    fullname:String;
    email:String;
    subject:String;
    phone:number;
    message:String;

constructor(fullname,email,subject,phone,message){
    this.fullname=fullname;
    this.email=email;
    this.subject=subject;
    this.phone=phone;
    this.message=message;
}

}
