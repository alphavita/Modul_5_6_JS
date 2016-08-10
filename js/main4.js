
var base = 60;
var clocktimer,dateObj,dh,dm,ds,ms;
var readout='';
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0;

function clearСlock() {
	clearTimeout(clocktimer);
	h=1;m=1;tm=1;s=0;ts=0;ms=0;
	init=0;show=true;
	var hourd = document.getElementById('hourd');
	var mind = document.getElementById('mind');
	var secd = document.getElementById('secd');
	var msd = document.getElementById('msd');
	hourd.innerHTML = '00';
	mind.innerHTML = '00';
	secd.innerHTML = '00';
	msd.innerHTML = '00';
	start.value='Start';
	start.style.backgroundColor='#5CB85C';



	ii = 0;
}
function startTIME() {
	var cdateObj = new Date();
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000);
	if (t>999) { s++; }
	if (s>=(m*base)) {
		ts=0;
		m++;
	} else {
		ts=parseInt((ms/100)+s);
		if(ts>=base) { ts=ts-((m-1)*base); }
	}
	if (m>(h*base)) {
		tm=1;
		h++;
	} else {
		tm=parseInt((ms/100)+m);
		if(tm>=base) { tm=tm-((h-1)*base); }
	}

	ms = Math.round(t/10);
	if (ms>99) {ms=0;}
	if (ms==0) {ms='00';}
	if (ms>0&&ms<=9) { ms = '0'+ms; }
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; }
	dm=tm-1;
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }
	dh=h-1;
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
	var hourd = document.getElementById('hourd');
	var mind = document.getElementById('mind');
	var secd = document.getElementById('secd');
	var msd = document.getElementById('msd');




	if (show==true) {
	hourd.innerHTML = dh;
	mind.innerHTML = dm;
	secd.innerHTML = ds;
	msd.innerHTML = ms; }
	clocktimer = setTimeout("startTIME()",60);
}

function pause() {
	if (init==0) { dateObj = new Date();
	startTIME();
	start.value='Pause';
	start.style.backgroundColor='#00008b';
	init=1;
	} else { if(show==true) {
	show=false;

	} else { show=true; } }
}
var start = document.getElementById('start');
start.addEventListener('click', pause);
var clear = document.getElementById('clear');
clear.addEventListener('click', clearСlock);
