//Load the CSV file with a row conversion function
d3.csv("data/Ex6_TVdata_withStar.csv", d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize, //Convert screenSize to a number
    screenTech: d.screenTech,
    energyConsumption: +d.energyConsumption, //Convert energyConsumption to a number
    star: +d.star //Convert to a number
})).then(data => {
    //Log the processed data to the console
    console.log(data);

    //Call function after the data is loaded
    drawHistogram(data);
    populateFilters(data);
    drawScatterplot(data);
    createTooltip();
    handleMouseEvents();

}).catch(error => {
    console.error("Error loading the CSV file: ", error);
});