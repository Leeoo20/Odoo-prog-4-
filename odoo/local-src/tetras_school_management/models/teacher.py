from odoo import fields, models


class Teacher(models.Model):
    _name = "tetras.teacher"
    _description = "Tetras School Management - Teacher"

    _inherit = "tetras.contact"

    diploma = fields.Char(string="Diploma")

