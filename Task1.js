const names = {
    a: "Elena",
    b: "Vladimir",
    c: "Svetlana"
}
function func(names){
    for (let key in names){
        if (names.hasOwnProperty(key)){
            console.log (key, names [key])
        }
    }
}
func(names)