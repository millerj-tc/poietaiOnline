import {GoToPassage,AppendToDiv} from "./passageFX.js";
import {PoemTextContainsWord} from "./../poemEvaluation/poemFXConditions.js";

export function InitializeWorldPassages(){
    const $passageHandler = window.gameHandler.passageHandler;

    const hotApartment = $passageHandler.AddPassage("hotApartment");

    hotApartment.SetText(`
        You smell sweat and sweet as you wake in a cozy place<br>
        -- one familiar for all the Poietai like yourself.<br><br>

        Yselda walks in with a smile and hands you a mug.<br>
        She waits patiently while you finishing sipping it,<br>
        admiring the birds out the window.<br><br>

        "You've gotten your winks and your water. Now pay me, itinerant one."<br><br>

        <span id='navigationOutputPlayerPoemSpeak'></span>

        <span id='yseldaResponse'></span>

        [[South|hotApartmentCourtyard]]

        <i>Click the \\/ at the top of the screen to bring down the poem creation menu. When you're happy with what you've got, click Recite to share your poem with Yselda.</i>

    `);

    const hotApartmentSrc = hotApartment.AddSource("hotApartment");

    hotApartmentSrc.SetAllusionWords([
        {text:"sweet",frequency:2.5},
        {text:"sweat",frequency:2.5},
        {text:"winks",frequency:2.5},
        {text:"sipping",frequency:2.5},
        {text:"old",frequency:3},
        {text:"silver",frequency:3},
    ]);
    
    hotApartment.passageFxHandler.AddPassageFx(AppendToDiv,"yseldaResponse",
        `"'Silver','old','ancient','chronowasted' -- I've heard it all, Cliched Poietai. Is that really all you can conjure? Heh heh heh."<br><br>

        [[North|hotApartmentCourtyard]]`                                          
    )
        .conditionHandler.AddConditionGroup("or")
        .AddCondition(PoemTextContainsWord,"silver")
        .AddCondition(PoemTextContainsWord,"old")
        .AddCondition(PoemTextContainsWord,"grayed");
    
    const hotApartmentCourtyard = $passageHandler.AddPassage("hotApartmentCourtyard");

    hotApartmentCourtyard.SetText(`
        `);

}