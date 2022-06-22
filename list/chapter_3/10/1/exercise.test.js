const { forEachStudent } = require("../../../utils/testUtils")

forEachStudent(process.argv, __dirname, (entry, student) => {
  describe(`${student} entry on ex_1 from chapter 3.10`, () => {
    it("should run fine", () => {
      entry.ex_1()
    })
  })
})



