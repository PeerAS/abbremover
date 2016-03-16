

function RemoveOnVG()
{
    var linkElements = document.getElementsByTagName("a");
    for (var index = 0; index < linkElements.length; index++) 
    {
        var element = linkElements[index];
        
        if(element.href.indexOf("Behring") !== -1 ||element.href.indexOf("behring") !== -1 || element.href.indexOf("breivik") !== -1)
        {
            var  articleElement = element.closest('.article-extract');
            
            articleElement.innerHTML = GetCatImage();
        }
    }
}

function RemoveOnDagbladet()
{    
    var linkElements = document.getElementsByTagName("a");
    for (var index = 0; index < linkElements.length; index++) {
        var element = linkElements[index];
        
         if(element.href.indexOf("Behring") !== -1 || element.href.indexOf("behring") !== -1 || element.href.indexOf("Breivik") !== -1 || element.href.indexOf("breivik") !== -1)
        {
            var  articleElement = element.closest('article');
            
            articleElement.innerHTML = GetCatImage();
        }
    }
}

function RemoveOnAftenposten()
{    
    var linkElements = document.getElementsByTagName("a");
    for (var index = 0; index < linkElements.length; index++) {
        var element = linkElements[index];
        
         if(element.href.indexOf("Behring") !== -1 || element.href.indexOf("behring") !== -1 || element.href.indexOf("Breivik") !== -1 || element.href.indexOf("breivik") !== -1)
        {
            var  articleElement = element.closest('.df-article');
            
            articleElement.innerHTML = GetCatImage();
        }
    }   
}

function GetCatImage()
{
    var id = parseInt(Math.random() * 1000);
    
    if(id < 1)
        id = 1;
    return '<a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&api_key=NzMyNDg&image_id=' + id + '&type=gif"></a>';
}

if(window.location.href.indexOf("vg.no") !== -1)
{
    RemoveOnVG();
}

else if(window.location.href.indexOf('dagbladet.no') !== -1)
{
    RemoveOnDagbladet();
}

else if(window.location.href.indexOf('aftenposten.no') !== -1)
{
    RemoveOnAftenposten();
}