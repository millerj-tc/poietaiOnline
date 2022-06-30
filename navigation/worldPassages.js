import {passage} from "./passage.js";

const hotApartment = new passage("hotApartment");

hotApartment.SetText(`
    You smell sweat and sweet as you wake in a cozy place\n
    -- one familiar for all the Poietai like yourself.\n\n
    
    Yselda walks in with a smile and hands you a mug.\n
    She waits patiently while you finishing sipping it,\n
    admiring the birds out the window.\n\n

    "You've gotten your winks and your water. Now pay me, itinerant one."\n\n

`);

const hotApartmentSrc = hotApartment.AddSource("hotApartment");

hotApartmentSrc.SetAllusionWords([
    {text:"sweet",frequency:2.5},
    {text:"sweat",frequency:2.5},
    {text:"wink",frequency:2.5},
    {text:"sipping",frequency:2.5},
    {text:"old",frequency:3.5},
    {text:"silver",frequency:3.5},
]);