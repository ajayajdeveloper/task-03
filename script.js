//creating html elements with dom 

const divElem1 = document.createElement("div");
divElem1.setAttribute("class","calculator-grid")

var input1 = document.createElement("input");
input1.setAttribute('type','text')
input1.setAttribute('id','text')

const btn1 = document.createElement("input");
btn1.setAttribute("type","button")
btn1.setAttribute("value",'1')
btn1.setAttribute("onClick","action(value)")

const btn2 = document.createElement("input");
btn2.setAttribute("type","button")
btn2.setAttribute("value",'2')
btn2.setAttribute("onClick","action(value)");

const btn3 = document.createElement("input");
btn3.setAttribute("type","button")
btn3.setAttribute("value",'3')
btn3.setAttribute("onClick","action(value)");


const btn4 = document.createElement("input");
btn4.setAttribute("type","button")
btn4.setAttribute("value",'4')
btn4.setAttribute("onClick","action(value)");


const btn5 = document.createElement("input");
btn5.setAttribute("type","button")
btn5.setAttribute("value",'5')
btn5.setAttribute("onClick","action(value)");

const btn6= document.createElement("input");
btn6.setAttribute("type","button")
btn6.setAttribute("value",'6')
btn6.setAttribute("onClick","action(value)");

const btn7 = document.createElement("input");
btn7.setAttribute("type","button")
btn7.setAttribute("value",'7')
btn7.setAttribute("onClick","action(value)");

const btn8 = document.createElement("input");
btn8.setAttribute("type","button")
btn8.setAttribute("value",'8')
btn8.setAttribute("onClick","action(value)");

const btn9 = document.createElement("input");
btn9.setAttribute("type","button")
btn9.setAttribute("value",'9')
btn9.setAttribute("onClick","action(value)");

const btn10 = document.createElement("input");
btn10.setAttribute("type","button")
btn10.setAttribute("value",'+')
btn10.setAttribute("onClick","action(value)");


const btn11 = document.createElement("input");
btn11.setAttribute("type","button")
btn11.setAttribute("value",'-')
btn11.setAttribute("onClick","action(value)");



const btn12 = document.createElement("input");
btn12.setAttribute("type","button")
btn12.setAttribute("value",'*')
btn12.setAttribute("onClick","action(value)");


const btn13 = document.createElement("input");
btn13.setAttribute("type","button")
btn13.setAttribute("value",'÷')
btn13.setAttribute("onClick","action(value)");



const btn14 = document.createElement("input");
btn14.setAttribute("type","button")
btn14.setAttribute("value",'.')
btn14.setAttribute("onClick","action(value)");


const btn15 = document.createElement("input");
btn15.setAttribute("class",'span-two')
btn15.setAttribute("type","button")
btn15.setAttribute("value",'Ac')
btn15.setAttribute("onClick","allClear(value)");


const btn16= document.createElement("input");
btn16.setAttribute("class",'span-two')
btn16.setAttribute("type","button")
btn16.setAttribute("value",'Del')
btn16.setAttribute("onClick","del(value)");


const btn17 = document.createElement("input");
btn17.setAttribute("class",'span-two')
btn17.setAttribute("type","button")
btn17.setAttribute("value",'=')
btn17.setAttribute("onClick","equal(value)");

const btn18 = document.createElement("input");
btn18.setAttribute("type","button")
btn18.setAttribute("value",'0')
btn18.setAttribute("onClick","action(value)");

const btn19 = document.createElement("input");
btn19.setAttribute("type","button")
btn19.setAttribute("value",'(')
btn19.setAttribute("onClick","action(value)");

const btn20= document.createElement("input");
btn20.setAttribute("type","button")
btn20.setAttribute("value",')')
btn20.setAttribute("onClick","action(value)");


const btn21= document.createElement("input");
btn21.setAttribute("type","button")
btn21.setAttribute("value",'%')
btn21.setAttribute("onClick","action(value)");


//appending created element to div-elem
divElem1.append(input1,btn15,btn16,btn1,btn2,btn3,btn13,btn4,btn5,btn6,btn12,btn7,btn8,btn9,btn10,btn11,btn18,btn14,btn21,btn19,btn20,btn17)

document.body.appendChild(divElem1);


//to get the input value

function action(num){
   var numbers =  document.getElementById("text")

   numbers.value+=num;
   
   
}


//to clear the value in the input box

function allClear(){
   var clear = document.querySelector("#text").value ="";
  
}

// to create a backspace 
function del(){
   var dele = document.querySelector("#text");
   dele.value = dele.value.substring(0, dele.value.length - 1);

}


// to get the final calculations 

function equal(){
   
   var result = document.querySelector("#text").value;
   var ans = eval(result);
   document.querySelector("#text").value=ans;
   

}















