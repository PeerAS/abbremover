

document.addEventListener('DOMContentLoaded', function()
{
    console.log("loaded");
    RemoveABB();
});

function RemoveOnVG()
{
    var linkElements = document.getElementsByTagName("a");
    for (var index = 0; index < linkElements.length; index++) 
    {
        var element = linkElements[index];
        
        if(element.href.indexOf("Behring") !== -1 ||element.href.indexOf("behring") !== -1 || element.href.indexOf("breivik") !== -1)
        {
            InsertCatPicture(element, '.article-extract');
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
            InsertCatPicture(element, 'article');
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
            InsertCatPicture(element, '.df-article');
        }
    }   
}

function RemoveOnNRK()
{
    var linkElements = document.getElementsByTagName("a");
    for (var index = 0; index < linkElements.length; index++) {
        var element = linkElements[index];
        
         if(element.href.indexOf("Behring") !== -1 || element.href.indexOf("behring") !== -1 || element.href.indexOf("Breivik") !== -1 || element.href.indexOf("breivik") !== -1)
        {
            InsertCatPicture(element, '.article-extract');
        }
        
        NRKEdgeCases();
    }  
}

function NRKEdgeCases()
{
    var imageElements = document.getElementsByTagName("img");
    
    for (var index = 0; index < imageElements.length; index++) {
        var element = imageElements[index];
        
        if(element.alt.indexOf("Behring") !== -1 || element.alt.indexOf("behring") !== -1 || element.alt.indexOf("Breivik") !== -1 || element.alt.indexOf("breivik") !== -1)
        {
            InsertCatPicture(element, '.article-extract');
        }
    }
    
    var linkElements = document.getElementsByTagName("a");
    
    for (var index = 0; index < linkElements.length; index++) {
        var element = linkElements[index];
        
        if(element.href.indexOf("tv.nrk.no/direkte") !== -1)
        {
            var childElements = element.childNodes;
            
            for (var index2 = 0; index2 < childElements.length; index2++) {
                var element = childElements[index2];
                
                if(element.innerHTML.indexOf("Breivik"))
                {
                    InsertCatPicture(element, '.article-extract');
            
                }
            }
        }
        
    }
}

function InsertCatPicture(element, querySelector)
{
    var  articleElement = element.closest(querySelector);
            
    articleElement.innerHTML = GetCatImage();
}

function GetCatImage()
{
    var id = parseInt(Math.random() * 1000);
    
    if(id < 1)
        id = 1;
    return '<a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&api_key=NzMyNDg&image_id=' + id + '&type=gif" style="width:100%"></a>';
}


function RemoveABB()
{
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

else if(window.location.href.indexOf('nrk.no') !== -1)
{
    RemoveOnNRK();
}
}

