/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import {ContactFormScreen} from "@tetras_school_management/app/screens/contacts/contact_form/contact_form";
import {Dropdown} from "@web/core/dropdown/dropdown";
import {DropdownItem} from "@web/core/dropdown/dropdown_item";

export class StudentFormScreen extends ContactFormScreen {
    static template = "tetras_school_management.StudentFormScreen";

    static components = {Dropdown,DropdownItem}

    onStudentChange(ev){
    console.log(this);
        if(ev.key === 'Enter'){
        console.log(this.props)
            this.tetras.orm.call('tetras.student', 'write_student', [this.props.contact.id, this.props.contact]);
        }
    }

    onChangeClassroom(ev){
        this.props.contact.classroom_id = ev.id;
        this.tetras.orm.call('tetras.student', 'write_student', [this.props.contact.id, this.props.contact]);
        this.props.contact.classroom_id = [ev.id, ev.name];
    }




}

registry.category("tetras_screens").add("StudentFormScreen", StudentFormScreen);
