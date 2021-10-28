let request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload =()=>{
    let data = JSON.parse(request.response);
    console.log(data);
    for (let i in data){
        console.log(data[i].name.official+ "-" + data[i].region);
        }
}

let arr =[1,2,3,4,5];
let res = arr.map((element)=>(element*3));
console.log(res);

//********************** */
let student =[{
    name: 'alice',
    marks: 60},
    {
    name: 'bob',
    marks: 80},
    {
    name: 'mark',
    marks: 90}];


let res =student.filter((ele)=>marks>60);
    console.log(res.map((ele)=>marks.name));

//*********************** */
let request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=()=>{
    let data = JSON.parse(request.response);
    let res =data.filter((ele)=>ele.population<100000);
    console.log(res);
}
//****************** */
let arr =['h','e','l','l','o']
//let res= [...arr];
console.log(...arr)
//******************** */
let arr = [1,2,3,4,5]
let res =function(n1,n2,n3,n4,n5){
    console.log(n1+n2+n3+n4+n5);
}
res(...arr);
//------------------------

