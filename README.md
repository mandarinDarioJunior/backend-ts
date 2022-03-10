# Passo a Passo:
## 1
  - Configurei o repositório;

## 2
  - Criei o server; `@shared/infra/http/server.ts`

## 3
  - Instalei o dotenv;
  - Adicionei a variável de ambiente PORT; `@shared/config/app.ts`
  - Importei a config no server; `@shared/infra/http/server.ts`

## 4
  - Mudei a instância do express e rotas no server.ts para o app.ts; `@shared/infra/http/app.ts`
  - Criei um router; `@shared/infra/http/routes/index.ts`

====================================================================

# Requisitos:
### RF:
  - O usuário deverá confirmar a placa e seu CPF;

### RN:
  -  Criar uma rota do tipo POST para receber a requisição;
  -  Fazer uma requisição GET para API - SYSTEC;
   >[!ROTA]
   >
   >`https://gerente-api.inforlube.com/Gerente.Api/api/service/validate/%7bplate%7d/%7bdocument%7d/%7b`

  -  Validar última troca de óleo < 30 dias;
   >[!ATENÇÃO]
   >
   > Verificar se elegível == true e troca de óleo (serviceDate) < 30 dias!

  -  Devolver a resposta se elegível ou não;

### RNF:
  - Utilizar o AXIOS;
#
## Mandarin:
  ### RN:
    - As informações do usuário caso participando da promoção devem ser guardadas no DB da mandarin;