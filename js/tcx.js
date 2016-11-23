var outer=document.getElementById('outer');
var inner=document.getElementById('inner');
var zs=document.getElementById('zs');
var lft=document.getElementById('lft');
var rgt=document.getElementById('rgt');
var imgs=inner.getElementsByTagName('img');


var firImg=inner.children[0].cloneNode(true);
var lasImg=inner.children[imgs.length-1].cloneNode(true);
inner.appendChild(firImg);
inner.insertBefore(lasImg,inner.children[0]);
outer.scrollLeft=imgs[0].offsetWidth;
var time1=null,time2=null,time3=null,time4=null;
var a=1,b=0;
function automove () {
	clearInterval(time1);
	time1=setInterval(function () {
		a++;
		
		if (a>=imgs.length) {
			outer.scrollLeft=imgs[0].offsetWidth;
			a=2;
			b=0;
		};

		b++;
		if (b>=imgs.length-2) {
			b=0
		};
		// console.log(b);
		num.innerHTML=b+1;
		
		move();
	},2000)
	
}
automove();

function move() {
	var start=outer.scrollLeft;
	var end=imgs[0].offsetWidth*a;
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

lft.onclick=function () {
	clearInterval(time1);
	clearInterval(time2);
	a--;
	if (a<0) {
		a=imgs.length-3;
		outer.scrollLeft=imgs[0].offsetWidth*(a+1);
	};
	b--;
	if (b<0) {
		b=imgs.length-3;
	};
	num.innerHTML=b+1;
	move();
	automove();
}

rgt.onclick=function () {
	clearInterval(time1);
	clearInterval(time2);
	a++;
	if (a>=imgs.length) {
		a=2;
		outer.scrollLeft=imgs[0].offsetWidth;
	};
	b++;
	if (b>=imgs.length-2) {
		b=0;
	};
	num.innerHTML=b+1;
	move();
	automove();
}



function getclass(x){
	var max=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	var reg= new RegExp('\\b'+x+'\\b','g');
	for (var i = 0; i < max.length; i++) {
		reg.lastIndex=0
		if (reg.test(max[i].className)) {
			arr.push(max[i]);
		};
	};
	return arr;
};

// var gd=document.getElementById('con3_left6_r3');
var gd=getclass('con3_left6_r3');
// var uls=document.getElementById('con3_left6_ul');
var uls=getclass('con3_left6_ul');
// var lis=uls.getElementsByTagName('li');
var lis=getclass('li');
// var txt=document.getElementById('txt');
var txt=getclass('txt');
// var sq=document.getElementById('con3_left6_r2_sq');
var sq=getclass('con3_left6_r2_sq');
// var zk=document.getElementById('con3_left6_r2_zk');
var zk=getclass('con3_left6_r2_zk');
// var btn=document.getElementById('con3_left6_r4_pl2_p');
var btn=getclass('con3_left6_r4_pl2_p');
// var nr=document.getElementById('nr');
var nr=getclass('nr');


// function getclass(cla) {
// 	var tags=document.all?document.all:document.getElementsByTagName('*');
// 	var arr=[];
// 	for (var i = 0; i < tags.length; i++) {
// 		if (tags[i].className==cla) {
// 			arr.push(tags[i]);
// 		};
// 	};
// 	return arr;
// }

	

var plqb=getclass('con3_left6')[0];
var con3_left=getclass('con3_left')[0];
var fz1=plqb.cloneNode(true);
var fz2=plqb.cloneNode(true);
con3_left.appendChild(fz1);
con3_left.appendChild(fz2);

function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
}


for (var i = 0; i < sq.length; i++) {

		var gd=getclass('con3_left6_r3');
		var uls=getclass('con3_left6_ul');
		var lis=getclass('li');
		var txt=getclass('txt');
		var sq=getclass('con3_left6_r2_sq');
		var zk=getclass('con3_left6_r2_zk');
		var btn=getclass('con3_left6_r4_pl2_p');
		var nr=getclass('nr');
		var sc=getclass('ssly_p5');
	// ============更多+收起=========
		sq[i].index=i;
		sq[i].onclick=function () {
			for (var i = 0; i < sq.length; i++) {
				gd[this.index].style.display='none';
				sq[this.index].style.display='none';
				zk[this.index].style.display='block';
			};
		}
		zk[i].index=i;
		zk[i].onclick=function () {
			for (var i = 0; i < sq.length; i++) {
				sq[this.index].style.display='block';
				zk[this.index].style.display='none';
				gd[this.index].style.display='block';
			};
		}


		btn[i].index=i;
		btn[i].onclick=function () {
			if (txt[this.index].value.length>200) {
				txt[this.index].value=txt[this.index].value.substring(0,200);
			};
			var newli=document.createElement('li');
			

			if (txt[this.index].value=='') {
				nr[this.index].style.display='block';
			}else{
				uls[this.index].appendChild(newli);
			};
			newli.innerHTML=lis[2].innerHTML;
			// console.log(lis[2].innerHTML);
			newli.children[1].children[1].className='pl';
			// var pl=lis[2].children[1].children[1].cloneNode(true);
			// console.log(lis[2]);
			// console.log(lis[2]);
			// console.log(lis[2]);
			var pl=getclass('pl')[0];
			pl.innerHTML=txt[this.index].value;
			txt[this.index].value='';
			// newli.style.display='block';
			// newli.children[1].replaceChild(pl,newli.children[1].children[1]);

			var riqi=getclass('ssly_p3');
			var date=new Date();
			var year=date.getFullYear();
			var month=date.getMonth()+1;
			var day=date.getDate();
			var hours=date.getHours();
			var sed=date.getMinutes();

			// var riqi=lis[2].children[1].children[2].children[0].cloneNode(true);
			// console.log(riqi);
			newli.children[1].children[2].children[0].className='riqi';
			var riqi=getclass('riqi')[0];
			
			if (month<10) {
				month='0'+month;
			};
			if (day<10) {
				day='0'+day;
			};
			if (hours<10) {
				hours='0'+hours;
			};
			if (sed<10) {
				sed='0'+sed;
			};
			riqi.innerHTML=year+'-'+month+'-'+day+' '+hours+':'+sed;
			// newli.children[1].children[2].replaceChild(riqi,newli.children[1].children[2].children[0])



			function removeElement(_element){
			    var _parentElement = _element.parentNode;
			    if(_parentElement){
			        _parentElement.removeChild(_element);
			    }
			}
			

			// var sc=lis[2].children[1].children[2].children[2].cloneNode(true);
			// // sc.innerText='大删除';
			// // console.log(sc.innerHTML);
			// newli.children[1].children[2].replaceChild(sc,newli.children[1].children[2].children[2])
			// console.log(sc.innerHTML);
			// newli.className='ssly_p5';
			var sc=getclass('ssly_p5');
			for (var i = 0; i < sc.length; i++) {
				sc[this.index]=i;
				sc[i].onclick=function () {
				for (var i = 0; i < sc.length; i++) {
					if (sc[i]==this) {
							// console.log(sc[i].parentNode.parentNode.parentNode);
							// uls[this.index].removeChild(this.parentNode);
							removeElement(this.parentNode.parentNode.parentNode);
						};
					};
				}
			};
			
		};

		// var sc=getclass('ssly_p5');
		// newli.className='ssly_p5';
		

		var time=null;
		var shuzi=getclass('shuzi');
		// txt[i].index=i;
		txt[i].onfocus=function () {
			time=setInterval(function () {
				for (var i = 0; i < txt.length; i++) {
					var len=txt[i].value.length;
					var sy=200-len;
					shuzi[i].innerHTML=sy;
				};
				
			},1)
		}
		
};

	for (var i = 0; i < sc.length; i++) {
			sc[this.index]=i;
			sc[i].onclick=function () {
			for (var i = 0; i < sc.length; i++) {
				if (sc[i]==this) {
						// console.log(sc[i].parentNode.parentNode.parentNode);
						removeElement(this.parentNode.parentNode.parentNode);
						// uls[this.index].removeChild(sc[i].parentNode.parentNode.parentNode);
					};
				};
			}
		};	



		


// btn.onclick=function () {
// 	if (txt.value.length>200) {
// 		txt.value=txt.value.substring(0,200);
// 	};
// 	var newli=document.createElement('li');
	

// 	if (txt.value=='') {
// 		nr.style.display='block';
// 	}else{
// 		uls.appendChild(newli);
// 	};
// 	newli.innerHTML=lis[2].innerHTML;
// 	var pl=lis[1].children[1].children[1].cloneNode(true);
// 	pl.innerHTML=txt.value;
// 	txt.value='';
// 	newli.children[1].replaceChild(pl,newli.children[1].children[1]);

// 	// var riqi=getclass('ssly_p3');
// 	var date=new Date();
// 	var year=date.getFullYear();
// 	var month=date.getMonth();
// 	var day=date.getDate();
// 	var hours=date.getHours();
// 	var sed=date.getSeconds();

// 	var riqi=lis[1].children[1].children[2].children[0].cloneNode(true);
// 	console.log(riqi);
// 	riqi.innerText=year+'-'+(month+1)+'-'+day+' '+hours+':'+sed;
// 	newli.children[1].children[2].replaceChild(riqi,newli.children[1].children[2].children[0])



// 	var sc=getclass('ssly_p5');
// 	for (var i = 0; i < sc.length; i++) {
// 		sc[i].onclick=function () {
// 			for (var i = 0; i < sc.length; i++) {
// 				if (sc[i]==this) {
// 					uls.removeChild(sc[i].parentNode.parentNode.parentNode);
// 				};
// 			};
			
// 		}
// 	};
// }
// var sc=getclass('ssly_p5');



