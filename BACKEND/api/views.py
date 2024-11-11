from django.shortcuts import render # type: ignore
from django.http import HttpResponse # type: ignore
from .models import * # type: ignore
from rest_framework import viewsets, permissions # type: ignore
from .serializers import * # type: ignore
from rest_framework.response import Response # type: ignore

# Create your views here.
def home(request):
    return HttpResponse("Hello, Django!")

class ProjectViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.IsAuthenticated] 
    queryset = Project.objects.all()
    serializer = ProjectSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer(queryset, many=True)
        return Response(serializer.data)


    def create(self, request):
        serializer = self.serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        project = self.queryset.get(id=pk)
        serializer = self.serializer(project)
        return Response(serializer.data)

    def update(self, request, pk=None):
        project = self.queryset.get(id=pk)
        serializer = self.serializer(instance=project, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)  


    def destroy(self, request, pk=None):
        project = self.queryset.get(id=pk)
        project.delete()
        return Response(status=204)