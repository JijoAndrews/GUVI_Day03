

var obj1={name:"Person 1",age:5};
var obj2={age:5,name:"Person 1"};

function compareobjects(object1,object2)
{

    var jsonobj=JSON.stringify(object1);
    var jsonobj1=JSON.stringify(object2);
    
    var finalobj=JSON.parse(jsonobj);
    var finalobj1=JSON.parse(jsonobj1);

    var isobjectaresame=true;

    if(jsonobj.length!==jsonobj1.length)
    {
        return  "objects are not same";
    }else
    {
        for(var element in finalobj)
        {
            if(finalobj[element]!==finalobj1[element])     
            {
                console.log(finalobj[element],finalobj1[element]);
                isobjectaresame=false;
                break;
            }
        }
        return isobjectaresame;
    }
}

console.log("check if the objects are same:"+compareobjects(obj1,obj2));