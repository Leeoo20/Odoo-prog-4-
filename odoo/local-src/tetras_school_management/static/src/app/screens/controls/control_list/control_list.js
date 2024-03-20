/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { ControlLine } from "@tetras_school_management/app/screens/controls/control_list/control_line/control_line";


export class ControlListScreen extends Component {

    static template = "tetras_school_management.ControlListScreen";
    static components = { ControlLine };


    setup() {
        this.tetras = useTetras();
    }

    async onControlClick(control) {
        this.tetras.showScreen("ControlFormScreen", {"control": control})
    }
}

registry.category("tetras_screens").add("ControlListScreen", ControlListScreen);
