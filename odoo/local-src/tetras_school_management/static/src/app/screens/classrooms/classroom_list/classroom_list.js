/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { ClassroomLine } from "@tetras_school_management/app/screens/classrooms/classroom_list/classroom_line/classroom_line";


export class ClassroomListScreen extends Component {

    static template = "tetras_school_management.ClassroomListScreen";
    static components = { ClassroomLine };


    setup() {
        this.tetras = useTetras();
    }

    async onClassroomClick(classroom) {
        this.tetras.showScreen("ClassroomFormScreen", {"classroom": classroom})
    }
}

registry.category("tetras_screens").add("ClassroomListScreen", ClassroomListScreen);
