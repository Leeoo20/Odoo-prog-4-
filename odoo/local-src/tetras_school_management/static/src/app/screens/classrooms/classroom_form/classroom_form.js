/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { ClassroomStudentLine } from "@tetras_school_management/app/screens/classrooms/classroom_form/classroom_student_line/classroom_student_line";

export class ClassroomFormScreen extends Component {
    static template = "tetras_school_management.ClassroomFormScreen";
    static components = { ClassroomStudentLine };

    setup() {
        this.tetras = useTetras();
    }

}

registry.category("tetras_screens").add("ClassroomFormScreen", ClassroomFormScreen);
