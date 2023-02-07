## Mise en contexte

Dans ce projet, nous allons mettre en place un réseau de petits commerçants qui peut être déployé de manière décentralisée et qui permet aux clients finaux de trouver et d'acheter des produits proposés par plusieurs commerçants via une seule instance. Nous avons developpé un site web pour simmulé les differentes interactions possible, et avons theorisé un protocole de communication securisé entre les differents commerçants, les clients et le site web.

## choix des technologie  

Pour nos test en local nous avons utilisé XAMPP, pour la gestion de la base de donnée nous avons utilisé mysql sur phpmyadmin. Nous avons utilisé le FrameWork Laravel pour la partie back-end et le framework Bootstrap pour la partie front-end. Cependant, nous avons egalement songé a utiliser docker pour simulé un environnement de test, mais aussi React et next.js pour la partie front-end.

## Modèle de communication entre les instances
Le modèle de communication entre les instances du système doit être robuste et sécurisé pour garantir la confidentialité et l'intégrité des données transmises. Il peut y avoir plusieurs approches pour mettre en place ce modèle de communication, telles que l'utilisation de protocoles de communication sécurisés comme HTTPS, ou l'utilisation de réseaux privés virtuels (VPN).

Cependant, pour un déploiement local de plusieurs instances,pour des test, nous avons pensé a utiliser une approche basée sur des API REST (Representational State Transfer) pour permettre la communication entre les instances. Chaque instance peut publier une API qui décrit les produits qu'elle propose, et les autres instances peuvent appeler cette API pour récupérer ces informations.

Pour ce qui est des serveur, plusieurs instances de serveur peuvent être déployées pour héberger les produits de différents commerçants. Chaque instance peut être implémentée en utilisant Apache par exemple, et peut être configurée pour exposer une API REST pour récupérer les informations sur les produits qu'elle propose. Les clients peuvent appeler cette API pour récupérer les informations sur les produits proposés par les différents commerçants.

Chaque instance peut utiliser une base de données pour stocker les informations sur les produits proposés par les commerçants, ainsi que les informations sur les autres instances connues, ce qui peut etre mis en place avec la technologie MySQL par exemple.

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

Pour mettre en place ce concept de decentralisation nous avons pensé a utiliser la technologie blockchain, comme la blockchain Ethereum, qui permet de stocker des données de manière distribuée et décentralisée. En utilisant la blockchain Ethereum, on peut développer une plateforme e-commerce décentralisée qui permet de stocker les transactions et les informations du site de manière transparente, sécurisée et permanente. Les utilisateurs peuvent interagir directement avec la plateforme via des contrats intelligents, sans l'intervention d'un tiers de confiance. Cela offre plus de liberté et d'autonomie aux utilisateurs, ainsi qu'une réduction des coûts et une meilleure efficacité pour les entreprises


## Stockage de données
Pour stocker les informations sur les produits et les instances connues, nous pouvons utiliser une base de données, telle que MySQL. Cependant, pour garantir la sécurité des données, nous devons également prendre en compte les menaces potentielles telles que les fuites de données et les violations de sécurité.

Pour résoudre ce problème, nous pouvons utiliser une approche de stockage décentralisé telle que IPFS ou blockchain. Cela permettra de stocker les données de manière distribuée et décentralisée, rendant le système plus sécurisé et résilient.

## Scalabilité
Notre système doit également être capable de scaler pour répondre à la croissance de l'utilisation. Pour cela, nous pouvons utiliser des technologies telles que la répartition de charge et la redondance pour garantir une haute disponibilité.

De plus, nous pouvons utiliser des techniques telles que le cache pour améliorer les performances du système et les temps de réponse pour les utilisateurs.

## conclusion

En utilisant les technologies et les approches mentionnées ci-dessus, nous pouvons construire un réseau de petits commerçants décentralisé qui est robuste, sécurisé, et scalable. Les clients peuvent acheter des produits proposés par différents commerçants via un seul site web, tout en profitant d'une expérience fluide et sécurisée. Le modèle décentralisé garantit que le système est résilient et sécurisé, tandis que les technologies de stockage décentralisées garantissent la sécurité des données. Enfin, la scalabilité assure que le système est capable de répondre à la croissance de l'utilisation.