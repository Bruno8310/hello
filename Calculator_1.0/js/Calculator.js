     var a=false;
	 //console.log(typeof a);
				
	function input(x){
			var str=document.getElementById("result").value;
			var str1=document.getElementById("result1").value;
			if(str.indexOf("=")>0)
		{
			document.getElementById("result").value='';
			document.getElementById("result1").value='0';
			str1=document.getElementById("result1").value;
		}
		if(str1=="0")
		{
			str1='';
		}
		if(x!='.'){
		str1=str1+String(x);}
		else{
			str1=str1+'.';
		}
		document.getElementById("result1").value=str1;
		a=false;
		}
			
	function input_calcu1(x){
			var str=document.getElementById("result").value;
			var str1=document.getElementById("result1").value;
			if(str.indexOf("=")>0)
		{
			document.getElementById("result").value='';
			document.getElementById("result1").value='0';
			str1=document.getElementById("result1").value;
		}
		if(str1=="0")
		{
			str1='';
		}
			
			switch(x){
					 case 'sin':str1+=String("sin(");break;
				     case 'cos':str1+=String("cos(");break;
				     case 'tan':str1+=String("tan(");break;			
			   
			}
			document.getElementById("result1").value=str1;
			a=true;
		}
		
	function input_calcu3(x){
			if(a==true)
			{
				return ;
			}
			var str=document.getElementById("result").value;
			var str1=document.getElementById("result1").value;
			if(str.indexOf("=")>0)
             {
	          document.getElementById("result").value="";
	          //document.getElementById("result1").value='0';
	          str1=document.getElementById("result1").value;
             }
		if(str1=='')
		{
			str1='0';
		}
		switch(x)
		{
			case '+':str1+='+';break;
			
			case '*':str1+='*';break;
			case '/':str1+='/';break;
		    case '%':str1+=String('%');break;
		    case '√':if(str1=='0'){str1="√";}
			else
		    {str1+=String('√');}
			break;	
			
		}
		document.getElementById("result1").value=str1;
		a=true;
		}
	
	function input_calcu2(){
		var str=document.getElementById("result").value;
		var str1=document.getElementById("result1").value;
		if(str.indexOf("=")>0){
			document.getElementById("result")='';
			str1=document.getElementById("result1").value+'-';
		}
		else{
			str1+='-';
		}
		document.getElementById("result1").value=str1;
	}
		
	function AC(){
			document.getElementById("result").value="";
			document.getElementById("result1").value='0';
		}
	
	function Del(){
			var str=document.getElementById("result").value;
			var str1=document.getElementById("result1").value;
			if(str.indexOf("=")>0||str1=='')
			{
				return ;
			}
			var str2=str1.substr(0,(str1.length)-1);
			document.getElementById("result1").value=str2;
		}
		
	function equal(){
			var str1=document.getElementById("result1").value;
			if(str1=="")
			{return ;}
			var str3=str1.replace(/π/g,'Math.PI');
			if(str3.indexOf("sin")!=-1){
				str3=str3.replace(/sin/g,'Math.round(Math.sin');
				str3+='*1000000)/1000000';
				document.getElementById("result").value=str1.concat("=");
				document.getElementById("result1").value=eval(str3);
			}
			else if(str3.indexOf("cos")!=-1){
				str3=str3.replace(/cos/g,'Math.round(Math.cos');
				str3+='*1000000)/1000000';
				document.getElementById("result").value=str1.concat("=");
				document.getElementById("result1").value=eval(str3);
				
			}
			else if(str3.indexOf("tan")!=-1){
				str3=str3.replace(/tan/g,'Math.round(Math.tan');
				str3+='*1000000)/1000000';
				document.getElementById("result").value=str1.concat("=");
				document.getElementById("result1").value=eval(str3);
			}
			else if(str3.indexOf("√")!=-1)
			{
			   var position=str1.indexOf('√');
			   var pow1=str1.substring(0,position);
			   var pow2=str1.substring(position+1,str1.length+1);
			   if(pow1=='')
		   {
		   	var result=Math.pow(pow2,0.5);
		   	document.getElementById("result").value=str1.concat("=");
		   	document.getElementById("result1").value=eval(result);
		   }
		   else{
		   	 result=Math.pow(pow2,1/pow1);
		   	document.getElementById("result").value=str1.concat("=");
		   	document.getElementById("result1").value=eval(result);
		   }
			}
			else{
				result=(eval(str3));
				document.getElementById('result').value=str1.concat("=");
		        document.getElementById('result1').value=result;
			}
			
		}