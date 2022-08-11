export default {
  sayHi(namesArray) {

    if(namesArray.length > 2) {
      let string = `Hello, `
      for (let name = 0; name <= namesArray.length; name++) {
        const element = namesArray[name];
        string += element + ", "
        
      }
    string += ` and ${namesArray[-1]}`
      console.log(string)
    }

    if (namesArray[1]) {
      return `Hello, ${namesArray[0]} and ${namesArray[1]}.`
    }

    if (namesArray[0] === namesArray[0].toUpperCase()) {
      return `HELLO ${namesArray[0]}!`
    }
    return `Hello, ${namesArray[0]}.`
  }
}

