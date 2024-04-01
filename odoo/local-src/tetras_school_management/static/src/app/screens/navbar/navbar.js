/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";


export class Navbar extends Component {
    static template = "tetras_school_management.Navbar";

    setup() {
        this.tetras = useTetras();
    }

    changeScreen(ev){
        console.log(ev);
        const buttons = ev.target.offsetParent.querySelectorAll('a');
            buttons.forEach(button => {
                button.classList.remove('active');
            });



        const button = ev.explicitOriginalTarget;
        button.classList.add('active');
        this.tetras.showScreen(button.id);
    }

}

