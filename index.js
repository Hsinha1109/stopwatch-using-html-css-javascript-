let time=0;
	let timer=null;
	const startbtn =document.getElementById('start');
	const stopbtn =document.getElementById('stop');
	const resetbtn =document.getElementById('reset');
	let hr=document.getElementById('hr');
	let min=document.getElementById('min');
	let sec=document.getElementById('sec');
	let seconds=0;
	let minutes=0;
	let hours=0;
// adding event listener to document
startbtn.addEventListener('click',start);
stopbtn.addEventListener('click',stop);
resetbtn.addEventListener('click',reset);


function counter(){
	time++;
	seconds=time%60;
	minutes=Math.floor(time/60);
	hours=Math.floor(time/3600);
	sec.innerText= `${seconds}`;
	min.innerText=`${minutes}`;
	hr.innerText=`${hours}`;
}
function start(){
	if (timer){
		return;
	}

	timer=setInterval(counter,1000);

}
function stop(){

	clearInterval(timer);
	timer=null;
}
function reset(){
	time=0
	clearInterval(timer);
	timer=null;
	sec.innerText='00';
	min.innerText='00';
	hr.innerText='00';
}
document.querySelector('#sun').onclick=()=>{
			document.querySelector('.container').classList.add('dark');
			document.querySelector('#sun').style.display='none';
			document.querySelector('#moon').style.display='block';
		} 
		document.querySelector('#moon').onclick=()=>{
			document.querySelector('.container').classList.remove('dark');
			document.querySelector('#sun').style.display='block';
			document.querySelector('#moon').style.display='none';
		} 
		document.querySelector('#clear').onclick=()=>{
			localStorage.clear();
			document.querySelector('#ol').innerHTML='';
			}
