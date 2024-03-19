from odoo import fields, models, api


class Control(models.Model):
    _name = "tetras.control"
    _description = "Tetras School Management - Control"

    name = fields.Char(string="Name", required=True)
    date = fields.Date(string="Date")

    classroom_id = fields.Many2one("tetras.classroom", string="Classroom", required=True)
    students_grade_ids = fields.One2many('tetras.student.grade', inverse_name='control_id', string='Students Grades')

    @api.onchange('classroom_id')
    def _onchange_control(self):
        if self.classroom_id:
            self.students_grade_ids = [(5, 0, 0)]

            for student in self.classroom_id.student_ids:
                self.students_grade_ids = [(0, 0, {
                    'student_id': student.id,
                    'grade': 0,
                })]
