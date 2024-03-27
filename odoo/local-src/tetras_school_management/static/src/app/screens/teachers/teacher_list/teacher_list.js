/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { TeacherLine } from "@tetras_school_management/app/screens/teachers/teacher_list/teacher_line/teacher_line";
export class TeacherListScreen extends Component {
    static template = "tetras_school_management.TeacherListScreen";
    static components = { TeacherLine };


    setup() {
        this.tetras = useTetras();
    }

    async onTeacherClick(teacher) {
        this.tetras.showScreen("TeacherFormScreen", {"contact": teacher})
    }
}

registry.category("tetras_screens").add("TeacherListScreen", TeacherListScreen);
