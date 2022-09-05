const PESSOA ={
    firstName:"Daniel",
    lastName:"Costa",
    age:22,
    id:002,
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    },
    getAge:function(){
        return this.age;
    }

}
console.log(PESSOA.fullName());
console.log(PESSOA.getAge());