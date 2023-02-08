// const names: Array<string> = [];

// A promise knows which data it returns
const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("This is done!")
    }, 5000)
})

promise.then(data => console.log(data))

// Here generic types lock in a type
function merge<T extends object, U extends object>(objA: object, objB: object) {

    return Object.assign(objA, objB)

}


const mergedObj = merge({name: "james"}, {age: 23})
console.log(mergedObj)

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {

    return obj[key]

}

extractAndConvert({name: "TypeScript"}, "name")

class DataStorage<T extends number | string> {
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

interface CourseGoal {

    title: string,
    description: string,
    completeUnit: Date

}

function courseGoal(title: string, description: string, completeUnit: Date): CourseGoal {

    // Partial allows my interface's properties to be optional
    let courseGoal: Partial<CourseGoal> = {}

    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUnit = completeUnit

    return <CourseGoal>courseGoal
}

courseGoal("TypeScript crash course.", "Learn TypeScript with this 15hrs course.", new Date())

const lang: Readonly<string[]> = ["JS", "TS", "CPP"]

console.log(lang)