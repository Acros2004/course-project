xmlhttp = new XMLHttpRequest()
xmlhttp.open('GET', 'xml\\content.xml', false)
xmlhttp.send()
xml = xmlhttp.responseXML;
let xml_fighters = xml.querySelectorAll("FIGHTERS");
document.addEventListener("DOMContentLoaded", desc(document.querySelector(".bginfo").id));
function desc(name)
{
for (i = 0; i < xml_fighters.length; i++)
{
if (name == xml_fighters[i].querySelector("NAME").innerHTML)
{
document.querySelector(".history").innerHTML = xml_fighters[i].querySelector("HISTORY").innerHTML;
document.querySelector(".h").innerHTML = xml_fighters[i].querySelector("H").innerHTML;
}
}
console.log(document.querySelector(".history").innerHTML)
}