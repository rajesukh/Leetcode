let animals = [1,5,2,3,6,2,4,5,2,5,2]

function frequencyOfAnimals(animals) {

    let frequencyCount = {};

    for (let animal of animals) {
        if (frequencyCount[animal]) {
            frequencyCount[animal] += 1;

        }
        else {
            frequencyCount[animal] = 1;
        }

       
    }
    console.log(frequencyCount);
}

console.log(frequencyOfAnimals(animals))