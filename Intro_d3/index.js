/*

d3.select(); //first element that matches select criteria
d3.selectAll(); // all elements

d3.select('h1').style('color','red') //return first h1 tag it finds and make it red
.attr('class','heading')
.text('Updated h1 tag');

d3.select('body').append('p').text('First Pargraph') //append paragraph to body tag
d3.select('body').append('p').text('2nd Pargraph') 
d3.select('body').append('p').text('3rd Pargraph') 

d3.selectAll('p').style('color','blue')


var datset = [1,2,3,4,5];

d3.select('body')
    .selectAll('p')
    .data(datset)
    .enter()
    .append('p')
    //.text('D3 is awesome!')
    .text(function(d) {return d;});*/

//var dataset = [80,100,56,120,180,30,40,120,160];
var dataset = [1,2,3,4,5]

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
    .attr("width",svgWidth)
    .attr("height", svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

/*var xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0])*/

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - yScale(d)
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d,i) {
        var translate = [barWidth * i ,0];
        return "translate("+ translate + ")";
    });



/*var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d,i) {
        return svgHeight -d - 2;
    })
    .attr("x", function (d,i) {
        return barWidth * i;
    })
    .attr("fill","#A64c38")*/