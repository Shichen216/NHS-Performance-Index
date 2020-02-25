// A&E satisfaction

var chart = c3.generate({
  size: {
         height: 220,
         width: 300
     },
    data: {
      type: 'spline',
        x: 'x',
     xFormat: '%Y', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Satisfied', 59, 61, 54, 59, 53, 58, 53, 54, 52, 53]

        ],

    },
    color:{
      pattern:['#4f98ca']
    },
    grid: {
y: {
lines: [{value: 55.9, text: 'Average Satisfied Rate'}]
}
},

    axis: {
        x: {
          label: 'Year',
            type: 'timeseries',
            tick: {

                            format: '%Y',
                            values: ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018']
                        }
        },
        y:{
          label:'%'
        }

    },
     bindto: '#chart1'
});

// winter funding bubble

var svg = d3.select("#my_dataviz")
.append("svg")
.attr("width", 460.5)
.attr("height", 180)

svg.append("circle")
.attr("id", "circle1")
.attr("cx", 28)
.attr("cy", 60)
.attr("r", 28)
.attr("fill", "#272727")
var tooltip1 = d3.select("#my_dataviz")
.append("div")
.style("position", "absolute")
.style("visibility", "hidden")
.html("<span style='color:#ffffff;font-size: 12px'>700m</span>");
d3.select("#circle1")
.on("mouseover", function(){return tooltip1.style("visibility", "visible")
.style("top", 45 + "px")
      .style("left", 32 + "px");
})
.on("mouseout", function(){return tooltip1.style("visibility", "hidden");})
;



svg.append("circle")
.attr("id", "circle2")
.attr("cx", 98)
.attr("cy", 60)
.attr("r", 16)
.attr("fill", "#272727")
var tooltip2 = d3.select("#my_dataviz")
.append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .html("<span style='color:#ffffff;font-size: 12px'>400m</span>");
d3.select("#circle2")
.on("mouseover", function(){return tooltip2.style("visibility", "visible")
.style("top", 45+ "px")
        .style("left", 102 + "px");
})
.on("mouseout", function(){return tooltip2.style("visibility", "hidden");});

svg.append("circle")
.attr("id", "circle3")
.attr("cx", 168)
.attr("cy", 60)
.attr("r", 16)
.attr("fill", "#272727")
var tooltip3 = d3.select("#my_dataviz")
.append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .html("<span style='color:#ffffff;font-size: 12px'>400m</span>");
d3.select("#circle3")
.on("mouseover", function(){return tooltip3.style("visibility", "visible")
.style("top", 45+ "px")
        .style("left", 171 + "px");
})
.on("mouseout", function(){return tooltip3.style("visibility", "hidden");});

svg.append("circle")
.attr("id", "circle4")
.attr("cx", 238)
.attr("cy", 60)
.attr("r", 17.48)
.attr("fill", "#272727")
var tooltip4 = d3.select("#my_dataviz")
.append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .html("<span style='color:#ffffff;font-size: 12px'>437m</span>");
d3.select("#circle4")
.on("mouseover", function(){return tooltip4.style("visibility", "visible")
.style("top", 45+ "px")
        .style("left", 241 + "px");
})
.on("mouseout", function(){return tooltip4.style("visibility", "hidden");});

svg.append("circle")
.attr("id", "circle5")
.attr("cx", 308)
.attr("cy", 60)
.attr("r", 5.8)
.attr("fill", "#272727")
var tooltip5 = d3.select("#my_dataviz")
.append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .html("<span style='color:#ffffff;font-size: 12px'>145m</span>");
d3.select("#circle5")
.on("mouseover", function(){return tooltip5.style("visibility", "visible")
.style("top", 45+ "px")
        .style("left", 312 + "px");
})
.on("mouseout", function(){return tooltip5.style("visibility", "hidden");});

svg.append("circle")
.attr("id", "circle6")
.attr("cx", 400)
.attr("cy", 60)
.attr("r", 0)
.attr("fill", "#272727")
var tooltip6 = d3.select("#my_dataviz")
.append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .html("<span style='color:#ffffff;font-size: 12px'>0m</span>");
d3.select("#circle6")
.on("mouseover", function(){return tooltip6.style("visibility", "visible")
.style("top", 45+ "px")
        .style("left", 400 + "px");
})
.on("mouseout", function(){return tooltip6.style("visibility", "hidden");});

svg.append('text')
  .attr('x', 10)
  .attr('y', 110)
  .style("font-size", 10)
  .text("2014/15")

  svg.append('text')
    .attr('x', 80)
    .attr('y', 110)
    .style("font-size", 10)
    .text("2015/16")

    svg.append('text')
      .attr('x', 150)
      .attr('y', 110)
      .style("font-size", 10)
      .text("2016/17")

      svg.append('text')
        .attr('x', 220)
        .attr('y', 110)
        .style("font-size", 10)
        .text("2017/18")

        svg.append('text')
          .attr('x', 290)
          .attr('y', 110)
          .style("font-size", 10)
          .text("2018/19")

          svg.append('text')
            .attr('x', 360)
            .attr('y', 110)
            .style("font-size", 10)
            .text("2019/20")



// bed occupancy pie 1

            var chart = c3.generate({
              size: {
                     height: 140,
                     width: 140
                 },
              bindto: '#chart2',
                data: {
                    // iris data from R
                    columns: [
                        ['>= 85%', 42],
                        ['<85%', 85],
                    ],

                    type : 'pie',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                color: {
        pattern: ['#1f77b4', '#aec7e8']
    }
            });


// bed occupancy pie 2
            var chart = c3.generate({
              size: {
                     height: 140,
                     width: 140
                 },
              bindto: '#chart3',
                data: {
                    // iris data from R
                    columns: [
                        ['>= 85%', 131],
                        ['<85%', 3],
                    ],

                    type : 'pie',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                color: {
        pattern: ['#4f98ca', '#aec7e8']
    }
            });


// bed occupancy gauge 1

            var chart = c3.generate({
              size: {
                     height: 140,
                     width: 150
                 },
              bindto:'#chart4',
                data: {
                    columns: [
                        ['Number of NHS hospitals', 42]
                    ],
                    type: 'gauge',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                gauge: {
                   label: {
                       format: function(value, ratio) {
                           return value;
                       },
                       show: true // to turn off the min/max labels.
                   },
               min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
               max: 127, // 100 is default
               // units: ' %',
               width: 24 // for adjusting arc thickness
                },
                color: {
                    pattern: ['#EFF4FA', '#AEC7E8', '#4f98ca'], // the three color levels for the percentage values.
                    threshold: {
                       unit: 'value', // percentage is default
                       max: 200, // 100 is default
                        values: [33, 66, 100]
                    }
                }
            });


// bed occupancy gauge 2

            var chart = c3.generate({
              size: {
                     height: 140,
                     width: 150
                 },
              bindto:'#chart5',
                data: {
                    columns: [
                        ['Number of NHS hospitals', 131]
                    ],
                    type: 'gauge',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                gauge: {
                   label: {
                       format: function(value, ratio) {
                           return value;
                       },
                       show: true // to turn off the min/max labels.
                   },
               min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
               max: 134, // 100 is default
               // units: ' %',
               width: 24 // for adjusting arc thickness
                },
                color: {
                    pattern: ['#EFF4FA', '#AEC7E8', '#4f98ca'], // the three color levels for the percentage values.
                    threshold: {
                       unit: 'value', // percentage is default
                       max: 200, // 100 is default
                        values: [33, 66, 100]
                    }
                }
            });

// GPs bar

            var chart = c3.generate({
              size: {
                     height: 160,
                     width: 380
                 },
              bindto:'#chart6',
                data: {
                  x: 'x',
               xFormat: '%Y',
                    columns: [
                        ['x', '2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018'],
                        ['GPs', 67, 65, 66, 65, 65, 65,64,62,60,60]
                    ],
                    type: 'bar'
                },
                color:{
                  pattern:['#272727']
                },
                legend: {
        show: false
    },
                axis: {
                    x: {

                        type: 'timeseries',
                        tick: {
                                   rotate: -20,
                                        format: '%Y',
                                        values: ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018']
                                    }

                    },
                    y:{
                      max: 68,
                min: 58,
                      tick: {

                                      // format: '%Y',
                                      values: ['58', '60', '62', '64', '66', '68']
                                  },
                      label:'GPs'
                    }

                },
                bar: {
                    width: {
                        ratio: 0.35 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }
            });





            var chart = c3.generate({
              size: {
                     height: 270,
                     width: 500
                 },
            bindto: '#chart7',
            legend: {
        show: false

    },
            data: {
              x: 'x',
              xFormat: '%Y-%m',
              columns: [
                ['x','2010-7','2010-10','2011-1','2011-4','2011-7','2011-10','2012-1','2012-4','2012-7',
                '2012-10','2013-1','2013-4','2013-7','2013-10','2014-1','2014-4','2014-7','2014-10','2015-1','2015-4','2015-7',
                '2015-10','2016-1','2016-4','2016-7','2016-10','2017-1','2017-4','2017-7','2017-10','2018-1','2018-4','2018-7',
              '2018-10','2019-1','2019-4','2019-7','2019-10'],

                ['No.of A&E attendances(type 1)', 3503757,3426350,3402705,3586381,3469728,3432578,3525235,3623761,3582519,3545721,3500067,3620189,3588450,3476480,3528029,3765239,3672350,3665750,3481397,3702458,3708943,3730654,3818750,3849762,3885494,3852909,3674593,3897917,3869260,3896711,3708579,3907798,3887714,3932744,3951742,4035238,4082542,4117157],
                ['No.of A&E attendances(type2&3)',1872051,1824370,1827919,1915356,1875104,1820997,1856023,1963946,1911125,1805726,1805772,1933938,1936701,1817789,1877081,2032661,1931889,1908071,1897424,2009720,1969070,1934341,2046499,2047161,2078905,2001345,1972132,2112690,2055308,2128351,2161304,2334971,2295731,2232113,2284168,2357785,2452909,2377713],
                ['Percentage in 4 hours or less(type 1)', 97,94.7,94.8,95.6,95.5,96,94.4,93.6,94.9,95.4,93.4,94.3,93.3,92.6,92.6,92.4,88.5,87.7,91.1,91.4,87.3,81.6,85.3,85.9,81.9,81.2,85.2,85.1,81.5,76.6,84.3,83.4,81,77,78.3,78.1,71.5],
                ['Percentage in 4 hours or less(type 2&3)', 99.9, 99.8, 99.9,99.9,99.9,99.9,99.9,99.8,99.8,99.8,99.9,99.8,99.8,99.8,99.8,99.8,99.8,99.7,99.7,99.6,99.7,99.6,99.5,99.2,99.4,99.5,99.4,99.3,99.2,99.4,99.2,99,99.2,99.3,99.1,98.8,98.9,98.8,98.4]
              ],
              colors: {
    'No.of A&E attendances(type 1)' : '#91C3E6',
  'No.of A&E attendances(type2&3)':'#4F98CA',
'Percentage in 4 hours or less(type 1)':'#272727',
'Percentage in 4 hours or less(type 2&3)':'#50D890'

  },
              axes: {
                'Percentage in 4 hours or less(type 1)': 'y2',
                'Percentage in 4 hours or less(type 2&3)': 'y2'


              },
              types: {
              'No.of A&E attendances(type 1)': 'bar' ,
              'No.of A&E attendances(type2&3)':'bar' ,
              'Percentage in 4 hours or less(type 2&3)':'line',
              'Percentage in 4 hours or less(type 1)':'line'


              }
            },
            axis: {
              x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m'
                    }
                },
              y: {
                label: {
                  text: 'Number of attendances(millions)',
                  position: 'outer-middle'
                }
              },
              y2: {
                show: true,
                label: {
                  text: 'Percentage of patients spending<4 hours in A&E (%)',
                  position: 'outer-middle'
                }
              }
            }
            });
