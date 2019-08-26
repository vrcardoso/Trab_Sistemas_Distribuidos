const pixelsArray=[]
let pixelWidth=30	
let pixelHeight=15


function start(){
	createDataStructure()
	createTablePixels()
}

function createDataStructure(){
 	const n_Pixels= pixelWidth*pixelHeight
 	for (let i =0; i < n_Pixels ; i++) {
 		pixelsArray[i]=true
 	}

}

function createTablePixels(){
	let html = '<table cellpadding=0 cellspacing=0>'

	for (let row = pixelHeight-1 ; row >= 0; row--) {
	   html += '<tr>'

	   for (var column = pixelWidth- 1; column >= 0; column--) {
	   	const pixelIndex = column + (pixelWidth*row)
	   	html += '<td style= "background-color: rgb(38, 38, 38);">'
	   	html += '<div class="pixel-Index">'
	   	html+='<button id="'+pixelIndex+'" onclick = "btnChange('+pixelIndex+')">' 
	   	html+= '</button></div>'
	   	html += '</td>'

	   }
	   html += '</tr>'

	}

	html += '</table>'

	document.querySelector('#pixel_art').innerHTML = html

}

function btnChange(i){
	let p= i.toString()
 if (pixelsArray[i]==true) {
 	 document.getElementById(p).style.backgroundColor = "rgb(255, 255, 255)";
 	 pixelsArray[i]=false
 }else{
   document.getElementById(p).style.backgroundColor = "rgb(38, 38, 38)";
   pixelsArray[i]=true
}

}

start()