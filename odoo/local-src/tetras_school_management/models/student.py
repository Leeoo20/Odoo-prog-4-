from odoo import fields, models


class Student(models.Model):
    _name = "tetras.student"
    _description = "Tetras School Management - Student"
    _inherit = "tetras.contact"


    grade_ids = fields.One2many(
        string="Grades",
        comodel_name="tetras.grade",
        inverse_name="student_id",
        required=True,
    )

    classroom_id = fields.Many2one('tetras.classroom', string="Classroom")




