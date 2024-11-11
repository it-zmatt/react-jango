from django.db import models # type: ignore

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created = models.DateField()

    def __str__(self):
        return self.title