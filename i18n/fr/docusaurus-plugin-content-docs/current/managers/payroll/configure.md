---
title: Configuration
sidebar_position: 3
---

# Configuring Payroll

To change options related to how you use the Payroll module, go to **Settings** / **Payroll**.

## Setting Up Your Pay Calendar {#calendar}

The following pay calendars are supported by Workstaff:

- **Weekly** (52 pay periods per year)
- **Bi-Weekly** (24 pay periods per year)

:::note
If your organization uses a different type of pay calendar, please [contact us](mailto:help@workstaff.app), and we'll consider adding support for it.
:::

To calculate the boundaries of each pay period, Workstaff only needs to know the type of calendar and a **reference date**. 
The reference date represents the first day of any period in your pay calendar. All pay periods boundaries will be calculated from
that reference date.

### Changing Your Pay Calendar

If for any reason you need to change your pay calendar after you started processing pay periods, you can do so by simply adjusting the type of pay calendar and, optionally, change the reference date. The dates of your next pay period will be calculated according to the new calendar. 

Under some circumstances, you may need to [slightly adjust dates](./workflow.md#resize) of your current or next pay period during the transition from a pay calendar to another.

## Control Which Staff Is Included in Pay Runs {#employment-statuses}

By default, all of your remunerated staff with employment statuses **Contractor / Freelancer** and **Employee** are included in pay runs. 

Select the option **Exclude contractors from payroll** in the settings if you want to exclude contractors / freelancers workers from you pay runs. This option is useful to prevent redundant information when you are using [integrated contractor invoices](../invoicing/index.md).
