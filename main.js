var ch="Test";
console.log(ch);
const objName=new Object()
const objName2={} //object literal syntex

const objNamePer={
    firtName:'jobin',
    Lastname:'j',
    age:37,
    isalive:true,
    // fullname:function (){
    //    //return this.firtName+' '+this.Lastname
    //    return `${this.firtName} ${this.Lastname}`
    //     //console.log(this.firtName+this.Lastname)
    // }
    fullname (){
       
        return `${this.firtName} ${this.Lastname}`
        
     }


}

const Permethod={
    yearofBirth(){
        return new Date().getFullYear()-this.age
    }
}
//object merging
Object.assign(objNamePer,Permethod)
//object cloning 
const objcopied=Object.assign({},objNamePer)
//Spred operter is used for copy the object
const finobj={...objNamePer,...Permethod}
//objNamePer.firtName='Anbu'
objNamePer.age=42
console.log(Permethod.yearofBirth())
document.getElementById('Result').innerHTML=objNamePer.firtName

//Object detructuring
 
const {firtName,Lastname}=objNamePer
console.log(firtName,Lastname)