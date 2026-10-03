//Load data
d3.csv("data/ARE_Spot_Prices.csv", d => {
    return {
        year: +d.Year,
        averagePrice: +d["Average Price (notTas-Snowy)"]
    };
}).then(data => {
    console.log(data);
    drawLineChart(data);
});

const drawLineChart = data => {
    //Set up inner chart margin and dimension
    const margin = { top: 40, right: 170, bottom: 25, left: 40 };
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.bottom - margin.top;

    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox", `0,0,${width},${height}`)

    //Create inner chart group and apply margins
    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0]);

    //set up axes
    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d")); //format ticks as integers using "d"

    const leftAxis = d3.axisLeft(yScale);

    //Add axes
    innerChart
        .append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(bottomAxis)

    innerChart
        .append("g")
        .call(leftAxis);

    //Add axis label
    innerChart
        .append("text")
        .text("Average Price")
        .attr("x", -margin.left)
        .attr("y", -10)
        .attr("text-anchor", "start");

    innerChart
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice))
        .attr("r",3)
        .attr("fill", "green");

    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.averagePrice));

    innerChart
        .append("path")
        .attr("d", lineGenerator(data))
        .attr("fill", "none")
        .attr("stroke", "green")
}