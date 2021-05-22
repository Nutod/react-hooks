let valueObject = {
  inc: 0,

  toString() {
    return Number(++this.inc)
  },

  valueOf() {
    return this.inc
  },
}

function Increment() {
  if (!(this instanceof Increment)) {
    return new Increment()
  }

  return valueObject
}

let increment = new Increment()
let increment2 = Increment()

console.log(increment == +increment2)
console.log(`${increment}`)
console.log(`${increment}`)
console.log(`${increment}`)
