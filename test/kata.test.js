import greeting from "greeting"

describe("greeting", () => {
  it("returns 'Hello, Bob' when receives 'Bob'", () => {
    // Arrange
    const name = "Bob"
    //Act
    const result = greeting.sayHi([name])
    //Assert
    expect(result).toEqual("Hello, Bob.")
  })

  it("returns 'HELLO JERRY!' when recieves 'JERRY'", () => {
    const name = "JERRY"

    const result = greeting.sayHi([name])

    expect(result).toEqual("HELLO JERRY!")
  })
 
  it("returns 'Hello, Jill and Jane.' when recieves Jill Jane", () => {

    const nameOne = "Jill"
    const nameTwo = "Jane"

    const result = greeting.sayHi([nameOne, nameTwo])

    expect(result).toEqual("Hello, Jill and Jane.")
  })

  it("returns 'Hello, Jill, Jane and John.' when recieves Jill Jane John", () => {

   
    const namesArray = ["Jill", "Jane", "John"]

    const result = greeting.sayHi( namesArray)

    expect(result).toEqual("Hello, Jill, Jane and John.")
  })
  it("returns 'Hello, Amy and Charlotte. AND HELLO BRIAN!' when recieves Amy", "BRIAN", "Charlotte", () => {


    const namesArray = ["Jill", "Jane", "John"]

    const result = greeting.sayHi(namesArray)

    expect(result).toEqual("Hello, Jill, Jane and John.")
  })
})

