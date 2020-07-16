# kamelott_citation_to_slack

## Description

Cet app à pour but de permettre à un utilisateur d'envoyer une citation random provenant de la série kamelott dans l'application dans un channel préalablement choisit

## Technology

### Back-end

Pour le back-end expressJs est utilisé
    body-parser pour parser les requête
    axios pour fetch et post data
    
### Front-end

Pour le front-end React est utilisé
    Material-ui pour les composant préconstruits
    axios pour le fetch et post de data
    
### API
  
l'api Slack est utilisé pour envoyer à l'ai de webhooks les message dans slack
l'api api-kaamelott est utilisé pour récupérer les citations

### Setup si vous cloner le projet

1) Vous devrez posséder un compte Slack, et avoir la possibilité de pouvoir créer une app et dans éditer les droits

2) lors du processus de création de l'app choisissez l'option "incoming webhooks"

3) activate incoming webhooks

4) votre app est quasiment prête maintenant sur le menus à gauche cliquer sur OAuth & Permissions

5) vous pouvez choisir de donné plus de droit si nécessaire mais s'est inutile au final

6) cliquer sur le bouton au dessus de la page Install app to workspace

7) accepter tout, choisissez le canal dans lequel l'app aura le droit d'écrire, voilà votre app est installé

8) maintenant vous pouvez cloner le projet ou le télécharger

9) ouvrer l'app rendez-vous d'abord à la racine du dossier et faites `npm install`

10) ouvrez le terminal faites `cd client` ensuite `npm install`

10) toutes les dépendances sont installer

11) maintenant retourner dans votre app slack dans l'onglet incoming webhooks descendez tout en bas et copié le webhook url que vous avez générer en créant l'app

12) créer un fichier .env à la racine du dossier et coller ceci `SLACK_WEB_HOOK='paste-your-web-hook-url-here'`

13) vous aurez peux être besoin de la dépendance `dotenv` si jamais sa ne fonctionne pas faite `npm install dotenv` 

14) voilà maintenant vous pourrez envoyez des citations kamelott dans slack d'un simple clique, rien ne vous empêche de déployer votre app sur firebase ou heroku (hébergeur gratuit) en modifiant les url nécessaires dans les fichiers.

Référence:

Github du projet api-kamelott : [api-kamelott](https://github.com/sin0light/api-kaamelott)
