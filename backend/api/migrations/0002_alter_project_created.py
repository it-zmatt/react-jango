# Generated by Django 5.1.3 on 2024-11-11 00:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="project",
            name="created",
            field=models.DateTimeField(),
        ),
    ]
