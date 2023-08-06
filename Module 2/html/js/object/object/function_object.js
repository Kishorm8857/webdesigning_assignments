const student= {
    fname:"Kishor",
    lname:"Mani",
    age:19,
    fullname: function()
    {
        console.log("student full name is :", this.fname +""+ this.lname);
        console.log(`student first name is ${this.fname} last name is ${this.lname} and he is ${this.age} years old`)
    }
};
student.fullname()