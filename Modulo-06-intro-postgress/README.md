#### 1

docker run --name postgres -e POSTGRES_USER=seuuser -e POSTGRES_PASSWORD=suasenha -e POSTGRES_DB=seudb -p 5432:5432 -d postgres

docker ps
docker exec -it postgres /bin/bash

#### 2

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## ----- MONGODB

#### 3

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4

#### 4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

#### 5 - criar usuário

docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('seudb').createUser({user: 'dayanmonteiro', pwd: 'minhasenha', roles: [{role: 'readWrite', db: 'seudb'}]})"

<!--

Parar de rodar os containers
docker stop $(docker ps -a -q)

Excluir todos os contêineres parados:
docker rm $(docker ps -a -q)

-->
