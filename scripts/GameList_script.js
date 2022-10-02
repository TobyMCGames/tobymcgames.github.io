
//Left = 0, Right = 1
var GamePos = 1;

function loadHighlights()
{
	let container = $("#HighlightGames");
	
	for (var i = 0; i < HighlightGame_Data.length; i++)
	{
		let item = HighlightGame_Data[i];
		let btn = addGenre(item.title, "Images/GameList/" + item.LogoPic, item.RefTitle, "Images/GameList/" + item.RefPic, item.bgColor, item.link, GamePos);
			
		if (GamePos == 1)
		{
			GamePos = 0;
		}
		else
		{
			GamePos = 1;
		}
		
		
		container.append(btn);
	}
}

document.addEventListener("DOMContentLoaded", loadHighlights);

function loadInformation(listNum)
{
	let title = $("#InfoTitle");
	if (title === undefined)
	{
		console.log("Title is undefined");
	}
	else
	{
		title.html(Game_Data[listNum].name);
	}
	
	let desc = $("#InfoDesc");
	if (desc === undefined)
	{
		console.log("Desc is undefined");
	}
	else
	{
		desc.css("top", "7vw");
		desc.html(Game_Data[listNum].desc);
	}
}

function loadDefaultInfo()
{
	let title = $("#InfoTitle");
	if (title != null)
	{
		title.html("^^^<br>Hover Over");
		title.css("top", "0")
	}
	
	let desc = $("#InfoDesc");
	if (desc != null)
	{
		desc.css("top", "3.3vw")
		desc.html("");
	}
}


function loadGames()
{
	let container = $("#Games");
	let innerbox = $("<div></div>");
	innerbox.attr('id', "GameBox");
	
	container.append(innerbox);
	
	for (let i = 0; i < Game_Data.length; i++)
	{
		let item = Game_Data[i];
		let btn = $("<a></a>");
		btn.attr("class", "background");
		btn.attr("href", item.link);
		btn.attr("target", "_blank");
		let x = i + 1;
		btn.attr("id", "game" + x);
		
		innerbox.append(btn);
		
		let profile = $("<img></img>");
		profile.attr("class", "profile");
		profile.attr("src", "Images/GameList/" + item.LogoPic);
		profile.attr("alt", item.title);
		
		btn.append(profile);
		
		
	}
	for (let i = 0; i < Game_Data.length; i++)
	{
		let x = i + 1;
		let btn = $("#game" + x);
		btn.hover(
			function() { loadInformation(i); },
			function() { loadDefaultInfo() }
			);
	}
	loadDefaultInfo();
}

document.addEventListener("DOMContentLoaded", loadGames);


var currentGame = 0;
var pos = 0;
function GoRight()
{
	let box = $("#GameBox");
	console.log(box);
	pos -= 25;
	box.css("transform", "translate(" + pos + "%, 0)");
	
	currentGame++;
	
	if (currentGame + 1 == Game_Data.length)
	{
		$("#rightArrow").css("display", "none");
	}
	else
	{
		$("#leftArrow").css("display", "");
	}
}

function GoLeft()
{
	let box = $("#GameBox");
	pos += 25;
	box.css("transform", "translate(" + pos + "%, 0)");
	
	currentGame--;
	
	if (currentGame <= 0)
	{
		$("#leftArrow").css("display", "none");
	}
	else
	{
		$("#rightArrow").css("display", "");
	}
}

function OnResize()
{
	if (window.screen.width >= "1000")
	{
		$("#Controls").css('display', "none");
		$("#GameBox").css('transform', "translate( 0, 0)");
	}
	else
	{
		$("#Controls").css('display', "");
		$("#GameBox").css('transform', "translate(" + pos + "%, 0)");
	}
}

function loadControls()
{
	let container = $("#Games");
	let controlBox = $("<div></div>");
	controlBox.attr('id', "Controls");
	container.append(controlBox);
	
	let leftArrow = $("<div></div>");
	leftArrow.attr('id', "leftArrow");
	leftArrow.attr('onclick', "GoLeft()");
	leftArrow.css('display', "none");
	leftArrow.html("<");
	controlBox.append(leftArrow);
	
	let rightArrow = $("<div></div>");
	rightArrow.attr('id', "rightArrow");
	rightArrow.attr('onclick', "GoRight()");
	rightArrow.html(">");
	controlBox.append(rightArrow);
	
	$(window).on("resize", OnResize);
}

document.addEventListener("DOMContentLoaded", loadControls);