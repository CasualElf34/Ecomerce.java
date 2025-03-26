# Ecommerce Website

## Description
Ecommerce Website est une application Java développée avec Spring Boot, permettant de gérer un système de commerce électronique. Elle utilise les concepts de programmation orientée objet tels que l'abstraction, l'encapsulation, l'héritage et le polymorphisme pour structurer le code de manière efficace et maintenable.

## Structure du projet
Le projet est organisé comme suit :

```
ecommerce-website
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── commerce
│   │   │           └── ecommerce
│   │   │               ├── EcommerceApplication.java
│   │   │               ├── controllers
│   │   │               │   ├── ProductController.java
│   │   │               │   ├── ViewController.java
│   │   │               │   └── UserController.java
│   │   │               ├── models
│   │   │               │   ├── Product.java
│   │   │               │   ├── User.java
│   │   │               │   └── Order.java
│   │   │               ├── repositories
│   │   │               │   ├── ProductRepository.java
│   │   │               │   ├── UserRepository.java
│   │   │               │   └── OrderRepository.java
│   │   │               ├── services
│   │   │               │   ├── ProductService.java
│   │   │               │   ├── UserService.java
│   │   │               │   └── OrderService.java
│   │   └── resources
│   │       ├── static
│   │       │   ├── css
│   │       │   │   └── styles.css
│   │       │   ├── js
│   │       │   │   ├── app.js
│   │       │   │   └── add-product.js
│   │       ├── templates
│   │       │   ├── index.html
│   │       │   └── add-product.html
│   │       └── application.properties
├── .gitignore
├── pom.xml
└── README.md
```

## Fonctionnalités
- **Gestion des Produits** : Création, lecture, mise à jour et suppression de produits via `ProductController`.
- **Gestion des Utilisateurs** : Représentation des utilisateurs avec la classe `User`.
- **Gestion des Commandes** : Suivi des commandes passées par les utilisateurs avec la classe `Order`.
- **Accès aux Données** : Utilisation de `ProductRepository`, `UserRepository` et `OrderRepository` pour les opérations CRUD.
- **Logique Métier** : Implémentation de la logique métier dans `ProductService`, `UserService` et `OrderService`, utilisant l'héritage et le polymorphisme.
- **Interface Utilisateur** : Pages HTML pour afficher et ajouter des produits, avec des fichiers CSS et JavaScript pour l'interactivité.

## Configuration
Pour exécuter l'application, assurez-vous d'avoir Java et Maven installés. Modifiez le fichier `application.properties` pour configurer les paramètres de connexion à la base de données.

## Installation
1. Clonez le dépôt : `git clone <url-du-depot>`
2. Accédez au répertoire du projet : `cd ecommerce-website`
3. Installez les dépendances : `mvn install`
4. Exécutez l'application : `mvn spring-boot:run`

## Auteurs
- Guillaume Maël    - Développeur principal
- Cartagena Lucas   - Développeur
- Vidal Lois        - Développeur 

## License
Ce projet est sous licence MIT.