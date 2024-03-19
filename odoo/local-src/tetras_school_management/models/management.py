from odoo import api, fields, models


class TetrasManagement(models.Model):
    _name = "tetras.management"
    _description = "Tetras Management"

    @api.model
    def load_tetras_data(self):
        return {
            "tetras.student": self.env["tetras.student"].search_read(
                fields=["name", "email", "id", "birth_day", "phone"]),
            "tetras.teacher": self.env["tetras.teacher"].search_read(
                fields=["name", "email", "id", "birth_day", "phone"]),
            "tetras.control": self.env["tetras.control"].search_read(
                fields=["name"]
            )

        }
