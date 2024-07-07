// import describe from 'describe';

// import describe

// describe
// typeof describe

// "C:\Users\rickm\.wallaby\tutorial\wallaby-tutorial\node_modules"

// import * as mod1 from  "node_modules\mocha\index.js";
// import * as mod1 from  "C:\Users\rickm\.wallaby\tutorial\wallaby-tutorial\node_modules"

import * as mod1 from "C:\Users\rickm\node_modules\mocha\lib\mocha.js"

// mod1

console.log(mod1)

// 00_quick_start\calculator.test.js

class Calculator {
  add(a, b) {
    return a + b
  }

  multiply(a, b) {
    if (a >=1 && b >=1) {
      return a * b
    }

    return 0
  }
}


describe('calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator()
    expect(calculator.add(4, 3)).toBe(7)
    calculator.add(150, 300) //?
  })

  it('multiplies numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(0, 2)).toBe(0);
    expect(calculator.multiply(2, 0)).toBe(0);
    expect(calculator.multiply(2, 2)).toBe(4);
  })
})