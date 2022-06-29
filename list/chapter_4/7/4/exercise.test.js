const { forEachStudent } = require("../../../utils/testUtils")

const notNumericValues = [
  [undefined],
  [null],
  ['texto'], 
  ['c'], 
  [{}], 
  [{nome: 'pet'}], 
  [['a', 'rr', 'ay']]
]

forEachStudent(process.argv, __dirname, (entry, student) => {
  
    describe(`${student} entry on ex_a from chapter 4 - 7`, () => {
      it('should export exercise entry', () => {
        expect(entry.ex_a).toBeDefined();
      })
      
      it.each([
        [10, 15, 5],
        [4, 10, 6],
        [10, 4, 6],
        [1, 2, 1]
      ])('should add %i with %i to get %i result', (first, second, sum) => {
        expect(entry.ex_a(first, second)).toBe(sum)
      })

      describe("error handling", () => {
        it.each(notNumericValues)('should return NaN when the first parameter is not numeric', notNumeric => {
          expect(entry.ex_a(notNumeric, 10)).toBeNaN()
        })

        it.each(notNumericValues)('should return NaN when the second parameter is not numeric', notNumeric => {
          expect(entry.ex_a(10, notNumeric)).toBeNaN()
        })

        it('should throw error if first parameter is numeric but negative', () => {
          expect(() => entry.ex_a(-1, 10)).toThrow()
        })

        it('should throw error if first parameter is numeric but not positive', () => {
          expect(() => entry.ex_a(0, 10)).toThrow()
        })

        it('should throw error if first parameter is floating number', () => {
          expect(() => entry.ex_a(5.5, 10)).toThrow()
        })

        it('should throw error if second parameter is numeric but negative', () => {
          expect(() => entry.ex_a(10, -1)).toThrow()
        })

        it('should throw error if second parameter is numeric but not positive', () => {
          expect(() => entry.ex_a(10, 0)).toThrow()
        })

        it('should throw error if second parameter is floating number', () => {
          expect(() => entry.ex_a(10, 5.5)).toThrow()
        })
      })
    })
  
    describe(`${student} entry on ex_b from chapter 4 - 7`, () => {
      it('should export exercise entry', () => {
        expect(entry.ex_b).toBeDefined();
      })

      it.each([
        [1, 1],
        [0, 0],
        [-1, 1],
        [-15, 15],
      ])("should transform %i into %i", (value, absoluteValue) => {
        expect(entry.ex_b(value)).toBe(absoluteValue)
      })

      describe("error handling", () => {
        it.each(notNumericValues)('should return NaN when not numeric parameter is provided', (notNumeric) => {
          expect(entry.ex_b(notNumeric)).toBeNaN()
        })

        it('should throw when floating number parameter is provided', () => {
          expect(() => entry.ex_b(10.5)).toThrow()
        })
      })
    })
  
    describe(`${student} entry on ex_c from chapter 4 - 7`, () => {
      it('should export exercise entry', () => {
        expect(entry.ex_c).toBeDefined();
      })

      it("should run fine", () => {
        entry.ex_c()
      })

      describe("error handling", () => {
        entry.ex_c()
      })
    })
  
    describe(`${student} entry on ex_d from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_d()
      })

      describe("error handling", () => {
        entry.ex_d()
      })
    })
  
    describe(`${student} entry on ex_e from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_e()
      })

      describe("error handling", () => {
        entry.ex_e()
      })
    })
  
    describe(`${student} entry on ex_f from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_f()
      })

      describe("error handling", () => {
        entry.ex_f()
      })
    })
  
    describe(`${student} entry on ex_g from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_g()
      })

      describe("error handling", () => {
        entry.ex_g()
      })
    })
  
    describe(`${student} entry on ex_h from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_h()
      })

      describe("error handling", () => {
        entry.ex_h()
      })
    })
  
    describe(`${student} entry on ex_i from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_i()
      })

      describe("error handling", () => {
        entry.ex_i()
      })
    })
  
    describe(`${student} entry on ex_j from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_j()
      })

      describe("error handling", () => {
        entry.ex_j()
      })
    })
  
    describe(`${student} entry on ex_k from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_k()
      })

      describe("error handling", () => {
        entry.ex_k()
      })
    })
  
    describe(`${student} entry on ex_l from chapter 4 - 7`, () => {
      it("should run fine", () => {
        entry.ex_l()
      })

      describe("error handling", () => {
        entry.ex_l()
      })
    })
})
