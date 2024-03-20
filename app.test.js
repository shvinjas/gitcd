//app.test.js
const selection =require("./app")


describe("Find selection status",()=>{
    test("multiply 50 * 10",()=>{
        expect(selection(50,10)).toBe(500);
    });
});