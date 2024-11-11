from rest_framework import serializers # type: ignore
from .models import *

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'