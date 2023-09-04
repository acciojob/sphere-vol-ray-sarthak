function volume_sphere() {
    //Write your code here
	let rad=document.getElementById("radius");
	let volume=document.getElementById("volume");
	let radius=rad.value;
	let vol=(4/3)*3.142*(radius*radius*radius);
	vol = vol.toFixed(4);
	//let v=54;
	 volume.value=vol;
	return false;
	
  
} 
 let button=document.getElementById("submit");
 button.addEventListener("click",volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
