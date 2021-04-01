**Notice**

Les paquets de node_modules ont été ignorés lors du commit, pour lancer le projet il faut installer les paquets et les dépendances par yarn

##Back-office
Le système de back-office nécessite de télécharger *sails-cli* sur yarn ou npm pour lancer tous les scripts

**Migration & dev command**

Via *sails-cli*, on peut lancer un script de migration. Pour cela, il faut:

- créer la base de données *driverConnect* sous Mongodb
- puis lancer la commande suivante:
<code>sails lift</code> 

Ce script lancera automatiquement la migration ainsi que le projet
