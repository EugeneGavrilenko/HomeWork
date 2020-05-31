class SchoolStaff implements ISchool{
    constructor(public schoolName: string, public position: string, public salary: number) {}

    public getPosAndSalary(): OneOfEmployee {
        return {
            position: this.position,
            salary: this.salary,
        }
    }

    public getSchoolName(name: string): string {
        return this.schoolName;
    }
}

const Eugene = new SchoolStaff('Hillel', 'FrontEnd Developer', 500);

type OneOfEmployee = {
    position: string,
    salary: number,
}

interface ISchool {
    getSchoolName(name: string): string;
}

enum Positions {
    boss = 'Vasia',
    hrManager = 'Zina',
    sales = 'Akakiy',
}
