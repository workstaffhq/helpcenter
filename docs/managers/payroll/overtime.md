---
title: Overtime
---

# Compensate Overtime

When overtime rules are [configured on your account](../customize/overtime.md), Workstaff will automatically calculate and [identify overtime](../timetracking/overtime.md) for everyone in your team. In addition, Workstaff will automatically calculate extra earnings for your staff when you generate your pay runs. 

## How are overtime premiums calculated?

Overtime premiums are calculated based on a weighted average hourly rate, which reflects all earnings during the applicable period.

If your pay periods do not align directly with calendar work weeks (for example, if you pay monthly), overtime calculations are still based on complete work weeks within that period - unless [overtime averaging](../customize/overtime.md#averaging-period) is enabled.

For any given worker and work week (or averaging period, if averaging is enabled):
1. Workstaff sums all earnings - including premiums - from all hours worked during the period eligible for weekly overtime. 
2. The total earnings are divided by the total number of hours worked to determine the regular hourly rate for that period. 
3. The overtime multipliers you configured in your overtime rules are then applied to that regular hourly rate.

## Examples

### Hourly rate constant throughout the week

Let's start with the simpler case: all hours worked during the week are compensated at the same hourly rate:

|              |    MON |    TUE |    WED |    THU |    FRI | SAT | SUN |  Total |
|--------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Hours Worked |     5h |     8h |     5h |     7h |    12h |     |     |    37h |
| Hourly Rate  |  21.00 |  21.00 |  21.00 |  21.00 |  21.00 |     |     |        |
| Base Wages   | 105.00 | 168.00 | 105.00 | 147.00 | 252.00 |     |     | 777.00 |

During the above week, the _regular rate_ corresponds to:

777.00 / 37h = **21.00 per hour**

For an overtime rule with a **1.5x** rate, any hours worked in overtime during that week would result in an effective hourly rate of **31.50** (21.00 x 1.5), which Workstaff will calculate as additional earnings of **10.50** (31.50 - 21.00) per overtime hour.

### Hourly rate constant throughout the week, but with differentials / premiums

Let's add more complexity with a case where the worker worked on the night shift on Friday with a premium of 4.00 / hour.

|                        |    MON |    TUE |    WED |    THU |    FRI | SAT | SUN |  Total |
|------------------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Hours Worked           |     5h |     8h |     5h |     7h |    12h |     |     |    37h |
| Hourly Rate            |  21.00 |  21.00 |  21.00 |  21.00 |  21.00 |     |     |        |
| Differentials/Premiums |   0.00 |   0.00 |   0.00 |   0.00 |  48.00 |     |     |        |
| Base Wages             | 105.00 | 168.00 | 105.00 | 147.00 | 300.00 |     |     | 825.00 |

During the above week, the _regular rate_ corresponds to:

825.00 / 37h = **22.30 per hour**

For an overtime rule with a **1.5x** rate, any hours worked in overtime during that week would result in an effective hourly rate of **33.45** (22.30 x 1.5), which Workstaff will calculate as additional earnings of **11.15** (33.45 - 22.30) per overtime hour.

### Hourly rate varying during the week

If a worker works on different roles with different hourly rates, the overall calculation method stays the same:

|              |    MON |    TUE |    WED |    THU |    FRI | SAT | SUN |  Total |
|--------------|-------:|-------:|-------:|-------:|-------:|----:|----:|-------:|
| Hours Worked |     5h |     8h |     5h |     7h |    12h |     |     |    37h |
| Hourly Rate  |  21.00 |  24.50 |  21.00 |  21.00 |  24.50 |     |     |        |
| Base Wages   | 105.00 | 196.00 | 105.00 | 147.00 | 294.00 |     |     | 847.00 |

During the above week, the _regular rate_ corresponds to:

847.00 / 37h = **22.90 per hour**

For an overtime rule with a **1.5x** rate, any hours worked in overtime during that week would result in an effective hourly rate of **34.35** (22.90 x 1.5), which Workstaff will calculate as additional earnings of **11.45** (34.35 - 22.90) per overtime hour.