/** @odoo-module */
import { Reactive } from "@web/core/utils/reactive";
import { registry } from "@web/core/registry";

export class TetrasStore extends Reactive {
    mainScreen = { name: null, component: null };
    static serviceDependencies = [
        "orm",
    ];
    constructor() {
        super();
        this.ready = this.setup(...arguments).then(() => this);
    }

    async setup(env, { orm }) {
        this.env = env;
        this.orm = orm;

        await this.load_server_data();

        this.showScreen("MainScreen");
    }

    async load_server_data() {
        const loadedData = await this.orm.silent.call("tetras.management", "load_tetras_data", []);
        await this._processData(loadedData);
    }

    processClassroom(){
        for (let classroom of this.classrooms) {
            classroom.students = this.students.filter(student => student.classroom_id[0] === classroom.id);
        }
    }

    processControl(){
         for (let control of this.controls) {
            let studentGrades = this.studentGrades.filter(x => x.control_id[0] === control.id);
            for (let studentGrade of studentGrades) {
                let student = this.students.find(x => x.id === studentGrade.student_id[0]);
                let grade = studentGrade.grade;
                if (!control.studentGrade){
                    control.studentGrade = [];
                }
                control.studentGrade.push({ student, grade });
            }
         }

    }



    async _processData(loadedData) {
        this.students = loadedData["tetras.student"];
        this.teachers = loadedData["tetras.teacher"];
        this.classrooms = loadedData["tetras.classroom"];
        this.controls = loadedData["tetras.control"];
        this.studentGrades = loadedData["tetras.student.grade"];
        this.processClassroom();
        this.processControl();

        console.log(this.controls);
    }

    showScreen(name, props) {
        const component = registry.category("tetras_screens").get(name);
        this.mainScreen = { component, props };
    }
}

export const tetrasService = {
    dependencies: TetrasStore.serviceDependencies,
    async start(env, deps) {
        return new TetrasStore(env, deps).ready;
    },
};

registry.category("services").add("tetras", tetrasService);
