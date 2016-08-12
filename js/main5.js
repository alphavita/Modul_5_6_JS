var clocktimer,dateObj;
var h=0, m=0, s=0,ms=0,show=true, init=0, ii=0;

function clearСlock() {
	clearTimeout(clocktimer);
	init=0;show=true;
	var hourd = document.getElementById('hourd');
	var mind = document.getElementById('mind');
	var secd = document.getElementById('secd');
	var msd = document.getElementById('msd');
	hourd.innerHTML = '00';
	mind.innerHTML = '00';
	secd.innerHTML = '00';
	msd.innerHTML = '000';
	start.value='Start';
	start.style.backgroundColor='#5CB85C';
	ii = 0;
}
	function startTIME() {
	var cdateObj = new Date();
	var t = cdateObj.getTime() - dateObj.getTime();
	ms = t%1000;
	 t = Math.floor(t/1000);

	 s = t%60;
	 t = Math.floor(t/60);
	 m = t%60;
  t = Math.floor(t/60);
  h = t%60;
  if (h<10){
    h = "0" +h;
  }
  if(m<10){
    m = '0' + m;
  }
  if(s<10){
    s = '0' + s;
  } if(ms>10&&ms<100){
  	ms= '0' + ms;
  }if (ms<10){
  	ms= '00' + ms;
  }
	var hourd = document.getElementById('hourd');
	var mind = document.getElementById('mind');
	var secd = document.getElementById('secd');
	var msd = document.getElementById('msd');
	if (show==true) {
	hourd.innerHTML = h;
	mind.innerHTML = m;
	secd.innerHTML = s;
	msd.innerHTML = ms; }
	clocktimer = setTimeout("startTIME()",150);
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