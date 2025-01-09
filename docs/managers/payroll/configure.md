---
title: Configuration
sidebar_position: 3
---

# Configuring Payroll

To change options related to how you use the Payroll module, go to **Settings** / **Payroll**.

## Setting Up Your Pay Calendar {#calendar}

The following pay calendars are supported by Workstaff:

- **Weekly** (52 pay periods per year)
- **Bi-Weekly** (26 pay periods per year)
- **Semi-Monthly** (24 pay periods per year)
- **Monthly** (12 periods per year)

:::note
If your organization uses a different type of pay calendar, please [contact us](mailto:help@workstaff.app), and we'll consider adding support for it.
:::

To calculate the boundaries of each pay period, Workstaff only needs to know the type of calendar and a **reference date**. 
The reference date represents the first day of any period in your pay calendar. All pay periods boundaries will be calculated from
that reference date.

### Changing Your Pay Calendar

If you need to change your pay calendar once you start processing pay periods, you can adjust the type of pay calendar and, optionally, change its reference date. The dates of your next pay period will be calculated according to the new calendar. 

Under some circumstances, you may need to [slightly adjust dates](./workflow.md#resize) of your current or next pay period during the transition.

## Select Staff To Include in Pay Runs {#employment-statuses}

By default, all of your remunerated staff with employment statuses **Contractor / Freelancer** and **Employee** are included in pay runs. 

Select the option **Exclude contractors from payroll** in the settings if you want to exclude contractors / freelancers workers from you pay runs. This option is useful to prevent redundant information when you are using [integrated contractor invoices](../invoicing/index.md).
