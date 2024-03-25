/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { StudentLine } from "@tetras_school_management/app/screens/students/student_list/student_line/student_line";
export class StudentListScreen extends Component {
    static template = "tetras_school_management.StudentListScreen";
    static components = { StudentLine };


    setup() {
        this.tetras = useTetras();
    }

    async onStudentClick(student) {
        this.tetras.showScreen("StudentFormScreen", {"student": student})
    }

     async onStudentCreate(ev){
        if(ev.key === 'Enter'){
        const name = ev.target.value.trim();
        if(name){
        const student = {
            name: name,
            classroom_id: [],
            grade_ids: [],
        }

            await this.tetras.orm.call("tetras.student", "create_student", [student]);

            this.tetras.load_server_data();
        }
        }
    }




}

registry.category("tetras_screens").add("StudentListScreen", StudentListScreen);
