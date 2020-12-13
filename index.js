class Calc {
    #accumulator
    constructor(initialValue = 0){
        this.#accumulator = initialValue
    }

    add(value){
        this.#accumulator +=value
        return this
    }
    sub(value){
        this.#accumulator -=value
        return this
    }
    mul(value){
        this.#accumulator *= value
        return this
    }
    del(value){
        this.#accumulator =this.#accumulator/value
        return this
    }
    get(){
        return this.#accumulator
    }
}

const calc = new Calc()

console.log(calc.add(100).sub(50).mul(4).get())