from odoo import api, fields, models


class TetrasManagement(models.Model):
    _name = "tetras.management"
    _description = "Tetras Management"

    @api.model
    def load_tetras_data(self):
        return {
            "tetras.student": self.env["tetras.student"].search_read(
                fields=["name", "email", "id", "birth_day", "phone", "classroom_id"]),
            "tetras.teacher": self.env["tetras.teacher"].search_read(
                fields=["name", "email", "id", "birth_day", "phone"]),
            "tetras.control": self.env["tetras.control"].search_read(
                fields=["name", "classroom_id", "students_grade_ids"]),
            "tetras.classroom": self.env["tetras.classroom"].search_read(
                fields=["name", "student_ids"]),
            "tetras.student.grade": self.env["tetras.student.grade"].search_read(
                fields=["grade", "student_id", "control_id"])

        }
