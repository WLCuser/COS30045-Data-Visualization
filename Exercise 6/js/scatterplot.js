const drawScatterplot = (data) => {

    //Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`) //Responsive SVG

    //Create an inner chart group with margins
    innerChartS = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const minStar = d3.min(data, d => d.star);
    const maxStar = d3.max(data, d => d.star);

    const maxEnergy = d3.max(data, d => d.energyConsumption);

    //Set the domain and ranges for the x and y scales
    xScaleS
        .domain([minStar -1, maxStar])
        .range([0, innerWidth]);

    yScaleS
        .domain([0, maxEnergy])
        .range([innerHeight, 0])
        .nice(); //Use the nice() method to round the y-axis values to a more human-readable format

    colorScale
        .domain(data.map(d => d.screenTech)) //Get unique screenTech values
        .range(d3.schemeCategory10); //Use a predefined color scheme

    innerChartS
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("r", 3)
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.5);

    const bottomAxis = d3.axisBottom(xScaleS);
    const leftAxis = d3.axisLeft(yScaleS);

    //Add axes
    innerChartS
        .append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(bottomAxis)

    innerChartS
        .append("g")
        .call(leftAxis);

    //Add axis label
    innerChartS
        .append("text")
        .text("Energy Consumption")
        .attr("x", -margin.left)
        .attr("y", -10)
        .attr("text-anchor", "start");
    
    //Add axis label
    innerChartS
        .append("text")
        .text("Star")
        .attr("x", innerWidth)
        .attr("y", innerHeight + margin.bottom - 10)
        .attr("text-anchor", "end");
    
    //Add a legend for the color scale
    const legend = svg 
     .append("g")
     .attr("transform", `translate(${width-100}, ${margin.top})`); //Position the legend

    //Loop through the color scale domain to create legend entries
    colorScale.domain().forEach((screenTech, i) => {

        //Create a group for each legend entry
        const legendRow = legend 
         .append("g")
         .attr("transform", `translate(0, ${i*20})`); //Space rows vertically

        //Add a colored rectangle for each screenTech
        legendRow.append("rect")
         .attr("width", 10)
         .attr("height", 10)
         .attr("fill", colorScale(screenTech));

         //Add text next to the rectangle
         legendRow.append("text")
          .attr("x",20) //Position text to the right of the rectangle
          .attr("y", 10) //Align text with the rectangle
          .attr("text-anchor", "start")
          .style("alignment-baseline", "middle")
          .text(screenTech); //Display the screenTect value
    })



}