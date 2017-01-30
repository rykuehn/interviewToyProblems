function findRotationPoint(words) {
    const firstWord = words[0];

    var floorIndex = 0;
    var ceilingIndex = words.length - 1;
    
    while (floorIndex < ceilingIndex) {

        var midIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

        if (words[midIndex] > firstWord) {
 
            floorIndex = midIndex;
        } else {
            ceilingIndex = midIndex;
        }

        if (floorIndex + 1 === ceilingIndex) {
            break;
        }
    }

    return ceilingIndex;
}

//console.log(findRotationPoint(['g', 'h', 'i', 'j', 'k', 'a', 'b']));