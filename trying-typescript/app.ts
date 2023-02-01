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

class Department {
    public name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, department: string) {
        this.name = department;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        // validation etc
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("u1", 'Accounting');

class ItDepartment extends Department {

    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }

}

const engineering = new ItDepartment("u2", ["Abdallah"])