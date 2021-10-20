# Bot Discord SnowSog

### INTRODUCTION

Le projet Snowsog est un bot discord disponible en open-source. Il permet de connaitre en temps réel la météo en détail, dans n'importe quel ville du globe.
Le développement de ce projet est uniquement en JavaScript, il utilise différentes librairies :
* Discord.js
* OpenWeather-Apis
<hr>

### TODO

- [x] Le faire répondre
- [x] Récup le weather token
- [X] Afficher les infos d'une ville préenregistré
- [X] Afficher le vent + direction
- [X] Pour ensuite le configurer avec notre commande de ville (Ex. "!weather Brest")
- [ ] Ajouter si possible plusieurs villes en une seule commande
- [ ] Faire un docker
- [X] Arborescence fonctionnel et propres de l'intégralité des fichiers
- [X] Commenter le code
<hr>

### DEPLOIEMENT

Instructions à suivre afin d'ajouter le bot sur votre serveur discord :

1. Cliquez sur le lien ci-dessous pour inviter le bot : https://discord.com/api/oauth2/authorize?client_id=892673157188689932&permissions=0&scope=bot

2. Choisissez votre serveur, puis cliquez sur "Continuer".

3. Choisissez les permissions accordés. <stong>Warning</strong> : Il est recommandé d'accorder toutes les permissions au bot.
  
4. Cliquez sur "Autoriser".

<hr>

### INSTALLATION

Instruction à suivre afin de configurer l'environnement de fonctionnement du bot

### Prérequis

* Node.js version 14.18.0 ou plus 
```bash
npm install node@14.18.0
```
* Mettre votre discord en Developer Mode 
```bash
User Setting > Advanced > Developer Mode
```
* Avoir crée un bot discord dans votre portail personnel d'applications 
```bash
https://discord.com/developers/applications
```
* Installer dotenv
```bash
npm dotenv
```
* Installer l'API OpenWeather
```bash
npm install openweather-apis
```

### Exécution

* Commande pour exécuter le programme

```bash
npm start
```

### Coté Discord

* Pour voir les commandes disponibles sur le bot, tapez
```bash
!help
```