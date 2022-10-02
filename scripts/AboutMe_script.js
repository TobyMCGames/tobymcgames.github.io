
function loadProjects()
{
	let container = $("#Projects");
	
	for (var i = 0; i < Project_Data.length; i++)
	{
		let item = Project_Data[i];
		
		let Project = $('<div></div>');
		Project.attr('class', "descriptive_Video")
		
		let Vid = $('<video autoplay muted loop></video>')
		let VidSrc = $('<source>')
		VidSrc.attr('src', item.link);
		
		Vid.append(VidSrc);
		Vid.append('Your browser does not support the video tag.');
		
		Project.append(Vid);
		
		let description = $('<div></div>');
		description.attr('class', "vid-description");
		
		description.append(item.description);
		
		Project.append(description);
		
		container.append(Project);
	}
}

document.addEventListener("DOMContentLoaded", loadProjects);
