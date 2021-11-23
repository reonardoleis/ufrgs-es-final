ES N - Trabalho Prático - Etapa III

# Instruções para executar
1. Ter NodeJS & npm instalado em ambiente Linux.
2. Rodar o comando ```npm install``` na raíz deste projeto (irá instalar as dependências)
3. Garantir que a porta 3000 do dispositivo está livre. No terminal linux, digite o comando ```sudo lsof -i:3000```, caso nada seja mostrado, a porta está livre. Caso algo esteja rodando, encerre o processo ou execute o comando ```fuser -k 3000/tcp``` para terminar o processo.
4. Rodar o arquivo executável bash ```smart_day``` na raíz deste projeto, será iniciado tanto o back-end quanto o front-end, para acessar o front-end basta acessar http://localhost:3000 ou o endereço que foi iniciado.

# API
Estamos fornecendo a coleção das rotas da API para o Insomnia (Insomnia_Collection.json) para facilitar os testes diretamente no back-end caso desejado.
