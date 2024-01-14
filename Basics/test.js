const name = `Atharv`
const lastName =`Bambarkar`
console.log("🚀 ~ name:", name[0])

console.log("🚀 ~ lastName:", lastName)


const newString = `   Atharrvvv`
console.log("🚀 ~ newString:", newString.trim())
console.log("🚀 ~ newString:", newString.trimStart())



let url=`https://atharv.com/atharv%20bambarkar`

console.log("🚀 ~ url:", url.includes('atharv'))
console.log("🚀 ~ url:", url.replace('%20','_'))

const a =`Atharv  `

console.log("🚀 ~ a:", a.__proto__)
console.log("🚀 ~ a:", a.blink())
console.log("🚀 ~ a:", a.split(` `,3))   //split(seperater,limit)
const ab = a.trim()


if(ab  === name){
    console.log(`Matched`)
}
else{

    console.log(`not matched`)
}


