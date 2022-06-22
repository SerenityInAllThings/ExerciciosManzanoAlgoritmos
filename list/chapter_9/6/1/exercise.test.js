const { forEachStudent } = require("../../../utils/testUtils")

forEachStudent(process.argv, __dirname, (entry, student) => {
  
    describe(`${student} entry on ex_1 from chapter 9 - 6`, () => {
      it("should run fine", () => {
        entry.ex_1()
      })

      describe("error handling", () => {
        entry.ex_1()
      })
    })
})
