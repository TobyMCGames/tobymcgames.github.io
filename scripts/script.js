

function addMenuOption(title, link)
{
	let item = $('<li></li>');
	
	let btn = $('<a></a>');
	btn.attr("href", link);
	btn.append( document.createTextNode(title) );
	
	item.append( btn );
	
	return item;
}

function loadMenu()
{
	let menu = $('#myMenu');
	
	for (var i = 0; i < MenuOptions.length; i++)
	{
		let item = MenuOptions[i];
		
		let option = addMenuOption( item.title, item.link );
		
		menu.append( option );
	}
}

document.addEventListener("DOMContentLoaded", loadMenu);

function openMenu() {
  var x = $("#myMenu");
  if (x.hasClass('menu responsive')) {
	x.removeClass('menu responsive')
	x.addClass('menu')
	$('body').css("overflow-y", "scroll");
	x.css('top', "100%");
  } else {
	x.removeClass('menu')
	x.addClass('menu responsive')
	$('body').css("overflow-y", "Hidden");
	x.css('top', "0");
  }
}

function searching() {
	let val = $("#tags").val();
	var x;
	for (var i = 0; i < availableTags.length; i++)
	{
		if (val == availableTags[i])
		{
			x = i;
			break;
		}
	}
	if (x == 0){
		window.location.href = "index.html#" + TagId[x];
	}
	else if (x >= 1 && x < 3){
		window.location.href = "AboutMe.html#" + TagId[x];
	}
	else if (x >= 3 && x < 6){
		window.location.href = "Education.html#" + TagId[x];
	}
	else if (x == 7){
		window.location.href = "AnimeList.html#" + TagId[x];
	}
	else if (x == 8){
		window.location.href = "GameList.html#" + TagId[x];
	}
}

$(function() {
	$( "#tags" ).autocomplete({
		source: availableTags
		});
	});
	
//Add genre rows

function addGenre(title, logo, RefTitle, RefPic, bgColor, link, position)
{
	
	let btn = $('<a></a>');
	btn.attr('href', link);
	btn.attr('target', "_blank");
	
	let Anime = $('<div></div>');
	Anime.attr('class', "GenreOption");
	Anime.css('background-color', bgColor);
	
	btn.append(Anime);
	
	let RefContainer = $('<img>');
	RefContainer.attr('class', "GenreRefPic");
	RefContainer.attr('src', RefPic);
	RefContainer.attr('alt', RefTitle);
	
	if (position == 1)
	{
		RefContainer.css('margin-left', "100%");
		RefContainer.css('transform', "translate(-100%, 0)");
	}
	
	Anime.append(RefContainer);
	
	let LogoContainer =$('<img>');
	LogoContainer.attr('class', "GenreLogo");
	LogoContainer.attr('src', logo);
	LogoContainer.attr('alt', title);
	
	Anime.append(LogoContainer);
	
	let cover = $('<div></div>');
	cover.attr('class', "GenreCover");
	
	Anime.append(cover);
	
	return btn;
}