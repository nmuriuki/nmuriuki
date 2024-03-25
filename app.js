//Data types //single line comment
/*
1.string
 2.intergers/numbers
  3.Booleans:yes/no 
  4. arrays/list
  5.objects/dictionary
*/ //multiline comment
let name ="Mike"
let height =50
//onclick event
//element selector
function submit(){
    var input=document.getElementById("inputfield").value;
    var input =input+1
    var input= parseInt(input)//data type conversion string that is a number to interger

}
let adult =true;//boolean data type
let fruits =['mango','apple','pawpaw','orange',30,false]// an array/list
let person={
     Firstname : 'Ada',
     Lastname :'Loveless',
     age:'18',
     address:{
        country:'Nigeria',
        City:'Lagos',
        place:'ibadan'
     },
     children:['KELLY','Angela']
}
function saveItem(){
    var input =document.getElementById("inputField").value
    localStorage,setitem('inputField',Item);
    showWelcomeMessage(input)
}
function showWelcomeMessage(input){
    var messsageElement =document.getElementById("showMessage")
    messsageElement.textContent="We have save your input as" + input;
}
var storedItem =localStorage.getItem('inputField'):
if(storedItem){
    showWelcomeMessage(storedItem)
}
