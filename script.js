//your JS code here. If required.
let squares=document.getElementsByClassName("square")
for(let i of squares)
	{
		i.addEventListener("click",changeColor)
}
function changeColor(e)
{
	let ele=e.target
	for(let j of squares)
		{
			if(j!=ele)
			{
				j.style.backgroundColor="coffee"
}
}
}