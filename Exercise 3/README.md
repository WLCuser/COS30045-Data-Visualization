# Exercise 3 – Data Story: TV Energy Consumption

## Overview

In this exercise, you will develop a **data story** based on the **TV Energy Consumption dataset**. Using the website created in **Exercise 0.2**, you will extend your work to present a meaningful narrative supported by data visualisations.

Your goal is to communicate insights from the dataset in a clear and engaging way through your **website and written explanation**.

You must use the **Exercise 3 folder in your existing forked repository** and reuse the files created in **Exercise 0.2**.

---

## Data Story

### Audience

The target audience for this visualisation includes:

- Consumers interested in **energy-efficient televisions**
- Policy makers and regulators interested in **energy consumption trends**
- Researchers studying **energy efficiency in consumer electronics**

These audiences are interested in understanding how **television energy consumption varies across models, sizes, and technologies**, and how these factors influence overall energy usage.

### Story Overview

This visualisation explores patterns in **TV energy consumption** across different television models and specifications.

The goal is to help viewers understand:

- How energy consumption varies between television models
- The relationship between **screen size and power consumption**
- How **energy efficiency ratings** impact energy usage
- Trends that may help consumers choose more **energy-efficient televisions**

The website presents these insights through visualisations and explanatory text that guide the viewer through the data.

---

## About the Data

### Data Source

The dataset used in this project contains information about **television models and their energy consumption characteristics**, including power usage, screen size, technology type, and efficiency ratings. The name of the dataset is tv_2026_02_15.csv which is given by the lecturer in canvas.

The dataset was provided as part of the course materials.

### Data Processing

Before creating visualisations, the dataset was processed to ensure it was suitable for analysis. This included:

- Cleaning missing or inconsistent values
- Selecting relevant attributes for visualisation
- Organising the data into formats suitable for web visualisation

In this assessment the main data processing include filtering the columns that are needed for the charts, replace the value of the data such as change from samsung electronics to samsung and convert the screensize in cm to inch.

### Privacy

The dataset does not contain any **personal or sensitive information**. It focuses solely on product specifications and energy consumption data related to television devices.

### Accuracy and Limitations

While the dataset provides useful information about TV energy consumption, there are some limitations:

- The dataset may not include **all available television models**
- Some information may be **outdated or incomplete**
- Energy consumption may vary depending on **real-world usage conditions**

These factors should be considered when interpreting the visualisations.

### Ethics

When presenting data visualisations, it is important to ensure that the information is represented **accurately and responsibly**.

This project follows ethical data visualisation practices by:

- Avoiding misleading visual representations
- Clearly explaining the context of the data
- Presenting information transparently so viewers can interpret the results correctly

---

## AI Declaration

Artificial Intelligence (AI) tools may have been used to assist with aspects of this assignment, such as:

- Generating example code
- Improving code structure
- Assisting with documentation writing

All AI-generated assistance was reviewed, modified where necessary, and integrated responsibly into the project.

In this assessment AI tool that being used is claude.ai and it main purpose of it is to generate code for the expression node in Knime use for categorized the screensize based on large, medium and small. Other than that claude.ai is also used for the javascript code for the calculator function that previously done in Exercise 0.2 which currently used in Exercise 3 and it is used for improving the website structure using external css while improving the html structure.

Example of the generated code for Knime:

if(

$["screensize_inch (Rounded)"] < 44,

"Small",

$["screensize_inch (Rounded)"] <= 65,

"Medium",

"Large"

)

---

## Website Storytelling

The website has been updated to communicate a **data-driven story** based on the TV energy consumption dataset.

The website includes:

- Visualisations that present key insights from the dataset
- Text explanations that help readers understand the meaning of the visualisations
- Context that connects the data to real-world implications

The aim is to guide the viewer through the data in a way that is **informative, engaging, and easy to understand**.
