
//Left = 0, Right = 1
var AnimePos = 1;

function loadAnimes()
{
	let container = $("#Animes");
	
	for (var i = 0; i < Anime_Data.length; i++)
	{
		let item = Anime_Data[i];
		let btn = addGenre(item.title, "Images/AnimeList/" + item.LogoPic, item.RefTitle, "Images/AnimeList/" + item.RefPic, item.bgColor, item.link, AnimePos);
		
		container.append(btn);
		
		if (AnimePos == 1)
		{
			AnimePos = 0;
		}
		else
		{
			AnimePos = 1;
		}
	}
}

document.addEventListener("DOMContentLoaded", loadAnimes);
