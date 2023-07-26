//your JS code here. If required.
function updateSizeInfo()
	{
		const width=window.innerWidth;
		const height=window.innerHeight;
		const sizeInfo=document.getElementById("sizeInfo").querySelector("h1");
		sizeInfo.textContent=`Width: ${width} and Height: ${height}`;
	}
updateSizeInfo();
window.addEventListener("resize",updateSizeInfo);