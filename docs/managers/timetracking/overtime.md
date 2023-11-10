---
sidebar_position: 3
---

# Overtime

Workstaff can calculate [and remunerate](../payroll/overtime.md) overtime automatically, both daily and weekly.

## Warnings

When overtime rules are configured in your account, Workstaff will display warnings at relevant locations, such as the weekly calendar view or when booking staff. These warnings are designed to highlight situations where unwanted overtime would be introduced by booking a certain staff.

### In weekly calendar

In the weekly calendar view, a small warning will be displayed for any staff who has overtime hours scheduled for the current week:

![Combined Overtime](Images/Combined-OT.png)

### When booking staff

When booking staff using the **Book staff** button on project pages, Workstaff provides warnings if the bookings exceed the overtime limits. Hover over the warning to view details about the overtime hours. Additionally, you can click on **Show differences** to see the changes made by the current booking(s).  
![Booking Overtime](Images/Booking-OT.png)

## How are overtime hours calculated?

Overtime hours are always calculated based on full work weeks. These work weeks always match the **First Day of Week** configured in your account general settings.

To calculate overtime hours, Workstaff takes all shifts worked by a staff during a week, and applies overtime rules configured on your account. Daily overtime rules are applied first, then weekly rules. Weekly rules are always applied based on the non-overtime hours calculated daily.

This process is quite complicated and is easier to understand with examples:

### Examples with daily rules

Workstaff applies daily rules independently for each day worked.

**Single daily rule with limit at 8 hours per day**

|                    | MON  | TUE | WED | THU | FRI  | SAT | SUN |
|--------------------|------|-----|-----|-----|------|-----|-----|
| Hours Worked       | 7h   | 8h  | 9h  | 9h  | 7.5h |     |     |
| Regular Hours      | 7h   | 8h  | 8h  | 8h  | 7.5h |     |     |
| Daily Overtime @8h |      |     | 1h  | 1h  |      |     |     |     

**Two daily rules with limit at 8 hours and 12 hours per day**

|                     | MON | TUE | WED | THU | FRI | SAT | SUN |
|---------------------|-----|-----|-----|-----|-----|-----|-----|
| Hours Worked        | 7   | 8   | 13  | 7.5 | 12  |     |     |
| Regular Hours       | 7   | 8   | 8   | 7.5 | 8   |     |     |
| Daily Overtime @8h  |     |     | 4   |     | 4   |     |     |     
| Daily Overtime @12h |     |     | 1   |     |     |     |     |


### Examples with weekly rules

Workstaff applies weekly rules based on the cumulative sum of hours worked during the week.

**Single weekly rule with limit at 35 hours per week**

|                      | MON | TUE  | WED  | THU  | FRI | SAT | SUN |
|----------------------|-----|------|------|------|-----|-----|-----|
| Hours Worked         | 8.5 | 8    | 9    | 9    | 7.5 |     |     |
| 👉 Cumulative        | 8.5 | 16.5 | 25.5 | 34.5 | 42  |     |     |
| Regular Hours        | 8.5 | 8    | 9    | 9    | 0.5 |     |     |
| Weekly Overtime @35h |     |      |      |      | 7   |     |     |     

**Two weekly rules with limits at 35 hours and 40h per week**

|                      | MON | TUE  | WED  | THU  | FRI | SAT | SUN |
|----------------------|-----|------|------|------|-----|-----|-----|
| Hours Worked         | 8.5 | 8    | 9    | 9    | 7.5 | 8   |     |
| 👉 Cumulative        | 8.5 | 16.5 | 25.5 | 34.5 | 42  | 50  |     |
| Regular Hours        | 8.5 | 8    | 9    | 9    | 0.5 |     |     |
| Weekly Overtime @35h |     |      |      |      | 5   |     |     |     
| Weekly Overtime @40h |     |      |      |      | 2   | 8   |     |     

### Example with both daily and weekly rules

When both daily and weekly rules are present, Workstaff first applies daily rules, then applies weekly rules.

**Combined daily rule with limit at 8 hours, and weekly rule with limit at 35 hours per week**

|                      | MON | TUE | WED | THU | FRI | SAT | SUN |
|----------------------|-----|-----|-----|-----|-----|-----|-----|
| Hours Worked         | 9   | 8   | 10  | 9   | 9   | 6   |     |
| 👉 Cumulative        | 9   | 17  | 27  | 36  | 45  | 51  |     |
| Regular Hours        | 8   | 8   | 8   | 8   | 3   | 0   |     |
| 👉 Cumulative        | 8   | 16  | 24  | 32  | 35  | 35  |     |     
| Daily Overtime @8h   | 1   |     | 2   | 1   | 1   |     |     |     
| Weekly Overtime @35h |     |     |     |     | 5   | 6   |     |     

## Overtime remuneration

It is the Payroll module that calculates [precise remuneration for hours worked in overtime](../payroll/overtime.md). Make sure you plan includes this functionality if you wish to remunerate overtime hours.