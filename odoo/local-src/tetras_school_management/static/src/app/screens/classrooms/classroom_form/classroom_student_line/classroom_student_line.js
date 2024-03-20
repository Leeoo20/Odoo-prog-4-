/** @odoo-module */

import { Component } from "@odoo/owl";


export class ClassroomStudentLine extends Component {
    static template = "tetras_school_management.ClassroomStudentLine";

    static props = {
        name: String,
        classroomId: Number,
    };
}

