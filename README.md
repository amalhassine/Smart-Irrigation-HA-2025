
# Smart Farming Control

Interface web hébergée sur Vercel pour contrôler la pompe et le buzzer d’un système IoT Smart Farming.

## Fichiers importants

- `/pages/index.js` : interface web
- `/pages/api/commandes.js` : API REST pour les commandes
- `/public/background.png` : image d’arrière-plan
- `/styles/Home.module.css` : styles CSS

## Déploiement

1. Pousser ce projet sur GitHub
2. Lier à Vercel pour le déploiement automatique
3. L’ESP32 interroge `/api/commandes` pour récupérer les états actuels
