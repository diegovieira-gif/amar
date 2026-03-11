#!/bin/bash
# Script de deploy para o app AMAR

echo "Iniciando deploy do AMAR..."

# Puxar código mais recente
git pull origin main

# Construir imagem e recriar conteiners
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Limpar imagens órfãs para otimizar espaço
docker image prune -f

echo "Deploy finalizado!"
