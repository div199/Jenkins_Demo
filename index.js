const http = require('http')
const express = require('express')
//const bodyParser=require('body-parser')
//app.use(express.bodyParser());

const app=express();



app.post('/test1',function(request,response){
    
    console.log(request);
	response.send('Hellow World');
})

app.get('/calculate/:num1/:num2/:oper',(request,response)=>{


   var x=calculate(Number(request.params.num1),Number(request.params.num2),request.params.oper)
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

app.listen(4500,function(){
	console.log('Application listening at port 4500');
})

