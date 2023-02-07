// const names: Array<string> = [];

// A promise knows which data it returns
const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("This is done!")
    }, 5000)
})

promise.then(data => console.log(data))

function merge<T extends object, U extends object>(objA: object, objB: object) {

    return Object.assign(objA, objB)

}

const mergedObj = merge({name: "james"}, {age: 23})

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {

    return obj[key]

}

extractAndConvert({name: "TypeScript"}, "name")