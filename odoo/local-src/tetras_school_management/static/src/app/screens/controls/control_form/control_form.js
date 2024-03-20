/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { ControlStudentLine } from "@tetras_school_management/app/screens/controls/control_form/control_student_line/control_student_line";


/*

ce qu'il reste à faire :

Faire une vue pour chaque controle : et créer un tableau avec tous les utilisateurs

*/
export class ControlFormScreen extends Component {
    static template = "tetras_school_management.ControlFormScreen";
    static components = { ControlStudentLine };

    setup() {
        this.tetras = useTetras();
    }

}

registry.category("tetras_screens").add("ControlFormScreen", ControlFormScreen);
