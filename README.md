# Mise en contexte

Dans ce projet, nous allons mettre en place un réseau de petits commerçants qui peut être déployé de manière décentralisée et qui permet aux clients finaux de trouver et d'acheter des produits proposés par plusieurs commerçants via une seule instance. Nous avons developpé un site web pour simmulé les differentes interactions possible, et avons theorisé un protocole de communication securisé entre les differents commerçants, les clients et le site web.

# choix des technologie  
## Framework PHP Laravel
Laravel est un framework PHP populaire qui fournit un environnement de développement web moderne et flexible. Il facilite la création de sites web dynamiques et peut être utilisé pour développer une boutique en ligne décentralisée.

## Blockchain Ethereum
Ethereum est une plateforme de blockchain publique qui permet la création et l'exécution de contrats intelligents. Cela peut être utilisé pour développer une boutique en ligne décentralisée où les transactions sont enregistrées sur une blockchain publique pour garantir la transparence et l'immuabilité des données.

## IPFS (InterPlanetary File System)
IPFS est un système de fichiers décentralisé qui peut être utilisé pour stocker et distribuer des données sur le réseau. Il peut être utilisé pour stocker les images et les informations produits sur la boutique en ligne décentralisée.

## Web3.js
Web3.js est une bibliothèque JavaScript qui facilite la communication entre une application web et une blockchain Ethereum. Cela peut être utilisé pour interagir avec la blockchain Ethereum et les contrats intelligents développés pour la boutique en ligne décentralisée.


# Modèle de communication entre les instances
## Le protocole SSL/TLS
Le protocole SSL/TLS est utilisé pour assurer la sécurité de la communication entre les serveurs en chiffrant les données transmises. Il garantit également l'intégrité des données en vérifiant l'authenticité de l'identité de l'autre partie et en utilisant un algorithme de hash pour détecter toute modification apportée aux données durant le transit.
L'utilisation du protocole SSL/TLS permet d'assurer la confidentialité, l'intégrité et l'authenticité des données transmises entre les instances, ce qui est crucial pour une boutique décentralisée.

# Sécurité réseau
Pour assurer la sécurité du réseau du projet nous avons appliqué  les mesures suivantes :

## Chiffrement des données
 le protocole SSL/TLS pour chiffrer les communications sur le réseau et protéger les informations sensibles telles que les informations de paiement et les informations de compte.

## Authentification forte
 inpmlémentation d'une authentification forte pour les utilisateurs et les instances en utilisant des méthodes notamment l'authentification à deux facteurs .

## Mises à jour de sécurité régulières 
L'installation régulièrement des mises à jour de sécurité pour tous les logiciels utilisés sur le réseau, y compris les systèmes d'exploitation, les bases de données, les frameworks web et les bibliothèques de développement.

## Sauvegarde de données 
Création  des sauvegardes régulières de toutes les données importantes pour éviter les pertes de données en cas d'incident sur le réseau.

## Surveillance du réseau 
Surveillance régulièrement le réseau pour détecter tout comportement anormal et réagirais rapidement pour éviter les attaques.

## Politique de sécurité 
Définition d'une politique de sécurité claire pour le personnel technique et les utilisateurs qui travaillent sur le réseau pour garantir une utilisation responsable et sécurisée.
## La sécurité physique du réseau
 La sécurité physique des serveurs est un aspect important de la sécurité de l'infrastructure d'un système informatique. Elle comprend des mesures telles que la restriction de l'accès physique aux serveurs, la surveillance en temps réel, la protection contre les incendies et les inondations, ainsi que le suivi et la maintenance des systèmes de refroidissement pour éviter la surchauffe. Les détais de la sécurité physique des serveurs dépendent de la taille et de la complexité de votre infrastructure informatique et doivent être planifiés et mis en œuvre en conséquence.
# Decentralisation

Le systeme de décentralisation que voulons mettre en place  signifie que les données et les transactions ne sont pas gérées par une seule entité centralisée, mais sont plutôt réparties sur un réseau de nœuds décentralisés. Cela permet de garantir une meilleure disponibilité et une plus grande résilience du système, car les données ne sont pas concentrées en un seul point vulnérable.

Pour garantir la scalabilité du système, les nœuds de stockage et de calcul sont conçus pour gérer de grandes quantités de données et de trafic sans compromettre les performances. Les API décentralisées permettent aux utilisateurs de communiquer avec les nœuds pour accéder aux données et effectuer des transactions.

En matière de sécurité, des mécanismes d'authentification forte sont mis en place pour protéger les données et les transactions. De plus, un système de sauvegarde régulière et une surveillance en continu du réseau permettent de minimiser les risques de perte de données. Le système de paiement décentralisé gère les transactions financières en utilisant des technologies sécurisées telles que les crypto-monnaies ou les systèmes de paiement en ligne.

En somme, la décentralisation d'un site e-commerce(boutique décentratralisée) peut apporter de nombreux avantages en termes de performance, de scalabilité et de sécurité, en répartissant les données et les transactions sur un réseau de nœuds décentralisés.

# Stockage de données
Pour résoudre ce problème, nous pouvons utiliser une approche de stockage décentralisé telle que IPFS ou blockchain. Cela permettra de stocker les données de manière distribuée et décentralisée, rendant le système plus sécurisé et résilient.


# conclusion

En utilisant les technologies et les approches mentionnées ci-dessus, nous pouvons construire un réseau de petits commerçants décentralisé qui est robuste, sécurisé, et scalable. Les clients peuvent acheter des produits proposés par différents commerçants via un seul site web, tout en profitant d'une expérience fluide et sécurisée. Le modèle décentralisé garantit que le système est résilient et sécurisé, tandis que les technologies de stockage décentralisées garantissent la sécurité des données.