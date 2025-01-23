---
title: Google Forms
sidebar_position: 1
---

# Google Forms Integration

Simplify your staff application and onboarding with Workstaff’s Google Forms integration. Gather essential candidate information and automatically create profiles from their responses, saving time and streamlining your process for a smoother experience.

## Getting Started

1. In the Settings section, navigate to the **Add-ons** menu and click **Activate** under **Google Forms**.
2. A Google window will appear, asking for your Google account credentials to connect the two applications.
3. Click on **Configure** and create your application form by clicking on the **+** button and select the title and language.
4. Select the **additional custom fields to include** in the form, and responses will automatically update candidate profiles in Workstaff.

:::note
We recommand **[creating custom fields](../staff/organizing.md#custom-fields)** beforehand to select them on the Google Form.
:::

Workstaff will create a Google Form requesting candidates' first name, last name, email, and any chosen custom fields. You can edit it as needed, adding images, reordering, or adding questions. When a staff member submits a Google Form, Workstaff creates a candidate worker profile, ensuring their information is ready for onboarding.

## Managing Forms

1. **Access the Google Form**, then click on the pencil in the lower-right corner to edit it. 
2. **Pause the form**: This action prevents any further applicants from submitting their responses. You can later reactivate the Google Form by clicking the green button.
3. **Delete the form**: If needed, you can choose to remove the form entirely.

![Google Forms Addon Configuration](Images/google-forms.png)

:::note
Enter an email address under **Email Notifications Preferences** to receive alerts for successful and failed submissions.
:::

## Google Forms Parameters

### Editing questions

Information provided by candidates in additional questions added directly to the Google Form (outside of Workstaff) will not be syncronized with their Workstaff profiles. However, this information can be accessed in the **Answers** tab on the Google Forms or in a linked Google Sheet by clicking on **Link to Sheets**. 

**Pro Tip!** You can set up response validation to ensure candidates provide the correct type of information. For example, to make sure they enter an email address instead of a postal address, you can use a regular expression like ^\S+@\S+$ in the field.

![Response Validation](Images/response-validation.png)

### Sharing the link to candidates

Before sharing the Google Form link with candidates, ensure the **Settings** are properly configured. To allow everyone to access the form, make sure the **Restrict to users in your organization and its trusted organizations** option is unchecked.

![Form Settings](Images/form-settings.png)

To generate a shareable link for your form, click **Send** in the top-right corner, then select **Send via Link**. You can shorten the URL if needed, then click **Copy** to share the link through your website, social media, or any preferred channel.

:::info
Take a look at our [Feature Matrix](../features-matrix.md) to see if this feature is included in your plan. Reach out to our [Customer Success](mailto:customer.success@workstaff.app) team if you have questions.
:::