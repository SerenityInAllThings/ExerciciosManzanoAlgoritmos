const { forEachStudent } = require("../../../utils/testUtils")

forEachStudent(process.argv, __dirname, (entry, student) => {
  
    describe(`${student} entry on ex_a from chapter 3 - 10`, () => {
      it("should run fine", () => {
        entry.ex_a()
      })

      describe("error handling", () => {
        entry.ex_a()
      })
    })
  
    describe(`${student} entry on ex_b from chapter 3 - 10`, () => {
      it("should run fine", () => {
        entry.ex_b()
      })

      describe("error handling", () => {
        entry.ex_b()
      })
    })
  
    describe(`${student} entry on ex_c from chapter 3 - 10`, () => {
      it("should run fine", () => {
        entry.ex_c()
      })

      describe("error handling", () => {
        entry.ex_c()
      })
    })
})