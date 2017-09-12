var log = console.log.bind(console);
var c = document.createElement.bind(document);
var e = document.querySelector.bind(document);
var eAll = document.querySelectorAll.bind(document);

var d1 = e(".d1");
var d2 = e(".d2");
var d3 = e(".d3");
var d4 = e(".d4");
var d5 = e(".d5");
var h1 = e(".h1");
var h2 = e(".h2");
var m1 = e(".m1");
var m2 = e(".m2");
var s1 = e(".s1");
var s2 = e(".s2");
var days,hours,minutes,seconds;

var morseShow = e(".morseShow");
var morse= e(".morse");


function dateTime()
{
	var birthday = new Date("1995/10/22 19:54:00");
	var date = new Date();
	var date3 = date.getTime() - birthday.getTime();
	// document.write(date3);	
	//计算出相差天数
	days=Math.floor(date3/(24*3600*1000));
	//计算出小时数
	var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
	hours=Math.floor(leave1/(3600*1000));
	//计算相差分钟数
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	minutes=Math.floor(leave2/(60*1000));
	//计算相差秒数
	var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
	seconds=Math.floor(leave3/1000);

	zzz('.s2',-Math.floor(seconds%10));
	zzz(".s1",-Math.floor(seconds/10));
	zzz(".m2",-Math.floor(minutes%10));
	zzz(".m1",-Math.floor(minutes/10));
	zzz(".h2",-Math.floor(hours%10));
	zzz(".h1",-Math.floor(hours/10));
	zzz(".d5",-Math.floor(days%10));
	zzz(".d4",-Math.floor(days%100/10));
	zzz('.d3',-Math.floor(days%1000/100));
	zzz(".d2",-Math.floor(days%10000/1000));
	zzz(".d1",-Math.floor(days/10000));
	// log(days + "天",hours + "时",minutes + "分",seconds + "秒");
}

for (var i = 0; i < 10; i++)
{
	if (i < 6)
	{
		h1.appendChild(createDiv(i));
		m1.appendChild(createDiv(i));
		s1.appendChild(createDiv(i));
	}
	d1.appendChild(createDiv(i));

	d2.appendChild(createDiv(i));
	d3.appendChild(createDiv(i));
	d4.appendChild(createDiv(i));
	d5.appendChild(createDiv(i));
	h2.appendChild(createDiv(i));
	m2.appendChild(createDiv(i));
	s2.appendChild(createDiv(i));
}
var ival = setInterval(function(){
	// pass();
	dateTime();
},1000);

function createDiv(i)
{
	var div = c("div");
		div.className = "num";
		div.textContent = i;
		div.style.backgfloorColor="white";
	return div;
}

/*****************************
 *	初始化活着的时间	    *
 *	div所初始化的div     	*
 *	top所初始化的marginTop值*
*****************************/
function zzz(div,top)
{
	$(div).animate({marginTop:top * 40 + "px"},"slow","swing",function(){});	
	return top * 40;
}




var isShow = true;
var signals,content,changer,result;

morseShow.onclick = function()
{
	if(isShow)
	{
		morse.style.display = "inline";
		isShow = false;
	}
	else
	{
		morse.style.display = "none";
		isShow = true;
	}
}
function GetMorseObj()
{
	o = {
		a:".-",
		b:"-...",
		c:".-.-",
		d:"-..",
		e:".",
		f:"..-.",
		g:"--.",
		h:"....",
		i:"..",
		j:".---",
		k:"-.-",
		l:".-..",
		m:"--",
		n:"-.",
		o:"---",
		p:".--.",
		q:"--.-",
		r:".-.",
		s:"...",
		t:"-",
		u:"..-",
		v:"...-",
		w:".--",
		x:"-..-",
		y:"-.--",
		z:"--..",
		"1":".----",
		"2":"..---",
		"3":"...--",
		"4":"....-",
		"5":".....",
		"6":"-....",
		"7":"--...",
		"8":"---..",
		"9":"----.",
		"0":"-----",
		Parameters:[
			{
				EName:"input",
				ClassName:"radio0",
				Type:"radio",
				IsOn:false,
			},
			{
				EName:"input",
				ClassName:"radio1",
				Type:"radio",
				IsOn:false,
			},
			{
				EName:"p",
				ClassName:"短信号:",
			},
			{
				EName:"input",
				ClassName:"signal",
				Type:"Text",
				IsOn:true,
			},
			{
				EName:"p",
				ClassName:"长信号:",
			},
			{
				EName:"input",
				ClassName:"signal",
				Type:"Text",
				IsOn:true,
			},
			{
				EName:"p",
				ClassName:"输入摩斯密码\'\/\'分割单词:",
			},
			{
				EName:"input",
				ClassName:"content",
				Type:"Text",
				IsOn:false,
			},
			{
				EName:"p",
				ClassName:"转换结果:",
			},
			{
				EName:"input",
				ClassName:"result",
				Type:"disabled",
				IsOn:false,
			},
			{
				EName:"input",
				ClassName:"changer",
				Type:"button",
				IsOn:false,
			},
		],
		Elements:{},
		getElements: function()
		{
			o.Parameters.forEach(
					function(v)
					{
						o.ElementCreate(v);
					}
				)
			o.Elements = 
				{
					signals: eAll(".signal"),
					content: e(".content"),
					result: e(".result"),
					changer: e(".changer"),
					radio1: e(".radio1"),
				}
		},
		ElementCreate:function(parmenters)
		{
			if (parmenters.EName == "input")
			{				
				var input = c("input");
				input.className = parmenters.ClassName;
				input.type = parmenters.Type;
				if(parmenters.Type == "button")
				{
					input.value = "转换";
				}
				else if(parmenters.Type == "disabled")
				{
					input.disabled = "disabled";
				}
				else if (parmenters.Type == "radio") 
				{
					var p = c("p");
					if (parmenters.ClassName == "radio0") 
					{
						p.textContent = "密码转字母:";
					}
					else
					{
						p.textContent = "字母转密码:";
					}
					p.style.display = "inline";				
					morse.appendChild(p);
					
					input.name = "radio";
				}
				if(parmenters.IsOn)
				{
					input.style.width = "20px";
					input.onkeyup = function()
					{
						if (this.value.length > 0)
						{
							this.value = this.value.substring(0,1);
						}
					}
				}
				morse.appendChild(input);
				if (parmenters.ClassName == "radio1" ) 
					{
						morse.appendChild(c("br"));
					}
				return input;
			}
			if (parmenters.EName == "p") 
			{
				var p = c("p");
				p.textContent = parmenters.ClassName;
				if (parmenters.ClassName.indexOf("信号") != -1) 
				{
					p.style.display = "inline";

				}
				morse.appendChild(p);
			}
		},
		MToE: function(val,signals)
		{
			while(val.indexOf(o.Elements.signals[0].value) >= 0 || val.indexOf(o.Elements.signals[1].value) >= 0)
			{
				val = val.replace(o.Elements.signals[0].value,".");
				val = val.replace(o.Elements.signals[1].value,"-");
			}
			for(var i in o)
			{
				if (o[i] == val) 
				{
					return i;
				}
			}
		},
		EToM: function(val)
		{
			val = val.toLowerCase();
			for(var i in o)
			{
				if (i == val) 
				{
					val = o[i];
					while(val.indexOf(".") >= 0 || val.indexOf("-") >= 0)
					{
						val = val.replace(".",o.Elements.signals[0].value);
						val = val.replace("-",o.Elements.signals[1].value);
					}
					return val;
				}
			}
		},
		change: function()
		{
			var _result = "";
			if (!morseObj.Elements.signals[0].value) 
			{
				_result ="亲~短信号不能为空哟!\n";
			}
			if (!morseObj.Elements.signals[1].value)
			{
				_result +="亲~长信号不能为空哟!\n";
			}
			if (!morseObj.Elements.content.value)
			{
				_result +="你爸爸东西都没有!\n转个毛!!!";
			}
			if (_result)
			{
				alert(_result);
				return;	
			}
			if (o.Elements.radio1.checked)
			var arr = o.Elements.content.value.split(" ");
			else
			var arr = o.Elements.content.value.split("/");
			arr.forEach
				(
					function(value,index)
					{
						if (o.Elements.radio1.checked)
						var array = value.split("");
						else
						var array = value.split(" ");
						array.forEach
						(
							function(val,ind)
							{
								if (o.Elements.radio1.checked)
								array[ind] = o.EToM(val);
								else
								array[ind] = o.MToE(val);
							}	
						)
						if (o.Elements.radio1.checked)
						arr[index] = array.join(" ");
						else
						arr[index] = array.join("");
					}
				)
			if (o.Elements.radio1.checked)
			o.Elements.result.value = arr.join("/");
			else
			o.Elements.result.value = arr.join(" ");

		},
	}
	return o;
}
window.onload = function()
{
	morse.style.display = "none";
	morseObj = GetMorseObj();
	morseObj.getElements();
	morseObj.Elements.changer.onclick = morseObj.change;
}

log(`
                    _ooOoo_
                   o8888888o
                   88\" . \"88
                   (| -_- |)
                   O\\  =  /O
                ____/\`---'\\____
              .'  \\\\|     |//  \`.
             /  \\\\|||  :  |||//  \\
            /  _||||| -:- |||||-  \\
            |   | \\\\\\  -  /// |   |
            | \\_|  ''\\---/''  |_/ |
            \\  .-\\__  \`-\`  ___/-. /
          ___\`. .'  /--.--\\  \`. . __
       .\"\" '<  \`.___\\_<|>_/___.'  >'\"\".
      | | :  \`- \\\`.;\`\\ _ /\`;.\`/ - \` : | |
      \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /
 ======\`-.____\`-.___\\_____/___.-\`____.-'======
                    \`=---='
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
             佛祖保佑       永无BUG
     本模块已经经过开光处理，绝无可能再产生bug
 =============================================`);

