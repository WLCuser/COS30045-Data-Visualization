const drawHistogram = (data) => {
    //Implementing for drawing the histogram

    //Set the dimensions and margins of the chart area
    const svg = d3.select("#histogram")
     .append("svg")
     .attr("viewBox",`0 0 ${width} ${height}`) //Responsive SVG
    
    //Create an inner chart group with margins
    const innerChart = svg.append("g")
     .attr("transform",`translate(${margin.left},${margin.top})`);

    //Get the bins for our data set using the bin generator
    const bins = binGenerator(data); //save the bins into an array

    console.log(bins);

    //Calculate the minimum and maximum energy consumption values from the bins to set the xScale domain
    const minEng = bins[0].x0; //lower bound of the first bin
    const maxEng = bins[bins.length - 1].x1; //upper bound of the last bin

    //Calculate the maximum lenght of the bins to set the yScale domain
    const binMaxLength = d3.max(bins, d => d.length); //Get the maximum length of the bins

    console.log("minEng:", minEng, "maxEng", maxEng, "binMaxLength", binMaxLength);

    //Set the domain and ranges for the x and y scales
    xScale
     .domain([minEng,maxEng])
     .range([0, innerWidth]);

    yScale
     .domain([0, binMaxLength])
     .range([innerHeight, 0])
     .nice(); //Use the nice() method to round the y-axis values to a more human-readable format

    innerChart
     .selectAll("rect")
     .data(bins)
     .join("rect")
      .attr("x", d => xScale(d.x0))
      .attr("y", d => yScale(d.length))
      .attr("width", d => xScale(d.x1) - xScale(d.x0))
      .attr("height", d => innerHeight - yScale(d.length))
      .attr("fill", barColor)
      .attr("stroke", bodyBackgroundColor) //Set the stoke color gives appearance of gap between bars
      .attr("stroke-width", 2);
      
    const bottomAxis = d3.axisBottom(xScale);
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
        .text("Frequency")
        .attr("x", -margin.left)
        .attr("y", -10)
        .attr("text-anchor", "start");
    
    //Add axis label
    innerChart
        .append("text")
        .text("Labeled Energy Consumption (kWh/year)")
        .attr("x", innerWidth)
        .attr("y", innerHeight + margin.bottom - 10)
        .attr("text-anchor", "end");


}