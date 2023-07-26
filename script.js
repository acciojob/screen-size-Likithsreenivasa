//your JS code here. If required.
function updateInfo()
	{
		const width=window.innerWidth;
		const height=window.innerHeight;
		const sizeInfo=document.getElementById("sizeInfo").querySelector("h1");
		sizeInfo.textContent=`Width: ${width} and Height: ${height}`
   }
updateInfo();
window.addEventListener("resize",updateInfo);
