const { forEachStudent } = require("../../../utils/testUtils")

forEachStudent(process.argv, __dirname, (entry, student) => {
  
    describe(`${student} entry on ex_a from chapter 3 - 9`, () => {
      it("should run fine", () => {
        entry.ex_a()
      })

      describe("error handling", () => {
        entry.ex_a()
      })
    })
  
    describe(`${student} entry on ex_b from chapter 3 - 9`, () => {
      it("should run fine", () => {
        entry.ex_b()
      })

      describe("error handling", () => {
        entry.ex_b()
      })
    })
  
    describe(`${student} entry on ex_c from chapter 3 - 9`, () => {
      it("should run fine", () => {
        entry.ex_c()
      })

      describe("error handling", () => {
        entry.ex_c()
      })
    })
  
    describe(`${student} entry on ex_d from chapter 3 - 9`, () => {
      it("should run fine", () => {
        entry.ex_d()
      })

      describe("error handling", () => {
        entry.ex_d()
      })
    })
  
    describe(`${student} entry on ex_e from chapter 3 - 9`, () => {
      it("should run fine", () => {
        entry.ex_e()
      })

      describe("error handling", () => {
        entry.ex_e()
      })
    })
  
    describe(`${student} entry on ex_f from chapter 3 - 9`, () => {
      it("should run fine", () => {
        entry.ex_f()
      })

      describe("error handling", () => {
        entry.ex_f()
      })
    })
})
