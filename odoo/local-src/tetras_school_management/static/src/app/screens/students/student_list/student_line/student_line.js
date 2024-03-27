/** @odoo-module */

import { Component } from "@odoo/owl";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";


export class StudentLine extends Component {
    static template = "tetras_school_management.StudentLine";

    static props = {
        name: String,
        studentId: Number,
        onClick: { type: Function, optional: true },
    };

    setup() {
        this.tetras = useTetras();
    }

    delete_student(ev){
        this.tetras.orm.call('tetras.student', 'unlink_student', [this.props.studentId])
        .then(() => {
            this.tetras.load_server_data();
        });
    }


}

