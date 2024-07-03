var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload=function()
{
    var result=JSON.parse(request.response);
    displayflags(result);
    displaycountries(result);
}


function displayflags(resultinput)
{
    console.log("-----------Country Flags------------");

    for(var i=0;i<resultinput.length;i++)
    {            
        if(resultinput[i].capital!=undefined)
        {
            console.log("Capital flag:",resultinput[i].flag);
        }else
        {
            console.log("CAPITAL not available","Capital flag:",resultinput[i].flag);
        }

    }

}


function displaycountries(resultinput)
{
    console.log("-----------Countries,Region,Subregion,Flags-----------");

    for(var i=0;i<resultinput.length;i++)
        {            
           if(resultinput[i].capital!=undefined)
            {
                console.log("Capital:",resultinput[i].capital,"Region:",resultinput[i].region,"Subregion:",resultinput[i].subregion,"flag:",resultinput[i].flag,"Current population:",resultinput[i].population); 
            }else
            {
                console.log("CAPITAL not available","Region:",resultinput[i].region,"Subregion:",resultinput[i].subregion,"flag:",resultinput[i].flag,"Current population:",resultinput[i].population);
            }
    
        }


}