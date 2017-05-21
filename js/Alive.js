	var s = 0;
		var ss = 0;
		var m = 0;
		var mm = 0;
		var h = 0;
		var hh = 0;
		var d = 0;
		var dd = 0;
		var ddd = 0;
		var dddd = 0;
		var ddddd = 0;
		var d1 = document.querySelector(".d1");
		var d2 = document.querySelector(".d2");
		var d3 = document.querySelector(".d3");
		var d4 = document.querySelector(".d4");
		var d5 = document.querySelector(".d5");
		var h1 = document.querySelector(".h1");
		var h2 = document.querySelector(".h2");
		var m1 = document.querySelector(".m1");
		var m2 = document.querySelector(".m2");
		var s1 = document.querySelector(".s1");
		var s2 = document.querySelector(".s2");
		var days,minutes,secondes;
		var birthday = new Date("1995/10/22 19:54:00");
		var date = new Date();
		var date3 = date.getTime() - birthday.getTime();
		// document.write(date3);	
		//计算出相差天数
		days=Math.floor(date3/(24*3600*1000));
		//计算出小时数
		var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
		var hours=Math.floor(leave1/(3600*1000));
		//计算相差分钟数
		var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
		minutes=Math.floor(leave2/(60*1000));
		//计算相差秒数
		var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
		seconds=Math.round(leave3/1000);

		s = zzz('.s2',-Math.floor(seconds%10));
		ss = zzz(".s1",-Math.floor(seconds/10));
		m = zzz(".m2",-Math.floor(minutes%10));
		mm = zzz(".m1",-Math.floor(minutes/10));
		h = zzz(".h2",-Math.floor(hours%10));
		hh = zzz(".h1",-Math.floor(hours/10));
		d = zzz(".d5",-Math.floor(days%10));
		dd = zzz(".d4",-Math.floor(days%100/10));
		ddd = zzz('.d3',-Math.floor(days%1000/100));
		dddd = zzz(".d2",-Math.floor(days%10000/1000));
		ddddd = zzz(".d1",-Math.floor(days/10000));
		console.log(days + "天",hours + "时",minutes + "分",seconds + "秒");
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
			pass();
		},1000);
		// for (var i = 1000000 - 1; i >= 0; i--) {
		// 	ival;
		// }
		function createDiv(i)
		{
			var div = document.createElement("div");
				div.className = "num";
				div.textContent = i;
				div.style.backgroundColor="white";
			return div;
		}
		function pass()
		{

			s -= 40;
			if (s > -400) {
				animation(".s2",s);
			}
			if (s < -360)
			{
				s = 0;
				animation(".s2",s);
				ss -= 40;
				if (ss > -240) {
					animation(".s1",ss);
				}	
			}
			if (ss < -200) 
			{
				ss = 0;
				animation(".s1",ss);
				m-= 40;
				if (m > -400) {
					animation(".m2",m);
				}
			}
			if (m < -360) 
			{
				m = 0;
				animation(".m2",m);
				mm -= 40;
				if (mm > -240) {
					animation(".m1",mm);
				}
			}
			if (mm < -200) 
			{
				mm = 0;
				animation(".m1",mm);
				h -= 40;
				if (h > -400) {
					animation(".h1",h);
				}
			}
			if (h < -360) 
			{
				h = 0;
				animation(".h1",h);
				hh -= 40;
				
				if (hh > -240) {
					animation(".h2",hh);
				}
			}
			if (hh < -200) 
			{
				hh = 0;
				animation(".h1",hh);
				d -= 40;
				if (d > -400) {
					animation(".d5",d);
				}
			}
			if (d < -360) 
			{
				d = 0;
				animation(".d5",d);
				dd -= 40;
				if (dd > -400) {
					animation(".d4",dd);
				}
			}
			if (dd < -360) 
			{
				dd = 0;
				animation(".d4",dd);
				ddd -= 40;
				if (ddd > -400) {
					animation(".d3",ddd);
				}
			}
			if (ddd < -360) 
			{
				ddd = 0;
				animation(".d3",ddd);
				dddd -= 40;
				if (dddd > -400) {
					animation(".d2",dddd);
				}
			}
			if (dddd < -360) 
			{
				dddd = 0;
				animation(".d2",dddd);
				ddddd -= 40;
				if (ddddd > -400) {
					animation(".d1",ddddd);
				}
			}
			if (ddddd < -360) 
			{
				ddddd = 0;
				animation(".d1",ddddd);
			}
		}

		/***************************
		 *	初始化活着的时间	  *
		 *	div所初始化的div		  *
		 *	top所初始化的marginTop值*
		***************************/
		function zzz(div,top)
		{
			$(div).animate({marginTop:top * 40 + "px"},"slow","swing",function(){});	
			return top * 40;
		}

		/***************************
		 *	平滑移动			  *
		 *	div所移动的div		  *
		 *	top所移动的marginTop值*
		***************************/
		function animation(div,top)
		{
			$(div).animate({marginTop:top + "px"},"slow","swing",function(){});	
		}

		console.log("我是垃圾");
		console.log("用了茫茫多的if"); 