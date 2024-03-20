/** @odoo-module */

import { Component } from "@odoo/owl";


export class ControlStudentLine extends Component {
    static template = "tetras_school_management.ControlStudentLine";

    static props = {
        name: String,
        classroomId: Number,
    };
}

