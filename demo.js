function createUserList()
{
	this.length = parseInt(Math.random()*1000+1000);
	this.data = {
		name:"jack",
		age:20,
		sex:"boy"
	}
	this.user_information = new Array();
	this.origin_information = new Array();
	console.log("document.length:"+this.length);
	var body = document.getElementsByTagName("body")[0];
	var user = null;
	var div = null;
	var span = null;
	var text = null;
	for(var i = 0 ;i < this.length ; i++)
	{
		this.data.age = parseInt(Math.random()*5+18);
		this.data.sex = (Math.random() > 0.5)?"boy":"girl";
		if((this.data.name = (Math.random() > 0.5)?"jack":"jerry") === "jack")
		{
			this.user_information[i]={name:"jack",sex:(this.data.sex === "boy")?"girl":"boy"}
		}
		else
		{
			this.user_information[i]={name:"jerry",sex:this.data.sex}
		}
		this.origin_information[i] = {name:this.data.name,age:this.data.age,sex:this.data.sex}
		user = JSON.stringify(this.data);
		div = document.createElement("div");
		span = document.createElement("span");
		text = document.createTextNode(user);
		span.appendChild(text);
		div.appendChild(span);
		body.appendChild(div);
	}
	this.checkAnswer = function()
	{
		var div = document.getElementsByTagName("div");
		var fixed_data = null;
		var span = null;
		var text = null;
		var user = null;
		for(var i = 0 ; i < this.length ; i++)
		{
			user ="         <<<---        "+JSON.stringify(this.origin_information[i]);
			text = document.createTextNode(user);
			span = document.createElement("span");
			span.appendChild(text);
			div[i].appendChild(span);
			fixed_data = JSON.parse(div[i].getElementsByTagName("span")[0].innerHTML);
			if((fixed_data.name === this.user_information[i].name) && (fixed_data.sex === this.user_information[i].sex))
				continue;
			else 
			{
				div[i].style.color="red";
				document.getElementsByTagName("h2")[0].innerHTML += "<p style='color:red'>line " + (parseInt(i)+1) + " error!</p>";
				console.log("YOU FAILED TO COMPLETE THIS TASK!");
				return false;
			}
		}
		console.log("YOU HAVE COMPLETE THIS TASK!");
	}
}
window.elements = new createUserList();