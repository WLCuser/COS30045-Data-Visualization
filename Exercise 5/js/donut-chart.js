d3.csv("data/Data_exercise 5.3.csv", d => {
    return {
        Screensize_Category: d.Screensize_Category,
        Count: +d.Count
    };
}).then(data => {
    console.log(data);
    drawDonutChart(data);
});

drawDonutChart = data => {
    //Set up chart dimensions
    const width = 1000;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 20; //Leave some padding

    //Create color scale
    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.Screensize_Category))
        .range(d3.schemeSet2); //Use D3's category color scheme

    //Calculate angle for each slide using d3.pie
    const pie = d3.pie()
        .value(d => d.Count)
        .sort(null); //Disable sorting to maintain original data order

    const arcGenerator = d3.arc()
        .innerRadius(radius * 0.6) //Inner radius = 60% of available radius
        .outerRadius(radius * 1); //Outer radius = 100% of available radius

    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("viewBox", `0,0,${width},${height}`)
        .style("border", "1px solid black");

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)

    //Bind data and create donut chart
    innerChart
        .selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => color(d.data.Screensize_Category)) //Use category for color
        .attr("stroke", "white")
        .attr("stroke-width", 2);

    innerChart.selectAll("text")
        .data(pie(data))
        .join("text")
        .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
        .text(d => d.data.Screensize_Category);
}