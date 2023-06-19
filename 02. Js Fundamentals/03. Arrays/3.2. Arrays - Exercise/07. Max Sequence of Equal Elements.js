function solve(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentElement = Number(arr[i]);
        let currentSequence = [currentElement];

        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = Number(arr[j]);

            if (nextElement === currentElement) {
                currentSequence.push(nextElement)
            } else {
                break;
            }

        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}

