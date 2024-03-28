from odoo import fields, models, api


class Student(models.Model):
    _name = "tetras.student"
    _description = "Tetras School Management - Student"
    _inherit = "tetras.contact"


    grade_ids = fields.One2many(
        string="Grades",
        comodel_name="tetras.grade",
        inverse_name="student_id",
        required=True
    )

    classroom_id = fields.Many2one('tetras.classroom', string="Classroom")

    average_grade = fields.Float(string="Average Grade", compute="_compute_average_grade", store=True)

    @api.depends('grade_ids.grade')
    def _compute_average_grade(self):
        for student in self:
            total_grade = sum(grade.grade for grade in student.grade_ids)
            if student.grade_ids:
                student.average_grade = total_grade / len(student.grade_ids)
            else:
                student.average_grade = 0.0


    @api.model
    def create_student(self, vals_list):
        return self.create(vals_list)
    def write_student(self, vals_list):
        return self.write(vals_list)

    def unlink_student(self):
        return self.unlink()




