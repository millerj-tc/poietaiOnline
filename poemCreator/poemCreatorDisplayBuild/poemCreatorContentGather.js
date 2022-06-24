import {defaultPoemContent} from "./defaultPoemContent.js"

function GatherContentFlow(contentArr){

    // how to control frequencies to make it good?

    const $loc = this._GetPlayerLocation()

    this._AddCurrentLocationSources(contentArr,$loc);

    this._AddDefaultContent(contentArr);

    this._AddPlayerDomeContent(contentArr);

    this._ShuffleContent(contentArr);

    $contentArr = this._RollForContent(contentArr);
}

function _GetPlayerLocation(){

    let $loc

    return $loc
}

function _AddCurrentLocationSources(contentArr,loc){

}

function _AddDefaultContent(contentArr){

    const $defaultContent = defaultPoemContent;

    for(const c in $defaultContent){

        contentArr.push(c);
    }
}

function _AddPlayerDomeContent(contentArr){

    // coming soon
}

function _ShuffleContent(contentArr){

    console.error("shuffle content here");
}

function _RollForContent(contentArr){

    console.error("roll for content here"); // do it in a way that scales equally with any number of content without preferencing things that are shuffled to early in order (shuffling necessary?) AND allows multiples for things like "/"

    //

    let $returnArr;

    return $returnArr
}

// validate number of contents passed