var outer=document.getElementById('outer');
var inner1=document.getElementById('inner1');
var inner2=document.getElementById('inner2');
var lis=inner1.getElementsByTagName('li');
var btn1=document.getElementById('con2_l');
var btn2=document.getElementById('con2_r');

inner2.innerHTML=inner1.innerHTML;

var time1=null,time2=null,time3=null,time4=null;
var bj=0;
var a=0;

function moveRight() {
	clearInterval(time1);
	time1=setInterval(function () {
		
		if (a>=lis.length) {
			outer.scrollLeft=0;
			a=0;
		};
		a++;
		move();
	},2000)
}
moveRight();

function move () {
	var start=outer.scrollLeft;
	var end=(lis[0].offsetWidth+32)*a;
	var change=end-start;
	var minstep=0;
	var maxstep=20;
	var everystep=change/maxstep;
	clearInterval(time2);
	time2=setInterval(function () {
		minstep++;
		if (minstep>=maxstep) {
			clearInterval(time2);
		};
		start=start+everystep;
		outer.scrollLeft=start;
	},15)
}

function clear() {
	clearInterval(time1);
	clearInterval(time3);
	clearTimeout(time2);
	clearTimeout(time4);
};

outer.onmouseover=function () {
	clear();
}

outer.onmouseout=function () {
	moveRight();
}

btn1.onclick=function  () {
	clear();//防止绑定多个计时器
	a--;
	if (a<0) {
		a=lis.length-1;
		outer.scrollLeft=(lis[0].offsetWidth+32)*(a+1)
	};
	move();
	moveRight();
}
btn2.onclick=function  () {
	clear();//防止绑定多个计时器
	a++;
	if (a>=lis.length) {
		outer.scrollLeft=0;
		a=1;
	};
	move();
	moveRight();
}




var con3_l_con=document.getElementById('con3_l_con');
var lis2=con3_l_con.getElementsByTagName('li')[0];
var lis3=lis2.cloneNode(true);
var lis4=lis2.cloneNode(true);
var lis5=lis2.cloneNode(true);
con3_l_con.appendChild(lis3);
con3_l_con.appendChild(lis4);
con3_l_con.appendChild(lis5);
