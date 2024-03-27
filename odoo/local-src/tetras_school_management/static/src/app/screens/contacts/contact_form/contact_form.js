/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";


export class ContactFormScreen extends Component {
    static template = "tetras_school_management.ContactFormScreen";

    setup() {
        this.tetras = useTetras();
        this.state = useState({isOpen: true});


    }

     onContactChange(ev){
        console.log("Vous devez hériter cette vue");
//        if(ev.key === 'Enter'){
//            this.tetras.orm.call('tetras.contact', 'write_contact', [this.props.contact.id, this.props.contact]);
//        }
    }




}

