const b = "G"
let happy = true
let bCharArray = Array.from(b)

if(bCharArray.includes('_')) {
    bCharArray.sort()

    for(let i = 1; i < bCharArray.length - 1; i++) {
        if(bCharArray[i] == '_') continue
    
        if ((bCharArray[i] != bCharArray[i-1] && bCharArray[i] != bCharArray[i+1])) {
            happy = false
        } 
    }

   
}else {

    for(let i = 1; i < bCharArray.length - 1; i++) {
        
        if ((bCharArray[i] != bCharArray[i-1] && bCharArray[i] != bCharArray[i+1])) {
            happy = false
        } 
    }


}

if(bCharArray.length > 1){
    if(bCharArray[0] != '_' && bCharArray[1] != bCharArray[0]) happy = false
    if(bCharArray[bCharArray.length - 1] != '_' && bCharArray[bCharArray.length - 1] != bCharArray[bCharArray.length - 2]) happy = false
} else {
    if(bCharArray[0] != '_' ) happy = false
}



console.log(happy ? "YES" : "NO")