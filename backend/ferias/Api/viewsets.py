from rest_framework import viewsets
from ferias.Api import serializers
from ferias import models

class FuncionarioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FuncionarioSerializer
    queryset = models.Funcionario.objects.all()