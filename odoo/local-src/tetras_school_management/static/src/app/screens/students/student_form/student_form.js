/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import {ContactFormScreen} from "@tetras_school_management/app/screens/contacts/contact_form/contact_form";


export class StudentFormScreen extends ContactFormScreen {
    static template = "tetras_school_management.StudentFormScreen";

    onStudentChange(ev){
        if(ev.key === 'Enter'){
        console.log(this.props)
            this.tetras.orm.call('tetras.student', 'write_student', [this.props.contact.id, this.props.contact]);
        }
    }


}

registry.category("tetras_screens").add("StudentFormScreen", StudentFormScreen);
