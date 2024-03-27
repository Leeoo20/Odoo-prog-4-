/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import {ContactFormScreen} from "@tetras_school_management/app/screens/contacts/contact_form/contact_form";

export class TeacherFormScreen extends ContactFormScreen {
    static template = "tetras_school_management.TeacherFormScreen";


     onTeacherChange(ev){
     console.log(this.props);
        if(ev.key === 'Enter'){
            this.tetras.orm.call('tetras.teacher', 'write_teacher', [this.props.contact.id, this.props.contact]);
        }
    }



}

registry.category("tetras_screens").add("TeacherFormScreen", TeacherFormScreen);
