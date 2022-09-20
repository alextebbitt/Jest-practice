export default {
  sayHi(namesArray) {
    let phrase = "Hello,"
    let nonCapitalNames = []
    let capitalNames = []

    for (let name of namesArray) {
      if (namesArray.length > 2 && name === name.toUpperCase()) {
        capitalNames.push(name)
      } else {
        nonCapitalNames.push(name)
      }

      // for (let name = 0; name < namesArray.length; name++) {
      //   const element = namesArray[name];
      //   string += element + ", "
      // }
    }
    if(nonCapitalNames.length === 2 && capitalNames.length > 0) {

     return `${phrase} ${nonCapitalNames[0]} and ${nonCapitalNames[1]}. AND HELLO ${capitalNames[0]}!`
    }
    if (namesArray.length > 2) {
      let string = `Hello, `

      for (let name = 0; name < namesArray.length - 1; name++) {
        const element = namesArray[name];
        string += element + ", "

      }
      let lastComma = string.lastIndexOf(",");
      let final = string.substring(0, lastComma)
      final += ` and ${namesArray.at(-1)}.`
      return final
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

