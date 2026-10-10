// D3.js recreation of the "House" scene — coordinates and colors traced
// directly from the reference image (988 x 982)
const svg = d3.select("#scene");

const width = 988;
const height = 982;
const groundY = 599;

// ---------- Sky ----------
svg.append("rect")
  .attr("x", 0).attr("y", 0)
  .attr("width", width).attr("height", height)
  .attr("fill", "#88ceeb");

// ---------- Ground ----------
svg.append("rect")
  .attr("x", 0).attr("y", groundY)
  .attr("width", width).attr("height", height - groundY)
  .attr("fill", "#008002");

// ---------- Sun ----------
svg.append("circle")
  .attr("cx", 797.5).attr("cy", 198.5)
  .attr("r", 79.5)
  .attr("fill", "#ffff04");

// ---------- Path (two curvy lines traced from the driveway) ----------
const pathLeft = [[453, 700], [412, 712], [377, 724], [347.5, 736], [324, 748], [305.5, 760],
[292, 772], [283, 784], [278.5, 796], [278, 808], [280.5, 820], [287, 832], [296.5, 844],
[307, 856], [320.5, 868], [335.5, 880], [351.5, 892], [367.5, 904], [384.5, 916], [401, 928],
[417, 940], [431.5, 952], [444, 964], [454.5, 976], [458, 980]];

const pathRight = [[507, 700], [462, 712], [423.5, 724], [392, 736], [367, 748], [349, 760],
[336, 772], [328.5, 784], [326.5, 796], [329, 808], [335.5, 820], [346, 832], [358.5, 844],
[374.5, 856], [392, 868], [411.5, 880], [431.5, 892], [452, 904], [472.5, 916], [491.5, 928],
[509.5, 940], [526, 952], [539, 964], [549, 976], [552, 980]];

const pathLine = d3.line()
  .x(d => d[0])
  .y(d => d[1])
  .curve(d3.curveCatmullRom.alpha(0.5));

const pathGroup = svg.append("g")
  .attr("fill", "none")
  .attr("stroke", "#ffa503")
  .attr("stroke-width", 10)
  .attr("stroke-linecap", "round");

pathGroup.append("path").attr("d", pathLine(pathLeft));
pathGroup.append("path").attr("d", pathLine(pathRight));

// ---------- Tree ----------
const tree = svg.append("g");

// trunk (traced from reference image)
tree.append("rect")
  .attr("x", 158).attr("y", 516)
  .attr("width", 40).attr("height", 183)
  .attr("fill", "#a0522d");

// foliage - outline traced from the reference image (sampled every 4px
// along the top and bottom contour), rendered as a smooth closed curve
const foliageColor = "#238b23";
const foliagePoints = [
  [78, 418], [82, 398], [86, 389], [90, 383], [94, 378], [98, 374], [102, 371], [106, 369],
  [110, 366], [114, 364], [118, 363], [122, 362], [126, 361], [130, 360], [134, 360],
  [138, 359], [142, 360], [146, 360], [150, 361], [154, 362], [158, 363], [162, 365],
  [166, 367], [170, 369], [174, 372], [178, 374], [182, 371], [186, 369], [190, 366],
  [194, 364], [198, 363], [202, 362], [206, 361], [210, 360], [214, 360], [218, 359],
  [222, 360], [226, 360], [230, 361], [234, 362], [238, 363], [242, 365], [246, 367],
  [250, 369], [254, 372], [258, 375], [262, 379], [266, 385], [270, 391], [274, 400],
  [277, 418], [277, 419], [274, 437], [270, 446], [266, 452], [262, 458], [258, 462],
  [254, 465], [250, 468], [246, 470], [242, 472], [238, 474], [234, 477], [230, 486],
  [226, 492], [222, 498], [218, 502], [214, 505], [210, 508], [206, 510], [202, 512],
  [198, 514], [194, 515], [190, 516], [186, 517], [182, 517], [178, 518], [174, 517],
  [170, 517], [166, 516], [162, 515], [158, 514], [154, 513], [150, 511], [146, 508],
  [142, 506], [138, 503], [134, 499], [130, 494], [126, 488], [122, 479], [118, 474],
  [114, 473], [110, 471], [106, 468], [102, 466], [98, 463], [94, 459], [90, 454],
  [86, 448], [82, 439], [78, 419]
];

const foliageLine = d3.line()
  .x(d => d[0])
  .y(d => d[1])
  .curve(d3.curveCatmullRomClosed.alpha(0.5));

tree.append("path")
  .attr("d", foliageLine(foliagePoints))
  .attr("fill", foliageColor);

// ---------- House ----------
const house = svg.append("g");

// walls (traced)
house.append("rect")
  .attr("x", 298).attr("y", 399)
  .attr("width", 400).attr("height", 300)
  .attr("fill", "#8b4512");

// roof (traced apex + base corners)
house.append("polygon")
  .attr("points", "298,399 698,399 497,200")
  .attr("fill", "#cd853f");

// windows (traced)
const windows = [
  { x: 338, y: 439 },
  { x: 578, y: 439 }
];

house.selectAll("rect.window")
  .data(windows)
  .enter()
  .append("rect")
  .attr("class", "window")
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .attr("width", 79).attr("height", 79)
  .attr("fill", "#aed8e6");

// door (traced)
house.append("rect")
  .attr("x", 458).attr("y", 539)
  .attr("width", 80).attr("height", 160)
  .attr("fill", "#a0522d");

// doorknob (traced)
house.append("circle")
  .attr("cx", 518).attr("cy", 618)
  .attr("r", 10)
  .attr("fill", "#000000");

// ---------- Label ----------
svg.append("text")
  .attr("x", 763).attr("y", 578)
  .attr("font-family", "Arial, sans-serif")
  .attr("font-size", 48)
  .attr("fill", "#000000")
  .text("House");

// D3.js recreation of the "House" scene — coordinates and colors traced
// directly from the reference image (988 x 982)
const svg1 = d3.select("#scene1");

const width1 = 988;
const height1 = 982;
const groundY1 = 599;

// ---------- Sky ----------
svg1.append("rect")
  .attr("x", 0).attr("y", 0)
  .attr("width", width1).attr("height", height1)
  .attr("fill", "#f6bc00");

// ---------- Ground ----------
svg1.append("rect")
  .attr("x", 0).attr("y", groundY1)
  .attr("width", width1).attr("height", height1 - groundY1)
  .attr("fill", "#008002");

// ---------- Sun ----------
svg1.append("circle")
  .attr("cx", 198.5).attr("cy", 198.5)
  .attr("r", 79.5)
  .attr("fill", "#ff7d04");

// ---------- Path (two curvy lines traced from the driveway) ----------
const pathLeft1 = [[453, 700], [412, 712], [377, 724], [347.5, 736], [324, 748], [305.5, 760],
[292, 772], [283, 784], [278.5, 796], [278, 808], [280.5, 820], [287, 832], [296.5, 844],
[307, 856], [320.5, 868], [335.5, 880], [351.5, 892], [367.5, 904], [384.5, 916], [401, 928],
[417, 940], [431.5, 952], [444, 964], [454.5, 976], [458, 980]];

const pathRight1 = [[507, 700], [462, 712], [423.5, 724], [392, 736], [367, 748], [349, 760],
[336, 772], [328.5, 784], [326.5, 796], [329, 808], [335.5, 820], [346, 832], [358.5, 844],
[374.5, 856], [392, 868], [411.5, 880], [431.5, 892], [452, 904], [472.5, 916], [491.5, 928],
[509.5, 940], [526, 952], [539, 964], [549, 976], [552, 980]];

const pathLine1 = d3.line()
  .x(d => d[0])
  .y(d => d[1])
  .curve(d3.curveCatmullRom.alpha(0.5));

const pathGroup1 = svg1.append("g")
  .attr("fill", "none")
  .attr("stroke", "#FFFFFF")
  .attr("stroke-width", 10)
  .attr("stroke-linecap", "round");

pathGroup1.append("path").attr("d", pathLine1(pathLeft1));
pathGroup1.append("path").attr("d", pathLine1(pathRight1));

// ---------- Tree ----------
const tree1 = svg1.append("g");

// trunk (traced from reference image)
tree1.append("rect")
  .attr("x", 158).attr("y", 516)
  .attr("width", 40).attr("height", 183)
  .attr("fill", "#a0522d");

// foliage - outline traced from the reference image (sampled every 4px
// along the top and bottom contour), rendered as a smooth closed curve
const foliageColor1 = "#238b23";
const foliagePoints1 = [
  [78, 418], [82, 398], [86, 389], [90, 383], [94, 378], [98, 374], [102, 371], [106, 369],
  [110, 366], [114, 364], [118, 363], [122, 362], [126, 361], [130, 360], [134, 360],
  [138, 359], [142, 360], [146, 360], [150, 361], [154, 362], [158, 363], [162, 365],
  [166, 367], [170, 369], [174, 372], [178, 374], [182, 371], [186, 369], [190, 366],
  [194, 364], [198, 363], [202, 362], [206, 361], [210, 360], [214, 360], [218, 359],
  [222, 360], [226, 360], [230, 361], [234, 362], [238, 363], [242, 365], [246, 367],
  [250, 369], [254, 372], [258, 375], [262, 379], [266, 385], [270, 391], [274, 400],
  [277, 418], [277, 419], [274, 437], [270, 446], [266, 452], [262, 458], [258, 462],
  [254, 465], [250, 468], [246, 470], [242, 472], [238, 474], [234, 477], [230, 486],
  [226, 492], [222, 498], [218, 502], [214, 505], [210, 508], [206, 510], [202, 512],
  [198, 514], [194, 515], [190, 516], [186, 517], [182, 517], [178, 518], [174, 517],
  [170, 517], [166, 516], [162, 515], [158, 514], [154, 513], [150, 511], [146, 508],
  [142, 506], [138, 503], [134, 499], [130, 494], [126, 488], [122, 479], [118, 474],
  [114, 473], [110, 471], [106, 468], [102, 466], [98, 463], [94, 459], [90, 454],
  [86, 448], [82, 439], [78, 419]
];

const foliageLine1 = d3.line()
  .x(d => d[0])
  .y(d => d[1])
  .curve(d3.curveCatmullRomClosed.alpha(0.5));

tree1.append("path")
  .attr("d", foliageLine1(foliagePoints1))
  .attr("fill", foliageColor1);

tree1.append("circle")
  .attr("cx", 220).attr("cy", 400)
  .attr("r", 20)
  .attr("fill", "red")

// ---------- House ----------
const house1 = svg1.append("g");

// walls (traced)
house1.append("rect")
  .attr("x", 298).attr("y", 399)
  .attr("width", 400).attr("height", 300)
  .attr("fill", "#8b4512");

// roof (traced apex + base corners)
house1.append("polygon")
  .attr("points", "298,399 698,399 497,200")
  .attr("fill", "#cd853f");

// windows (traced)
const windows1 = [
  { x: 338, y: 439 },
  { x: 578, y: 439 }
];

house1.selectAll("rect.window")
  .data(windows1)
  .enter()
  .append("rect")
  .attr("class", "window")
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .attr("width", 79).attr("height", 79)
  .attr("fill", "#aed8e6");

// door (traced)
house1.append("rect")
  .attr("x", 458).attr("y", 539)
  .attr("width", 80).attr("height", 160)
  .attr("fill", "#a0522d");

// doorknob (traced)
house1.append("circle")
  .attr("cx", 518).attr("cy", 618)
  .attr("r", 10)
  .attr("fill", "#000000");

// ---------- Label ----------
svg1.append("text")
  .attr("x", 763).attr("y", 578)
  .attr("font-family", "Arial, sans-serif")
  .attr("font-size", 48)
  .attr("fill", "#000000")
  .text("House");