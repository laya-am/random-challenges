import { add, subtract, multiply, divide } from ".";

test("adds numbers 2 and 3 correctly", ()=>{
    const result= add(2,3);
    expect(result).toBe(5)
});

test("returns a negative value if the greater argument is negative", ()=>{
    const result= add(-4,3);
    expect(result).toBeLessThan(0)
});

test("returns 'You should not do this!' if called with 0 as second argument", ()=> {
    const result= divide(4,0);
    expect(result).toBe('You should not do this!')
});