
function addSlide(title, link, ImgSrc)
{
	
	let container = $('<div></div>');
	container.attr('class', "img-container");
	
	let btn = $('<a></a>');
	btn.attr('href', link);
	
	container.append(btn);
	
	let img = $('<img>');
	img.attr('src', "Images/Home/" + ImgSrc);
	img.attr('alt', title);
	
	btn.append(img);
	
	return container;
}

function loadSlider()
{
	let slider_Container = $("#slider1");
	let slider_images = $('<div></div>');
	slider_images.attr('class', "slide-images");
	
	slider_Container.append(slider_images);
	
	for (var i = 0; i < slider_Data.length; i++)
	{
		let item = slider_Data[i];
		let newDiv = addSlide(item.name, item.link, item.imgName);
		
		slider_images.append( newDiv );
	}
}

document.addEventListener("DOMContentLoaded", loadSlider);

function loadIntro() 
{
	let intro_box = $("#intro");
	
	let header = $('<h1></h1>');
	header.append( document.createTextNode(Intro_Data[0].title) );
	
	intro_box.append( header );
	
	let desc = $('<div></div>');
	desc.attr('class', "description");
	desc.append( document.createTextNode(Intro_Data[0].desc) );
	
	intro_box.append( desc );
	
}

document.addEventListener("DOMContentLoaded", loadIntro);
