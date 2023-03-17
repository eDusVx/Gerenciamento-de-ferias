from django.db import models

class Funcionario(models.Model):
    matricula = models.CharField(max_length=6, null=False)
    nome = models.CharField(max_length=100)
    contrato = models.CharField(max_length=3, choices=[('CLT', 'CLT'), ('PJ', 'PJ')])
    data_admissao = models.DateField()
    email_constitucional = models.CharField(max_length=100)
    gmail = models.CharField(max_length=100)
    senha = models.CharField(max_length=20)
    cargo = models.CharField(max_length=20)
    matricula_gestor = models.ForeignKey('self', on_delete=models.SET_NULL, null=True)

class Notificacao(models.Model):
    id = models.BigIntegerField(primary_key=True, null=False)
    mensagem = models.CharField(max_length=200)
    data_envio = models.DateField()
    visto = models.BooleanField()

class Solicitacao(models.Model):
    id = models.BigIntegerField(primary_key=True, null=False)
    matricula_funcionario = models.ForeignKey(Funcionario, on_delete=models.CASCADE)
    data_inicio = models.DateField()
    data_fim = models.DateField()
    status = models.CharField(max_length=8, choices=[('pendente', 'Pendente'), ('recusado', 'Recusado'), ('aprovado', 'Aprovado')])
    data_criacao = models.DateField()
    antecipacao_salario = models.BooleanField()
    notificacoes = models.ForeignKey(Notificacao, on_delete=models.CASCADE)

