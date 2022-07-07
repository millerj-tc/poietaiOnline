import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

export function HeardPoemToCharacterDatabaseEntry(poemText,characterId) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    reciterName: window.gameHandler.playerName,
    poemText: poemText,
    memorizationDate: Date.now(),

  };

  // Get a key for a new Post.
  const newPoemKey = push(child(ref(db), 'heardPoems ')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/characters/' + characterId + `/heardPoems/` + newPoemKey + `/` ] = postData;

  return update(ref(db), updates);
}

export function GetCharacterHeardPoems(characterId){
    
    const db = getDatabase();
    const poems = ref(db, 'characters/' + characterId + '/heardPoems');
    onValue(poems, (snapshot) => {
        const data = snapshot.val();

        _PassPoemsToCharacterObj(data);
    });
}

function _PassPoemsToCharacterObj(data){
    
    const poemObjArr = data;

    for(const poemObjString in poemObjArr){
        
        const pulledPoemObj = poemObjArr[poemObjString];
        
        console.error("this needs to feed it into the right character from gameHandler.charArray")
    
        //window.gameHandler.poemMemoryHandler.AddHeardPoem(pulledPoemObj.poemText,poemObjString);
    }
}