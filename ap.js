var inputtxt=document.querySelector("#input");
var outputtxt=document.querySelector("#output");
var trigger=document.querySelector("#bot");
var url="https://api.funtranslations.com/translate/orcish.json";
function constructurl(tt)
{
    return url+"?"+"text="+tt
}
function error()
{
    return alert("Server is not working")
}
function triggerpoint()
{
    var inputvalue=inputtxt.value;
    fetch(constructurl(inputvalue))
    .then(response=>response.json())
    .then(json=>
        {
            var outputt=json.contents.translated;
            outputtxt.innerText=outputt;
        })
        .catch(error)
        
};
trigger.addEventListener("click",triggerpoint)
