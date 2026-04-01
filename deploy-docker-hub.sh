#!/bin/bash

# FÖY HTML Ekranlar - Docker Hub Deployment Script
# Bu script projeyi Docker Hub'a yükler

echo "🚀 FÖY HTML Ekranlar Docker Deployment"
echo "======================================="
echo ""

# Docker Hub kullanıcı adını sor
read -p "Docker Hub kullanıcı adınız: " DOCKER_USERNAME

if [ -z "$DOCKER_USERNAME" ]; then
    echo "❌ Docker Hub kullanıcı adı gerekli!"
    exit 1
fi

IMAGE_NAME="$DOCKER_USERNAME/foy-html-ekranlar"
VERSION="latest"

echo ""
echo "📦 Docker image oluşturuluyor..."
docker build -t $IMAGE_NAME:$VERSION .

if [ $? -ne 0 ]; then
    echo "❌ Docker build başarısız!"
    exit 1
fi

echo ""
echo "✅ Image oluşturuldu: $IMAGE_NAME:$VERSION"
echo ""
echo "🔐 Docker Hub'a login olunuyor..."
docker login

if [ $? -ne 0 ]; then
    echo "❌ Docker Hub login başarısız!"
    exit 1
fi

echo ""
echo "📤 Docker Hub'a push ediliyor..."
docker push $IMAGE_NAME:$VERSION

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment başarılı!"
    echo ""
    echo "📋 Dockploy'da kullanılacak bilgiler:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Image Name: $IMAGE_NAME:$VERSION"
    echo "Port: 80"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🎯 Dockploy'da:"
    echo "1. 'Create Service' > 'Docker Image' seçin"
    echo "2. Image: $IMAGE_NAME:$VERSION"
    echo "3. Port: 80"
    echo "4. Deploy butonuna basın"
else
    echo "❌ Push başarısız!"
    exit 1
fi
