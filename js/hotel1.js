function getclass(cls) {
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	var reg=new RegExp('\\b'+cls+'\\b','g');
	for (var i = 0; i < tags.length; i++) {
		reg.lastIndex=0;
		if (reg.test(tags[i].className)) {
			arr.push(tags[i]);
		};
	};
return arr;
}
// function class4(x){
// 	var max=document.all?document.all:document.getElementsByTagName('*');
// 	var arr=[];
// 	var reg= new RegExp('\\b'+x+'\\b','g');
// 	for (var i = 0; i < max.length; i++) {
// 		reg.lastIndex=0
// 		if (reg.test(max[i].className)) {
// 			arr.push(max[i]);
// 		};
// 	};
// 	return arr;
// };
var uls1=document.getElementById('uls1');
// var uls1=getclass('uls1');
var lis1=uls1.getElementsByTagName('li');
var uls2=document.getElementById('uls2');
var uls3=document.getElementById('uls3');
var lis3=uls3.getElementsByTagName('li');
var ipt=document.getElementsByTagName('input');

// function CreateTab (ParentId1,ParentId3,Tag1,Tag3) {
// 	this.uls1=document.getElementById(ParentId1);
// 	this.uls3=document.getElementById(ParentId3);
// 	this.lis1=this.uls1.getElementsByTagName(Tag1);
// 	this.lis3=this.uls3.getElementsByTagName(Tag3);
// 	var _this=this;
// 	for (var i = 0; i < this.lis1.length; i++) {
// 		this.lis1[i].onclick=function () {
// 			_this.Tab(this);
// 		}
// 	};
// }
function CreateTab (ParentId1,Tag1) {
	this.uls1=document.getElementById(ParentId1);
	// this.uls3=document.getElementById(ParentId3);
	this.lis1=this.uls1.getElementsByTagName(Tag1);
	// this.lis3=this.uls3.getElementsByTagName(Tag3);
	var _this=this;
	for (var i = 0; i < this.lis1.length; i++) {
		this.lis1[i].onclick=function () {
			_this.Tab(this);
		}
	};
}



CreateTab.prototype.Tab=function (Target) {
	for (var v = 0; v < this.lis1.length; v++) {
		if (this.lis1[v]==Target) {
			this.lis1[v].className='select'
			// this.lis3[v].className='select3';
		}else{
			this.lis1[v].className='';
			// this.lis3[v].className='';
		};
	};
}

var tab1=new CreateTab('uls1','li');
var tab3=new CreateTab('uls3','li');

var chongzhi=getclass('con4_r')[0];
chongzhi.onclick=function () {
	for (var i = 0; i < lis1.length; i++) {
		// lis1[i].style.border='2px solid #fff;';
		lis1[i].className='';
	};
	// lis1[0].style.border='2px solid #ffa000;';
	lis1[0].className='select';
	for (var i = 0; i < lis3.length; i++) {
		lis3[i].className='';
	};
	lis3[0].className='select';
	for (var i = 0; i < ipt.length; i++) {

		ipt[i].checked=false;
	};
}
// ========推荐========

var tj=getclass('tj')[0];
var jw=getclass('con5_l_price')[0];
tj.onclick=function () {
	tj.style.background='#b46400';
	jw.style.background='#ffa000';
}
jw.onclick=function () {
	tj.style.background='#ffa000';
	jw.style.background='#b46400';
}


// ========大图滚动=========
function gundong(index) {

	var outer1=getclass('con6_outer')[index];
	var inner1=getclass('con6_inner')[index];

	var imgs=inner1.getElementsByTagName('img');
	var lft1=getclass('con6_box_l')[index];
	var rgt1=getclass('con6_box_r')[index];


	var firImg=inner1.children[0].cloneNode(true);
	var lstImg=inner1.children[imgs.length-1].cloneNode(true);
	inner1.appendChild(firImg);
	inner1.insertBefore(lstImg,inner1.children[0]);

	outer1.scrollLeft=imgs[0].offsetWidth;
	var time1=null,time2=null;
	var a=1;
	function automove() {
		clearInterval(time1);
		time1=setInterval(function () {
			a++;
			if (a>=imgs.length) {
				outer1.scrollLeft=imgs[0].offsetWidth;
				a=2;
			};
			move();
		},2000)
	}
	automove();

	function move() {
		var start=outer1.scrollLeft;
		var end=imgs[0].offsetWidth*a;
		var change=end-start;
		var maxstep=20;
		var minstep=0;
		var everystpe=change/maxstep;
		clearInterval(time2);
		time2=setInterval(function () {
			minstep++;
			if (minstep>=maxstep) {
				clearInterval(time2);
			};
			start=start+everystpe;
			outer1.scrollLeft=start;
		},15)
	}

	lft1.onclick=function () {
		clearInterval(time1);
		clearInterval(time2);
		a--;
		if (a<=0) {
			a=imgs.length-2;
			outer1.scrollLeft=imgs[0].offsetWidth*(a+1);
		};
		move();
		automove();
	}
	rgt1.onclick=function () {
		clearInterval(time1);
		clearInterval(time2);
		a++;
		if (a>=imgs.length) {
			a=2;
			outer1.scrollLeft=imgs[0].offsetWidth;
		};
		move();
		automove();
	}
};

gundong('0');
gundong('1');
gundong('2');
// var con67=getclass('con67')[0];
// var con=getclass('con')[0];
// var con67_fz1=con67.cloneNode(true);
// con.appendChild(con67_fz1);

// var outer1=getclass('con6_outer')[0];
// var inner1=getclass('con6_inner')[0];

// var imgs=inner1.getElementsByTagName('img');
// var lft1=getclass('con6_box_l')[0];
// var rgt1=getclass('con6_box_r')[0];


// var firImg=inner1.children[0].cloneNode(true);
// var lstImg=inner1.children[imgs.length-1].cloneNode(true);
// inner1.appendChild(firImg);
// inner1.insertBefore(lstImg,inner1.children[0]);

// outer1.scrollLeft=imgs[0].offsetWidth;
// var time1=null,time2=null;
// var a=1;
// function automove() {
// 	clearInterval(time1);
// 	time1=setInterval(function () {
// 		a++;
// 		if (a>=imgs.length) {
// 			outer1.scrollLeft=imgs[0].offsetWidth;
// 			a=2;
// 		};
// 		move();
// 	},2000)
// }
// automove();

// function move() {
// 	var start=outer1.scrollLeft;
// 	var end=imgs[0].offsetWidth*a;
// 	var change=end-start;
// 	var maxstep=20;
// 	var minstep=0;
// 	var everystpe=change/maxstep;
// 	clearInterval(time2);
// 	time2=setInterval(function () {
// 		minstep++;
// 		if (minstep>=maxstep) {
// 			clearInterval(time2);
// 		};
// 		start=start+everystpe;
// 		outer1.scrollLeft=start;
// 	},15)
// }

// lft1.onclick=function () {
// 	clearInterval(time1);
// 	clearInterval(time2);
// 	a--;
// 	if (a<=0) {
// 		a=imgs.length-2;
// 		outer1.scrollLeft=imgs[0].offsetWidth*(a+1);
// 	};
// 	move();
// 	automove();
// }
// rgt1.onclick=function () {
// 	clearInterval(time1);
// 	clearInterval(time2);
// 	a++;
// 	if (a>=imgs.length) {
// 		a=2;
// 		outer1.scrollLeft=imgs[0].offsetWidth;
// 	};
// 	move();
// 	automove();
// }


