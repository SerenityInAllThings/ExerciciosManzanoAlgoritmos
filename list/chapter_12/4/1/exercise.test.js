const { forEachStudent } = require("../../../utils/testUtils")

forEachStudent(process.argv, __dirname, (entry, student) => {
  
    describe(`${student} entry on ex_a from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_a()
      })

      describe("error handling", () => {
        entry.ex_a()
      })
    })
  
    describe(`${student} entry on ex_b from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_b()
      })

      describe("error handling", () => {
        entry.ex_b()
      })
    })
  
    describe(`${student} entry on ex_c from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_c()
      })

      describe("error handling", () => {
        entry.ex_c()
      })
    })
  
    describe(`${student} entry on ex_d from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_d()
      })

      describe("error handling", () => {
        entry.ex_d()
      })
    })
  
    describe(`${student} entry on ex_e from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_e()
      })

      describe("error handling", () => {
        entry.ex_e()
      })
    })
  
    describe(`${student} entry on ex_f from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_f()
      })

      describe("error handling", () => {
        entry.ex_f()
      })
    })
  
    describe(`${student} entry on ex_g from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_g()
      })

      describe("error handling", () => {
        entry.ex_g()
      })
    })
  
    describe(`${student} entry on ex_h from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_h()
      })

      describe("error handling", () => {
        entry.ex_h()
      })
    })
  
    describe(`${student} entry on ex_i from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_i()
      })

      describe("error handling", () => {
        entry.ex_i()
      })
    })
  
    describe(`${student} entry on ex_j from chapter 12 - 4`, () => {
      it("should run fine", () => {
        entry.ex_j()
      })

      describe("error handling", () => {
        entry.ex_j()
      })
    })
})
