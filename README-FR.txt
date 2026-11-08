AI DIGITAL SHOP HAITI — VERSION DE DÉPART

CONTENU
- index.html : structure de la boutique
- style.css : design responsive
- app.js : catalogue de démonstration

IMPORTANT
Cette version est une vitrine de démonstration. Elle n'encaisse pas encore d'argent et ne livre pas de fichiers. Ne demande jamais aux clients d'envoyer leurs codes PIN ou mots de passe MonCash/NatCash.

PROCHAINES ÉTAPES
1. Choisir et fixer les prix des premiers produits.
2. Créer les fichiers numériques réellement vendus.
3. Publier le site (GitHub Pages peut héberger cette vitrine statique gratuitement).
4. Ouvrir et faire vérifier un compte marchand chez un prestataire de paiement.
5. Ajouter un serveur sécurisé pour créer les paiements et vérifier les webhooks signés.
6. Déclencher la livraison uniquement après confirmation serveur du statut "completed".

PAIEMENTS
La documentation Tranzak décrit une API unique pour MonCash et NatCash :
https://docs.tranzak.co/
La clé API et le secret webhook doivent rester côté serveur, jamais dans app.js ou dans le navigateur.
