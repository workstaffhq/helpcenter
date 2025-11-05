--- 
title: Heures supplémentaires
---

# Rémunérer les heures supplémentaires

Lorsque les règles relatives aux heures supplémentaires sont [configurées sur votre compte](../customize/overtime.md), Workstaff calcule et identifie automatiquement les heures supplémentaires de tous les membres de votre équipe. De plus, Workstaff calculera automatiquement les revenus supplémentaires pour votre personnel lorsque vous créez vos cycles de paie.

## Comment les primes d'heures supplémentaires sont-elles calculées ?

Les primes d’heures supplémentaires sont calculées sur la base d’un taux horaire moyen pondéré, qui tient compte de l’ensemble des gains réalisés pendant la période concernée.

Si vos périodes de paie ne s’alignent pas directement sur les semaines civiles (par exemple, si vous payez mensuellement), les heures supplémentaires sont tout de même calculées sur la base de semaines complètes comprises dans cette période — sauf si le [moyennage des heures supplémentaires](#période-de-moyennage)￼est activé.

Pour chaque employé et pour chaque semaine de travail (ou période de moyennage, si le moyennage est activé) :
1. Workstaff additionne tous les gains — y compris les primes — pour toutes les heures travaillées pendant la période admissible aux heures supplémentaires hebdomadaires. 
2. Le total des gains est divisé par le nombre total d’heures travaillées afin de déterminer le taux horaire régulier pour cette période. 
3. Les multiplicateurs d’heures supplémentaires hebdomadaires configurés dans vos règles sont ensuite appliqués à ce taux horaire régulier.

## Période de moyennage

Si votre entreprise utilise le [moyennage des heures supplémentaires](../customize/overtime.md#période-de-moyennage), vous pouvez définir le nombre de semaines sur lequel la moyenne doit être calculée — 2 ou 4 semaines — ainsi que la date de début du cycle de moyennage.

Lorsque le moyennage est activé, les heures supplémentaires hebdomadaires sont calculées en fonction du nombre moyen d’heures travaillées sur la période sélectionnée, à partir de la date choisie (souvent le début de votre période de paie).

## Exemples

### Taux horaire constant tout au long de la semaine

Commençons par le cas le plus simple, toutes les heures travaillées au cours de la semaine sont rémunérées au même taux horaire :

|                    |    LUN |    MAR |    MER |    JEU |    VEN | SAM | DIM |  Total |
|--------------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Heures travaillées |     5h |     8h |     5h |     7h |    12h |     |     |    37h |
| Taux horaire       |  21,00 |  21,00 |  21,00 |  21,00 |  21,00 |     |     |        |
| Gains              | 105,00 | 168,00 | 105,00 | 147,00 | 252,00 |     |     | 777,00 |

Pendant la semaine ci-dessus, le _taux régulier_ correspond à :

777,00 / 37h = **21,00 par heure**

Pour une règle d'heures supplémentaires avec un facteur de **1,5x**, toutes les heures supplémentaires effectuées au cours de cette semaine se traduiront par un taux horaire effectif de **31,50** (21,00 x 1,5), que Workstaff calculera comme une rémunération supplémentaire de **10,50** (31,50 - 21,00) par heure supplémentaire.

### Taux horaire constant tout au long de la semaine, mais avec des différentiels / primes

Ajoutons un peu plus de complexité avec un cas où le travailleur a travaillé dans l'équipe de nuit le vendredi avec une prime de 4,00 / heure.

|                    |    LUN |    MAR |    MER |    JEU |    VEN | SAM | DIM |  Total |
|--------------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Heures travaillées |     5h |     8h |     5h |     7h |    12h |     |     |    37h |
| Taux horaire       |  21,00 |  21,00 |  21,00 |  21,00 |  21,00 |     |     |        |
| Primes             |   0,00 |   0,00 |   0,00 |   0,00 |  48,00 |     |     |        |
| Gains              | 105,00 | 168,00 | 105,00 | 147,00 | 300,00 |     |     | 825,00 |

Pendant la semaine ci-dessus, le _taux régulier_ correspond à :

825,00 / 37h = **22,30 par heure**

Pour une règle d'heures supplémentaires avec un taux **1,5x**, toutes les heures supplémentaires effectuées au cours de cette semaine se traduiraient par un taux horaire effectif de **33,45** (22,30 x 1,5), que Workstaff calculera comme une rémunération supplémentaire de **11,15** (33,45 - 22,30) par heure supplémentaire.

### Taux horaire variant au cours de la semaine

Si un travailleur exerce différentes fonctions avec des taux horaires différents, la méthode de calcul globale reste la même :

|                    |    LUN |    MAR |    MER |    JEU |    VEN | SAM | DIM |  Total |
|--------------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Heures travaillées |     5h |     8h |     5h |     7h |    12h |     |     |    37h |
| Taux horaire       |  21,00 |  24.50 |  21,00 |  21,00 |  24.50 |     |     |        |
| Gains              | 105,00 | 196,00 | 105,00 | 147,00 | 294,00 |     |     |  84700 |

Pendant la semaine ci-dessus, le _taux régulier_ correspond à :

847,00 / 37h = **22,90 par heure**

Pour une règle d'heures supplémentaires avec un taux **1,5x**, toutes les heures supplémentaires effectuées au cours de cette semaine se traduiraient par un taux horaire effectif de **34,35** (22,90 x 1,5), que Workstaff calculera comme une rémunération supplémentaire de **11,45** (34,35 - 22,90) par heure supplémentaire.

### Taux horaire constant tout au long de la période, avec moyennage sur deux semaines activé

Reprenons le cas où toutes les heures travaillées pendant la période sont rémunérées au même taux horaire, mais lorsque le moyennage sur deux semaines est activé :

**Semaine 1 :**

|                    |    LUN |    MAR |    MER |    JEU |    VEN | SAM | DIM |  Total |
|--------------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Heures travaillées |     8h |     8h |     8h |     7h |    12h |     |     |    43h |
| Taux horaire       |  21,00 |  21,00 |  21,00 |  21,00 |  21,00 |     |     |        |
| Gains              | 168,00 | 168,00 | 168,00 | 147,00 | 252,00 |     |     | 903,00 |

**Semaine 2 :**

|                    |    LUN |    MAR |    MER |    JEU |    VEN | SAM | DIM |  Total |
|--------------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Heures travaillées |     5h |     8h |     5h |     8h |    12h |     |     |    38h |
| Taux horaire       |  21,00 |  21,00 |  21,00 |  21,00 |  21,00 |     |     |        |
| Gains              | 105,00 | 168,00 | 105,00 | 168,00 | 252,00 |     |     | 798,00 |

Pendant la période ci-dessus, le _taux régulier_ correspond à :

(903.00 + 798.00) / (43h + 38h) = 1701 / 81 = **21.00 par heure**

Pour une règle d'heures supplémentaires hebdomadaires avec un taux de **1,5x**, toutes les heures supplémentaires effectuées au cours de cette semaine se traduiront par un taux horaire effectif de **31,50** (21,00 x 1,5), que Workstaff calculera comme une rémunération supplémentaire de **10,50** (31,50 - 21,00) par heure supplémentaire.

Dans cet exemple, disons que les heures supplémentaires s’appliquent lorsque le personnel travaille plus de **40 heures par semaine**.
Sur une période moyenne de deux semaines, l’employé a travaillé 43 heures la première semaine et 38 heures la deuxième semaine, pour un total de 81 heures.
Comme le seuil d’heures supplémentaires hebdomadaires est fixé à 80 heures pour la période de deux semaines, une seule heure est comptabilisée comme heure supplémentaire.