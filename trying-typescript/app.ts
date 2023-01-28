function printResult(num: number): void {
    console.log("Result: ", num)
}

printResult(add(1, 2))


function addAnotherHandle(n1: number, n2: number, cb: (num: number) => void) {
    const res = n1 + n2;
    cb(res)
}

addAnotherHandle(1, 2, (res) => console.log(res))

function generateError(message: string, code: number): never {
    throw {message, code}
}

generateError("An error occurred", 500)
