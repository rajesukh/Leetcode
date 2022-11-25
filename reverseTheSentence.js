let str = "rajesh "


function reverseStr(str){
    if(str.length==0) return ""
    return reverseStr(str.slice(1)) +str[0]
}
console.log(reverseStr(str))

function reverseWords(sent){
    let words = sent.split(" ")
    for(let i=0;i<words.length;i++){
        words[i] = reverseStr(words[i])
    }
    return words.join()
}

console.log(reverseWords("Rajesh is good man"))