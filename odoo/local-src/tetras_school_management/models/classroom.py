from odoo import fields, models


class Classroom(models.Model):
    _name = "tetras.classroom"
    _description = "Tetras School Management - Classroom"

    # si pas de name
    #_rec_name = "number"
    #number = fields.Integer(string="Number", required=True)
    name = fields.Char(string="Name", required=True)
    student_ids = fields.One2many('tetras.student', 'classroom_id', string="Students")





