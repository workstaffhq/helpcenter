---
title: Configuration
sidebar_position: 3
---

# Configuration de la paie

Pour modifier les options liées à la façon dont vous utilisez le module Paie, allez dans **Paramètres** / **Paie**.

## Établir votre calendrier de paie

Les calendriers de paie suivants sont pris en charge par Workstaff :

- **Hebdomadaire** (52 périodes par année)
- **Bi-hebdomadaire** (26 périodes par année)
- **Semi-mensuelle** (24 périodes par année)
- **Mensuel** (12 périodes par année)

:::note
Si votre organisation utilise un autre type de calendrier, veuillez nous [contacter](mailto:help@workstaff.app), et nous envisagerons de le prendre en charge.
:::

Pour calculer les délimitations de chaque période de paie, Workstaff a seulement besoin de connaître le type de calendrier et une **date de référence**.
La date de référence représente le premier jour de n'importe quelle période dans votre calendrier de paie. Les dates de toutes les périodes de paie seront calculées à partir de cette date de référence.

### Modification de votre calendrier

Si vous devez modifier votre calendrier de paie une fois que vous avez commencé à traiter les périodes, vous pouvez ajuster le type de calendrier et, facultativement, modifier sa date de référence. Les dates de votre prochaine période de paie seront automatiquement calculées en fonction du nouveau calendrier.

Dans certaines circonstances, vous devrez peut-être [ajuster légèrement les dates](./workflow.md#resize) de votre période de paie actuelle ou la suivante pendant la transition.

## Sélectionner le personnel à inclure dans la paie

Par défaut, tous les membres de votre équipe rémunérés avec les statuts d'emploi **Travailleur autonome** et **Employé** sont inclus dans les périodes de paie.

Sélectionnez l'option **Exclure les travailleurs autonomes de la paie** dans les paramètres si vous voulez exclure les sous-traitants / travailleurs indépendants de vos périodes de paie. Cette option est utile pour éviter des informations répétitives lorsque vous utilisez [les factures intégrées des entrepreneurs](../invoicing/index.md).

## Décomposer l’export de paie par semaine

En sélectionnant **Répartir les gains par semaine**, les données de paie seront affichées par semaine plutôt que par période de paie dans les fichiers d'exportation détaillés.
Une colonne **Week Index** sera également incluse dans l'export, vous permettant d’identifier et d’analyser facilement les gains hebdomadaires au sein de chaque période de paie.