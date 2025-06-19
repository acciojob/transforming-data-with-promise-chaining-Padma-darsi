//your JS code here. If required.
function operations()
{
	const arthematicopr= new promise((resolve)=>
		{
			setTimeOut(()=>
				{
					const number=document.getElementById("ip").value;
					document.getElemenById("output").textContent+=`result is,${number}`;
					resolve(number);
				}
				,2000)
		});
	.then((number)=>
		{
			setTimeOut(()=>
				{
					
					const mul =number*2;
					document.getElemenById("output").textContent+=`result is,${mul}`;
					resolve(mul);
				},2000)
		})
	.then((number)=>
		{
			setTimeOut(()=>
				{
					
					const sub=number-2;
					document.getElemenById("output").textContent+=`result is,${sub}`;
					resolve(sub);
				})
		})
}
operations();