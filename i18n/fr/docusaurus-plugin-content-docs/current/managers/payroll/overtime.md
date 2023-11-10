--- 
title: Heures supplémentaires
---

# Rémunérer les heures supplémentaires

Lorsque les règles relatives aux heures supplémentaires sont [configurées sur votre compte](../customize/overtime.md), Workstaff calcule et identifie automatiquement les heures supplémentaires de tous les membres de votre équipe. De plus, Workstaff calculera automatiquement les revenus supplémentaires pour votre personnel lorsque vous créez vos cycles de paie.

Les primes d'heures supplémentaires sont calculées sur la base d'un taux horaire qui est une moyenne pondérée de tous les taux horaires de la semaine. Si vos périodes de paie ne correspondent pas directement aux semaines de travail (par exemple, si vous utilisez des périodes de paie mensuelles), le calcul des heures supplémentaires est toujours effectué sur la base de semaines de travail complètes.

## Comment les primes d'heures supplémentaires sont-elles calculées ?

Pour un travailleur et une semaine de travail donnés, Workstaff additionne tous les revenus (y compris les primes) de toutes les heures éligibles aux heures supplémentaires. La somme de tous les revenus est ensuite divisée par le nombre d'heures pour obtenir le **taux horaire normal** pour cette semaine.

Le facteur de multiplication (taux) que vous configurez dans vos règles d'heures supplémentaires sera appliqué sur ce taux horaire normal.

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
