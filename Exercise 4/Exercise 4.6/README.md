# Exercise 4.6 (Include from Exercise 4.2 to Exercise 4.7)
# GenAI Declaration
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
