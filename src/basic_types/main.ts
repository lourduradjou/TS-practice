let num: number = 2
let str: string = 'helo'
let lifeGood: boolean = true
let anyFood: any = 'helo'

// union type
let unionType: number | string = 2
// unionType = true (will throw error)

const sum = (a: number, b : string) => {
    return a + b
}

// regex
let regex: RegExp = /hello/