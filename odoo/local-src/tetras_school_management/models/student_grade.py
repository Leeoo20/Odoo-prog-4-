from odoo import fields, models, api


class StudentGrade(models.Model):
    _name = 'tetras.student.grade'
    _description = 'Tetras School Management - Student Grade'

    grade = fields.Float(string="Grade", required=True)
    student_id = fields.Many2one(
        string="Student",
        comodel_name="tetras.student",
        required=True,
    )
    control_id = fields.Many2one(
        string="Control",
        comodel_name="tetras.control",
        required=True,
    )



