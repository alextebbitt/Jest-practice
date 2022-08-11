export default {
  sayHi(namesArray) {

    if (namesArray.length > 2) {
      let string = `Hello, `
      console.log("names array length is ", namesArray.length - 1)
      console.log("names array is ", namesArray)
      for (let name = 0; name < namesArray.length - 1; name++) {
        const element = namesArray[name];
        string += element + ", "
        
      }
      let lastComma = string.lastIndexOf(",");
      let a = string.substring(0,lastComma)
      a += ` and ${namesArray.at(-1)}.`
      console.log("remove comma is", a)
      console.log("hey", namesArray.at(-1))
      console.log("string", string)
      return a
    }

    else if (namesArray.length === 2) {
      return `Hello, ${namesArray[0]} and ${namesArray[1]}.`
    }

    else if (namesArray[0] === namesArray[0].toUpperCase()) {
      return `HELLO ${namesArray[0]}!`
    } else {
      if (namesArray.length === 1) {
        return `Hello, ${namesArray[0]}.`
      }
    }
  }
}

