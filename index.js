const http = require('http')
const express = require('express')

const app=express()



app.get('/test1',(request,response)=>{
    
    console.log(request.params)
	response.send('Hellow World')
})

app.get('/calculate/:num1/:num2/:oper',(request,response)=>{


    var x=calculate(Number(request.params.num1),Number(request.params.num2),request.params.oper)
    console.log(x)
    response.send(x.toString())
	//response.send(request.params)



})


function calculate(num1,num2,oper) {
   
	if(oper=='add')
		return num1+num2*5;
    else if(oper=='sub')
		return num1-num2;
	else if(oper=='mod')
		return num1%num2;
	else if(oper=='mul')
		return num1*num2;
	else if(oper=='div')
		return num1/num2;
	else
		return -1;

	
} 

app.listen(3000,()=>{
	console.log('Application listening at port 3000')
})

