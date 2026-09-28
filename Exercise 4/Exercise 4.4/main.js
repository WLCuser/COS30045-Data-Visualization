d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count  // converts to number
  };
}).then(data => {
  data.sort((a, b) => b.count - a.count);
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count)); //=> array with min and max
  drawBarChart(data);
  })