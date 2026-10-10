# Exercise 4 – Introduction to D3.js

In this exercise, you will learn the basics of **D3.js**, a JavaScript library used to create interactive data visualisations on the web.

The exercises in this folder guide you through the fundamental concepts needed to build visualisations using D3.

## Exercises

- **Exercise 4.1 – Draw SVGs**  
  Learn how to create SVG elements that are used to draw graphics on a webpage.

- **Exercise 4.3 – D3 setup**  
  Set up the D3 library in your webpage.

- **Exercise 4.4 – Load data from CSV**  
  Learn how to load and read data from a CSV file using D3.

- **Exercise 4.5 – D3 binding and drawing with data**  
  Bind data to visual elements and draw graphics based on the data.

- **Exercise 4.6 – Scaling charts**  
  Use D3 scales to map data values to positions in a chart.

# GenAI Declaration from Exercise 4.2 to Exercise 4.7
This exercise is done with the help of claude.ai

Prompt:
1. Can't load the data (Exercise 4.4)
d3.csv("Exercise 4\Exercise 4.4\data\tvBrandCount.csv", d => {
  console.log(d); 
}
);

2. Why bar chart didn't display (Exercise 4.5)
<html>
    <head>
        <title>csv data</title>
    </head>

    <body>
        <script src="https://d3js.org/d3.v7.min.js"></script>
        <script src="main.js"></script>
        <svg></svg>
    </body>
</html>

Final Output:
1. 
d3.csv("data/tvBrandCount.csv", d => {
  console.log(d);
});

2. Move <svg> above of <script>

Modification Made:
1. -
2. edit the <svg> from Exercise 4.5 index.html to <div>
