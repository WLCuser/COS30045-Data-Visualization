# Exercise 6 – Interactive Visualisations

## Overview
In this exercise you will build **interactive data visualisations using D3.js**. Interaction allows users to explore the data and gain deeper insights through features such as filtering and tooltips.

Use the **same repository you forked earlier for this unit** and complete this exercise inside the **Exercise 6 folder**.

---

## Exercise 6.1 – Interactive Histogram: Filtering

### Aim
Build a histogram and add **interactive filters**.

### Purpose
Interaction is one of the key advantages of visualisations on the web. In this exercise you will build a **histogram using the TV dataset** and allow users to filter the data.

Users should be able to explore energy consumption for different TV screen technologies such as:

- LCD
- LED
- OLED

### Preparation
Before starting, review:

- This week's lecture slides
- **Chapter 7 of Dufour and Meeks (2024)**

---

## Exercise 6.2 – Interactive Scatterplot: Tooltips

### Aim
Build a scatterplot and add **tooltips and colour coding**.

### Purpose
Tooltips are one of the most common interactive features in data visualisations. In this exercise you will create a **scatterplot using the TV dataset**.

The chart should allow users to explore the relationship between:

- Energy consumption
- Star rating
- Screen size
- Screen technology

Tooltips should display additional information such as **screen size**, and colours should represent **screen type**.

### Preparation
Before starting, review:

- This week's lecture slides
- **Chapter 7 of Dufour and Meeks (2024)**

---

## Instructions

1. Open your **existing forked repository**.
2. Navigate to the **Exercise 6 folder**.
3. Add the files needed to implement the histogram and scatterplot.
4. Implement the required interactive features using **D3.js**.
5. Commit and push your changes regularly to GitHub.

Your forked repository will serve as your **submission record**.

## GenAI Declaration
The completion of this exercise is supported with the help of claude.ai

Prompt:
1. Convert to x axis label (Histogram)
    //Add axis label
    innerChart
        .append("text")
        .text("Frequency")
        .attr("x", -margin.left)
        .attr("y", -10)
        .attr("text-anchor", "start");
    
2. Filter function doesn't work (Histogram)
3. Fix the minimum and maximum function of Star Rating used to get the xScale (Scatterplot)
4. Way to assign predefined color for data point (Scatterplot)
5. Ask why axis didnt appear (Scatterplot)
6. The value on x axis is collide with the y axis line (Scatterplot)
7. Tooltip doesnt work (Scatterplot)

Final Output:
1. 
// Add x-axis label
innerChart
    .append("text")
    .text("Frequency")                      // change to your x variable name
    .attr("x", innerWidth / 2)              // horizontally centered
    .attr("y", innerHeight + margin.bottom - 10)  // below the axis
    .attr("text-anchor", "middle");         // center the text on that x position

2. 
Insert updateHistogram(d.id, data); within populateFilters

3. 
const [minStar, maxStar] = d3.extent(data, d => d.star);
const maxEnergy = d3.max(data, d => d.energyConsumption);

4. 
Add .attr("fill", d => colorScale(d.screenTech))

5. 
Variable name is wrong xScale -> xScaleS, innerChart -> innerChartS

6. 
xScaleS
    .domain([minStar - 1, maxStar + 1])

7. 
- Missing . before attr("text-anchor", "middle")
- Wrong variable name innerCharts.selectAll("circle") -> innerChartS.selectAll("circle")


Modification Made:
- 


