---
title: Google Forms
sidebar_position: 1
---

# Intégration avec Google Forms

## Simplifiez votre processus de recrutement avec l’intégration Google Forms de Workstaff

L’intégration de Google Forms de Workstaff facilite les candidatures et l’intégration de votre personnel. Voici pourquoi vous allez l’adorer :
- **Gagnez du temps :** Créez automatiquement des profils de personnel à partir des réponses aux formulaires Google, réduisant ainsi la saisie manuelle.
- **Personnalisez facilement :** Adaptez vos formulaires avec des champs personnalisés pour recueillir toutes les informations nécessaires dès le départ.
- **Partage simplifié :** Partagez vos formulaires via un simple lien et collectez les réponses sans effort.

## Commencer en 3 étapes simples

### 1. Ajout de l’extension Google Forms

- Dans la section Paramètres, ouvrez le menu **Ajouts** et cliquez sur **Activer** sous **Google Forms**.
- Une fenêtre Google s’ouvrira, vous demandant de saisir vos identifiants Google afin de connecter les deux applications.
- Google vous demandera ensuite de sélectionner ce à quoi Workstaff peut accéder : **Sélectionner tout** et cliquer sur **Continuer**.

:::note
Nous recommandons d’utiliser un **compte Google partagé** (par exemple, un compte d’équipe ou de département) plutôt qu’un compte personnel. Cela permet à tous les membres de l’équipe ayant accès à ce compte de modifier les formulaires.
:::

:::info
Consultez notre [Matrice des fonctionnalités](../features-matrix.md) pour vérifier si cette fonctionnalité est incluse dans votre plan. Pour toute question, n’hésitez pas à contacter notre équipe [Customer Success](mailto:customer.success@workstaff.app).
:::

### 2. Création d'un formulaire de candidature

- Dans le menu **Ajouts**, cliquez sur **Configurer** sous **Google Forms** puis créez votre formulaire de candidature en cliquant sur le bouton **+**. 
- Sélectionnez un titre et une langue pour le formulaire.
- Choisissez les **champs personnalisés à inclure** dans le formulaire (les réponses saisies dans ces champs par les candidats mettront automatiquement à jour leur profil dans Workstaff).

Workstaff crée un formulaire dans votre compte Google Forms, collectant le prénom, nom, adresse email et les champs supplémentaires choisis. Vous pouvez ensuite le personnaliser selon vos besoins : ajouter des images ou ajouter de nouvelles questions.

:::warning
Les champs obligatoires (prénom, nom, email) ne devraient pas être modifiés dans le Google Form. Ces champs sont nécessaires pour créer des profils de candidats dans Workstaff, et l’absence de ces informations pourrait empêcher leur création.
:::

:::note
Nous vous recommandons de **[créer des champs personnalisés](../staff/organizing.md#champs-personnalisés)** au préalable afin de pouvoir les sélectionner dans votre formulaire Google.
:::

:::note
Les informations saisies par les candidats dans des questions ajoutées directement sur le formulaire Google (en dehors de Workstaff) ne seront pas synchronisées avec leur profil Workstaff.  Cependant, vous pourrez les consulter dans l’onglet **Réponses** du formulaire Google ou dans un Google Sheet associé en cliquant sur **Lien vers Sheets**. 
:::

:::tip Conseil de pro
Configurez une validation des réponses pour garantir que les candidats fournissent les bonnes informations. Par exemple, pour s’assurer qu’ils entrent une adresse courriel plutôt qu’une adresse postale, utilisez une expression régulière comme ^\S+@\S+$ dans le champ correspondant.
:::

![Validation de réponse](Images/validation-reponse.png)

### 3. Partage du lien aux candidats

Avant de partager le lien du formulaire Google avec les candidats, assurez-vous que les **Paramètres** sont correctement configurés. Pour permettre à tous d’accéder au formulaire, vérifiez que l’option **Restreindre aux utilisateurs de votre organisation et de ses organisations de confiance** est décochée.

![Paramètres du formulaire](Images/form-parametres.png)

Pour générer un lien partageable, cliquez sur **Envoyer** dans le coin supérieur droit du formulaire, puis sélectionnez **Envoyer par lien**. Vous pouvez raccourcir l'URL si nécessaire, puis cliquer sur **Copier**. Le lien peut ensuite être partagé sur votre site web, vos réseaux sociaux ou via tout autre canal de votre choix.

:::note
**Évitez de partager l’URL directement depuis la barre d’adresse du navigateur.** Utilisez toujours le lien de partage généré via le menu **Envoyer** pour garantir que vos candidats puisse accéder au formulaire et le remplir correctement.
:::

Une fois que les candidats soumettent leurs réponses via un formulaire Google, Workstaff crée automatiquement un profil candidat, garantissant que leurs informations sont prêtes pour l’intégration. Consultez **[Gérez les candidats ayant soumis leur candidature via Google Forms](../staff/staff-onboarding.md#gérez-les-candidats-ayant-soumis-leur-candidature-via-google-forms)** pour les prochaines étapes.

## Gestion des formulaires

1. **Accéder au formulaire Google**, puis cliquez sur le crayon dans le coin inférieur droit pour le modifier. 
2. **Mettre le formulaire sur pause** : Cette action empêche les candidats de soumettre leurs réponses. Vous pouvez réactiver le formulaire Google en cliquant sur le bouton vert.
3. **Supprimer le formulaire** : Si nécessaire, vous pouvez choisir de supprimer entièrement le formulaire.

![Configuration Google Forms Addon](Images/google-forms.png)

:::note
Saisissez une adresse électronique sous **Notifications par courriel** pour recevoir des alertes en cas de réussite ou d'échec de la soumission.
:::