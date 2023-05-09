/* 
* ASSIGNMENT 2 fn
*/
function drawDiamond(length){

    //added max length for diamond
    if(isNaN(length) || !length || length < 0 || length % 2 != 1 || length > 41) {
        console.error("Invalid number!")
        return false
    }
    let symb = "*"
    let space = " "
    let rep = 0
    let base = [(symb+space).repeat(length).trim()]

    //start printing the shape
    let i = length - 2;
    while(i >= 0){
        let newLineSpacing = (space+space).repeat(++rep)
        //ugly way of removing extra space
        let newLine = newLineSpacing + (symb+space).repeat((i)) + newLineSpacing.substr(0,newLineSpacing.length-1)
        base.unshift(newLine)
        base.push(newLine)
        i = i - 2
    }

    base.forEach(line => {console.log(line)})
    return true
}