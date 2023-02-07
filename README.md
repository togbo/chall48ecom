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

## Sécurité réseau

Pour garantir la sécurité du système, nous avons pris en compte les menaces potentielles telles que les attaques DoS, MitM, et d'injection de code. Pour les prévenir, nous utiliserons des techniques telles qu'un pare-feu, HTTPS, et des stratégies de détection et de réponse à une intrusion.

Nous tenons également compte des facteurs de performance tels que la latence, la bande passante et la disponibilité pour assurer un accès rapide et facile pour les utilisateurs aux produits. Pour cela, nous utiliserons des technologies telles que la répartition de charge, la redondance, le cache, et les répliques pour garantir une haute disponibilité.

Enfin, nous mettrons en place des mesures de sécurité pour protéger les données sensibles telles que les informations de paiement, qui seront encryptées et stockées de manière sécurisée.

## Decentralisation

Le réseau de petits commerçants que nous construisons sera décentralisé, ce qui signifie que chaque instance aura son propre serveur et ne dépendra pas d'une instance centrale pour les informations. Cela signifie également que les produits proposés par les commerçants seront hébergés sur leur propre serveur, ce qui les rend indépendants les uns des autres.

Le système ne peut pas être centralisé et dépendre d'une seule instance, car cela pourrait rendre le système vulnérable aux erreurs et aux attaques.

Toutes les instances peuvent communiquer entre elles via notre API REST, permettant à chaque instance de connaître les produits proposés par les autres commerçants. Les clients peuvent alors accéder à tous les produits via notre site web, donnant l'impression d'un site web unique pour les produits proposés par plusieurs commerçants.

L'avantage de ce modèle décentralisé est la résilience et la flexibilité. Si l'un des serveurs devient indisponible, les autres serveurs peuvent continuer à fonctionner sans perturbation. De plus, chaque instance peut être mise à jour et développée de manière indépendante, permettant un développement plus rapide et plus efficace.

Pour résumer, notre projet vise à construire un réseau de petits commerçants décentralisé qui permet aux clients finaux d'acheter des produits proposés par différents commerçants via un seul site web.

## Stockage de données
Pour stocker les informations sur les produits et les instances connues, nous pouvons utiliser une base de données, telle que MySQL. Cependant, pour garantir la sécurité des données, nous devons également prendre en compte les menaces potentielles telles que les fuites de données et les violations de sécurité.

Pour résoudre ce problème, nous pouvons utiliser une approche de stockage décentralisé telle que IPFS ou blockchain. Cela permettra de stocker les données de manière distribuée et décentralisée, rendant le système plus sécurisé et résilient.

## Scalabilité
Notre système doit également être capable de scaler pour répondre à la croissance de l'utilisation. Pour cela, nous pouvons utiliser des technologies telles que la répartition de charge et la redondance pour garantir une haute disponibilité.

De plus, nous pouvons utiliser des techniques telles que le cache pour améliorer les performances du système et les temps de réponse pour les utilisateurs.

## conclusion

En utilisant les technologies et les approches mentionnées ci-dessus, nous pouvons construire un réseau de petits commerçants décentralisé qui est robuste, sécurisé, et scalable. Les clients peuvent acheter des produits proposés par différents commerçants via un seul site web, tout en profitant d'une expérience fluide et sécurisée. Le modèle décentralisé garantit que le système est résilient et sécurisé, tandis que les technologies de stockage décentralisées garantissent la sécurité des données. Enfin, la scalabilité assure que le système est capable de répondre à la croissance de l'utilisation.