//var whatIsIt string
//secret := "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K"
//sd, _ := base64.StdEncoding.DecodeString(secret)

const secret = "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K"
const decoded = window.atob(secret)
const sd = decoded.split("").reverse().join("")
console.log(sd)
