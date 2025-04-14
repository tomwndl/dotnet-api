<!-- .slide: class="transition-bg-sfeir-1" -->

# Introduction

##==##
# Objectifs

- Introduction aux API Web
- Rappels REST
- Développement d'une API Web avec .NET
- Bonnes pratiques pour les API Web
- TP : Dévellopement d'une Todo list

Notes:
- 

##==##
<!-- .slide: class="two-column" data-background="#2c3c4e"-->


# Qu'est-ce qu'une API Web ?

- Application Programming Interface
- Interface logicielle qui permet à des applications de communiquer entre elles
- Expose des fonctionnalités ou des données sous forme de services accessibles par des requêtes
- Accessible via HTTP/HTTPS
- Peut être privé ou publique 
<!-- .element: class="list-fragment" -->

##--##
![Timeline usage](../../assets/images/api.png)

##==##

# Pourquoi utiliser des APIs
- **Réutilisabilité** : Les fonctionnalités exposées via une API peuvent être utilisées par plusieurs applications.
- **Interopérabilité** : Permet aux systèmes de différentes technologies de communiquer.
- **Séparation des responsabilités** : Les API permettent de séparer le backend (logique métier) du frontend (interface utilisateur).
- **Architecteur micro-services**
<!-- .element: class="list-fragment" -->


##==##

# Concepts clés

- **Client** : Une application ou un utilisateur envoie une requête à l'API.
- **Serveur** : L'API traite la requête et retourne une réponse 
- **Protocole HTTP/HTTPS** 
- **Format de données** : JSON
- **Endpoint** : URL représentant une ressource/action dans l'API (api/Users/123 => retourne l'utilisateur avec l'id 123)
<!-- .element: class="list-fragment" -->
