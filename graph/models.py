from django.db import models

class DataPoints(models.Model):
    x_coordinate = models.FloatField()
    y_coordinate = models.FloatField()
    