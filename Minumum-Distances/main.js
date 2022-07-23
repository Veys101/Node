function minimumDistance(a) {
    const numbers = new Set();

    a.forEach(element => {
        numbers.add(element)
    });
    
    let minimumDistance = []
    
    for(const number of numbers.values()) {
        var indexes = []
        for(let j = 0; j < a.length; j++){
            if(number == a[j]){
                indexes.push(j)
            }
        }
    
        if(indexes.length == 2) minimumDistance.push(Math.abs(indexes[0] - indexes[1]))
    }
    
    if(minimumDistance.length == 0){
        return -1
    } else {
        return Math.min.apply(null, minimumDistance)
    }
}

const a = [3, 2, 1, 2, 3]

console.log(minimumDistance(a))


