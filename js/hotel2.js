var outer=document.getElementById('outer');
var inner=document.getElementById('inner');
var inner1=document.getElementById('inner1');
var inner2=document.getElementById('inner2');
var imgs=inner1.getElementsByTagName('img');
var lft=document.getElementById('lft');
var rgt=document.getElementById('rgt');
inner2.innerHTML=inner1.innerHTML;

var time1=null,time2=null;

function rightmove() {
	// clearInterval(time2);
	time1=setInterval(function () {
		outer.scrollLeft++;
		if (outer.scrollLeft>=inner1.offsetWidth) {
			outer.scrollLeft=0;
			
		};
		// clearInterval(time1);
		if (outer.scrollLeft%(imgs[0].offsetWidth+27)==0) {
			clearInterval(time1);
			clearTimeout(time2);
			time2=setTimeout(function () {
				rightmove();
		},2000)
		};
	},15)
}
rightmove();

function leftmove() {
	// clearInterval(time2);
	time1=setInterval(function () {
		outer.scrollLeft--;
		if (outer.scrollLeft<=0) {
			outer.scrollLeft=inner1.offsetWidth;
			
		};
		// clearInterval(time1);
		if (outer.scrollLeft%(imgs[0].offsetWidth+27)==0) {
			clearInterval(time1);
			clearTimeout(time2);
			time2=setTimeout(function () {
				leftmove();
		},2000)
		};
	},15)
}




lft.onclick=function () {
	clearInterval(time1);
	clearTimeout(time2);
	rightmove();
}

rgt.onclick=function  () {
	clearInterval(time1);
	clearTimeout(time2);
	leftmove();
}

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

var arr1=['images/h2a8.jpg','images/h2a9.jpg','images/h2a10.jpg','images/h2a11.jpg','images/h2a12.jpg']
var con5_btm=getclass('con5_btm')[0];
var con5_r2_zs1=getclass('con5_r2_zs1')[0];
for (var i = 0; i < 5; i++) {
	var con5_r2_zs1_fz1=con5_r2_zs1.cloneNode(true);
	con5_btm.appendChild(con5_r2_zs1_fz1);
	con5_r2_zs1_fz1.children[0].children[0].src=arr1[i];
};