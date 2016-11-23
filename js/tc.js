var uls=document.getElementById('uls');
var lis=uls.getElementsByTagName('li')[0];
var uls2=document.getElementById('uls2');

function byclass(classn) {
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	var reg=new RegExp('\\b'+classn+'\\b','g');
	for (var i = 0; i < tags.length; i++) {
		reg.lastIndex=0;
		if (reg.test(tags[i].className)) {
			arr.push(tags[i]);
		};
	};
	return arr;
}



var arr1=['images/gl4.jpg','images/gl5.jpg','images/gl6.jpg','images/gl7.jpg','images/gl8.jpg','images/gl9.jpg','images/gl10.jpg','images/gl11.jpg','images/gl12.jpg','images/gl13.jpg','images/gl14.jpg'];
var arr2=['images/gl21.png','images/gl22.png','images/gl23.png'];
var arr3=['台北一日游','嘉义一日游','台东一日游','高雄一日游','嘉义一日游','台中一日游','台北一日游','花莲一日游','台东绿岛一日游','日月潭一日游','台中一日游'];


var a=-1;
var b=0;
for (var i = 0; i < arr1.length; i++) {
	var newli=document.createElement('li');
	newli.innerHTML=lis.innerHTML;
	uls.appendChild(newli);

	a++;
	b++;
	var glt1=byclass('glt1');
	var kdjq=byclass('kdjq');

	

	glt1[b].src=arr1[a];
	console.log(i);
	kdjq[b].innerHTML=arr3[a];
};

for (var i = 0; i < 12; i++) {

	var zh1=byclass('zh1');
	if ((i%3)==0) {
		zh1[i].src=arr2[0];
	} else if((i%3)==1){
		zh1[i].src=arr2[1];
	}else if((i%3)==2) {
		zh1[i].src=arr2[2];
	};
};


function byclass2(cls) {
	var tags=uls2.all?uls2.all:uls2.getElementsByTagName('*');
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
var d=1;
var e=-1;
for (var i = 0; i < arr2.length; i++) {
	var newli=document.createElement('li');
	newli.innerHTML=lis.innerHTML;
	uls2.appendChild(newli);

	var glt2=byclass2('glt1');
	var kdjq2=byclass2('kdjq');
	d++;
	e++;
	glt2[e].src=arr1[d];
	console.log(i);
	kdjq2[e].innerHTML=arr3[d];
};

