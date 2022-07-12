import {GoToPassage,AppendToDivOnce,AddAllusionWordToSource,PermanentlyUnlockPassageSpan} from "./passageFX.js";
import {PoemTextContainsWord,PoemLength} from "./../poemEvaluation/poemFXConditions.js";

export function InitializeWorldPassages(){
    
    const playerName = window.gameHandler.playerName;
    
    const $passageHandler = window.gameHandler.passageHandler;
    
    const $characterHandler = window.gameHandler.characterHandler;
    
    /// HOT APARTMENT

    const hotApartment = $passageHandler.AddPassage("hotApartment");
    
    const $yselda = $characterHandler.AddCharacter("yselda","Yselda","she");
    $yselda.AddToPassagePresence("hotApartment");
    $yselda.AddPoemEvalMetric(5,PoemLength,"<=",15);
    $yselda.AddPoemEvalMetric(5,PoemLength,"<=",12);
    $yselda.AddPoemEvalMetric(5,PoemLength,"<=",10);
    $yselda.AddPoemEvalMetric(5,PoemLength,"<=",8);
    $yselda.AddPoemEvalMetric(3,PoemTextContainsWord,"—");
    $yselda.AddPoemEvalMetric(2,PoemTextContainsWord,".");
    $yselda.AddPoemEvalMetric(2,PoemTextContainsWord,",");
    $yselda.AddPoemEvalMetric(10,PoemTextContainsWord,"stones");
    $yselda.AddPoemEvalMetric(5,PoemTextContainsWord,"BERIN");
    $yselda.AddPoemEvalMetric(10,PoemTextContainsWord,"dirt");
    $yselda.AddPoemEvalMetric(15,PoemTextContainsWord,"tender");
    $yselda.AddPoemEvalMetric(5,PoemTextContainsWord,"glittering");
    $yselda.AddPoemEvalMetric(5,PoemTextContainsWord,"sweet");
    $yselda.AddPoemEvalMetric(10,PoemTextContainsWord,"wafting");
    $yselda.AddPoemEvalMetric(5,PoemTextContainsWord,"winks");
    $yselda.AddPoemEvalMetric(15,PoemTextContainsWord,"kindness");
    $yselda.AddPoemEvalMetric(15,PoemTextContainsWord,"barrowwillows");
    $yselda.AddPoemEvalMetric(-15,PoemTextContainsWord,"silver");
    $yselda.AddPoemEvalMetric(-15,PoemTextContainsWord,"old");
    $yselda.AddPoemEvalMetric(-15,PoemTextContainsWord,"grayed");
    $yselda.AddPoemEvalMetric(-100,PoemLength,"<=",4);

    hotApartment.SetText(`
        You smell sweat and sweet as you wake in a cozy place<br>
        -- one familiar for all the Poietai like yourself.<br><br>

        You get up from your little roll up mattress while trying not to wake your slumbering peers.<br><br>

        Yselda walks in with a smile and hands you a mug.<br>
        She waits patiently while you finishing sipping it,<br>
        admiring the birds out the window.<br><br>

        "You've gotten your winks and your water. Now pay me, itinerant one."<br><br>

        <span id='navigationOutputPlayerPoemSpeak'></span>

        <span id='yseldaResponse'></span>
        <span id='yseldaFavoriteLink'></span>
        <span id='courtyardButton'></span>[[Courtyard|hotApartmentCourtyard]]
        <p><i>Click the \\/ at the top of the screen to bring down the poem creation menu. When you're happy with what you've got, click Recite to share your poem with Yselda.</i></p>

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
    
    hotApartment.passageFxHandler.AddCharacterResponse("yselda",
        `"Oh yes, I know you see me and think 'ancient'. Now '{{keywords}}'. 'Chronowasted', some have even said!"<br><br>"I've heard it all, Clichéd ${playerName}. Maybe take it a different direction next time? Heh heh heh."`, ["silver","old","grayed"])
        .conditionHandler.AddConditionGroup("or")
        .AddCondition(PoemTextContainsWord,"poemCreator","silver")
        .AddCondition(PoemTextContainsWord,"poemCreator","old")
        .AddCondition(PoemTextContainsWord,"poemCreator","grayed");
    
    hotApartment.passageFxHandler.AddCharacterResponse("yselda",
        `"{{middle|And }} Berin got ahold of you, eh? One of my all time favorites and now they've inspired you too. It's wonderful to connect with people, isn't it?"`
    )
        .conditionHandler.AddConditionGroup("and")
        .AddCondition(PoemTextContainsWord,"poemCreator","BERIN");
    
    hotApartment.passageFxHandler.AddCharacterResponse("yselda",
        `"'Keys'{{last| you mentioned as well}}, yes, 'keys'...Wait a second, where are my keys? Oh my oh my...." Yselda scooters away.`
    )
        .conditionHandler.AddConditionGroup("and")
        .AddCondition(PoemTextContainsWord,"poemCreator","keys");
    
    hotApartment.passageFxHandler.AddCharacterDefaultResponse("yselda",
    `"I shall consider this, clever ${playerName}. Thank you for sharing with me."`);
    
    hotApartment.passageFxHandler.AddPassageFx(AppendToDivOnce,"courtyardButton",`[[Courtyard|hotApartmentCourtyard]]`);
    
    /// HOT APARTMENT COURTYARD
    
    const hotApartmentCourtyard = $passageHandler.AddPassage("hotApartmentCourtyard");
    
    const $berin = $characterHandler.AddCharacter("berin","Berin","they");
    $berin.AddToPassagePresence("hotApartmentCourtyard");
    $berin.AddPoemEvalMetric(-100,PoemLength,"<=",6);
    $berin.AddPoemEvalMetric(-15,PoemTextContainsWord,"burden");
    $berin.AddPoemEvalMetric(5,PoemLength,">=",8);
    $berin.AddPoemEvalMetric(5,PoemLength,">=",10);
    $berin.AddPoemEvalMetric(5,PoemLength,">=",12);
    $berin.AddPoemEvalMetric(5,PoemLength,">=",14);
    $berin.AddPoemEvalMetric(10,PoemLength,">=",16);
    $berin.AddPoemEvalMetric(10,PoemLength,">=",18);
    $berin.AddPoemEvalMetric(10,PoemLength,">=",20);
    $berin.AddPoemEvalMetric(8,PoemTextContainsWord,"pray");
    $berin.AddPoemEvalMetric(8,PoemTextContainsWord,"roll");
    $berin.AddPoemEvalMetric(8,PoemTextContainsWord,"wobbling");
    $berin.AddPoemEvalMetric(8,PoemTextContainsWord,"vigor");
    $berin.AddPoemEvalMetric(15,PoemTextContainsWord,"vim");
    $berin.AddPoemEvalMetric(4,PoemTextContainsWord,"teetering");
    $berin.AddPoemEvalMetric(8,PoemTextContainsWord,"glittering");
    $berin.AddPoemEvalMetric(10,PoemTextContainsWord,"licked");
    $berin.AddPoemEvalMetric(10,PoemTextContainsWord,"tender");
    $berin.AddPoemEvalMetric(10,PoemTextContainsWord,"ate");
    $berin.AddPoemEvalMetric(15,PoemTextContainsWord,"feet");
    $berin.AddPoemEvalMetric(30,PoemTextContainsWord,"BERIN");
    

    hotApartmentCourtyard.SetText(`
        You step into the courtyard of Yselda's inn. Bowed barrowwillow trees arc over the intricate brickwork of the courtyard's floor.<br>
        Small spindly tables wobble under the burdens that they unfalteringly bear.<br>
        Sitting at one of the tables is Berin. They are resplendent in rolls of fat, bushy beard hairs, and twinkling eye makeup and gesture you over.<br><br>

        "Regale me, Poietai, and I shall tell you something in return."<br><br>

        [[Back inside|yseldasKitchens]]<br><br>
        `);
    const hotApartmentCourtyardSrc = hotApartmentCourtyard.AddSource("hotApartmentCourtyard");
    
    hotApartmentCourtyardSrc.SetAllusionWords([
        {text:"barrowwillows",frequency:3},
        {text:"wobbling",frequency:3},
        {text:"burden",frequency:3},
        {text:"glittering",frequency:3},
        {text:"bricks",frequency:3},
        {text:"roll",frequency:3},
    ]);
    
    const $berinBarrowwillowResponse = hotApartmentCourtyard.passageFxHandler.AddCharacterResponse("berin",
        `
        "I love the barrowwillows here - they are probably hundreds of years old, brought over from Xosa before the cataclysm. Barrowwillow berries are poisonous of course, but if you make a tea of the stems you can see sights that are beyond description."
                                                               `,[]);
        const $barrowwillowsCon = $berinBarrowwillowResponse.conditionHandler.AddConditionGroup("and");
        $barrowwillowsCon.AddCondition(PoemTextContainsWord,"poemCreator","barrowwillows");
    
    hotApartmentCourtyard.passageFxHandler.AddCharacterResponse("berin",
        `
        "A poem about BERIN themself! There is no end to what one could say about Berin. The trick is to believe in yourself -- then you too can be an endless font. Perhaps you will get there some day -- BAHAHAHAHAHA -- I know you will! I look forward to it."
                                                               `,[])
        .conditionHandler.AddConditionGroup("and")
        .AddCondition(PoemTextContainsWord,"poemCreator","BERIN");
    
    hotApartmentCourtyard.passageFxHandler.AddCharacterResponse("berin",
        `
        "Brevity you've brought me {{last|as well}} I see, then I shall supply the wit -- BRAHAHAHAHOOHA!"<br><br>

        They take a sip of their tea. "This story begins about twelve years ago when I was living with my friend Brick. We were impetuous fools, in love and in debt, when we hatched a scheme to achieve renown and fame....."<br><br>

        You try to pay attention but are constantly distracted by the mesmerizing jiggles and jangles of their bangle-adorned body and the blinding flashes of light from their shining teeth. You have no idea how much time has passed.<br><br>

        "...which of course brought us to our ruin, but also closer together. I tell you, I will never provoke a Time Koala again."

        
                                                               `,[])
        .conditionHandler.AddConditionGroup("and")
        .AddCondition(PoemLength,"poemCreator","<=",5);
    
    hotApartmentCourtyard.passageFxHandler.AddCharacterDefaultResponse("berin",
        `
        "Lovely, Poietai, just lovely. For that I shall share a beautiful poem as well: BERIN!! Didn't you know? For one great as me, merely uttering my name IS poetry -- BAHAHAHAHA! Good fun, good fun."
                                                                      `);
    
    hotApartmentCourtyard.passageFxHandler.AddPassageFx(AddAllusionWordToSource,{text:"BERIN",frequency:3.25},hotApartmentCourtyardSrc)
        .conditionHandler.AddConditionGroup("and")
        .AddCondition(PoemLength,"poemCreator",">=",0)
    
    /// YSELDA'S KITCHENS
    
    const yseldasKitchens = $passageHandler.AddPassage("yseldasKitchens");

    yseldasKitchens.SetText(`
        Yselda is nowhere to be found inside, her kitchens alone are a maze of teetering piles of cookware and odd objects.<br>
        Pots and pans of belly-filling-loving-kindness simmer on the range, tended to by scores of dormouse assistants wearing tiny cook hats.<br>
        You admire their vim (perhaps even more their vigor!)<br>
        The smells wafting to your nose are pure enticement.
        They are too busy to speak to you at the moment, however.<br><br>

        <span id='navigationOutputPlayerPoemSpeak'></span>

        [[Courtyard|hotApartmentCourtyard]]

    `);

    const yseldasKitchensSrc = yseldasKitchens.AddSource("yseldasKitchens");

    yseldasKitchensSrc.SetAllusionWords([
        {text:"vigor",frequency:2},
        {text:"simmer",frequency:2},
        {text:"cooks",frequency:2},
        {text:"teetering",frequency:2},
        {text:"wafting",frequency:2},
        {text:"kindness",frequency:2},
        {text:"vim",frequency:2},
    ]);
}