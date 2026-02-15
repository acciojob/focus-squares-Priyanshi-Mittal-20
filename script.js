//your JS code here. If required.
let squares=document.getElementsByClassName("square")
for(let i of squares)
	{
		i.addEventListener("mouseover",changeColor)
		i.addEventListener("mouseout",resetColor)
}
function changeColor(e)
{
	let ele=e.target;
	for(let j of squares)
		{
			if(j != ele)
			{
				j.style.backgroundColor="rgb(111,78,55)";
}
}
}
function resetColor(e)
{
	for(let k of squares)
		{
			k.style.backgroundColor="rgb(230,230,250)"
}
}