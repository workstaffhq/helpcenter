---
title: Overtime
---

# Remunerate Overtime

When overtime rules are [configured on your account](../customize/overtime.md), Workstaff will automatically calculate and identify overtime for everyone in your team. In addition, Workstaff will automatically calculate extra earnings for your staff when you generate your pay runs. 

Overtime premiums are calculated on the basis of an hourly rate that is a weighted average of all hourly rates during that week. If your pay periods do not align directly on work weeks (for example, if you use monthly pay periods), overtime calculations are still made on the basis of full work weeks.

## How are overtime premiums calculated?

For any given worker and work week, Workstaff sums all earnings (including premiums) from all hours eligible for overtime. The sum of all earnings is then divised by the number of hours to give the **regular hourly rate** for that week.

The rates you configure in your overtime rules will be applied over that regular hourly rate. 

## Examples

### Hourly rate constant throughout the week

Let's start with the simpler case: all hours worked during the week are remunerated at the same hourly rate:

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
