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

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

// Getting only strings
const textStorage = new DataStorage<string>();
textStorage.addItem("JavaScript")
textStorage.addItem("NodeJS")
textStorage.removeItem("NodeJS")
console.log(textStorage.getItems())


//Getting only numbers
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1337)
numberStorage.addItem(101)
numberStorage.removeItem(101)
console.log(numberStorage.getItems())
