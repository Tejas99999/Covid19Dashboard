
// var data=[]
// var labe=[]
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//   //  document.getElementById("demo").innerHTML = myObj.name;
//   var key, count = 0;
//
// // Check if every key has its own property
// for (key in myObj.timelineitems[0]) {
//
//     if (myObj.timelineitems[0].hasOwnProperty(key))
//         {
//           data.push(myObj.timelineitems[0][key].new_daily_cases)
//           labe.push(key)
//         // If the key is found, add it to the total length
//         count++;
//         }
// }
// data.pop();
// labe.pop();
// objectLenght = count;
//   console.log(myObj.timelineitems[0]['1/30/20'].total_cases);
//   console.log(objectLenght);
// console.log(data)
//   console.log(labe)
//   }
// };
// console.log(data)
//
//
// xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=IN", true);
//
// xmlhttp.send();

var arrayOfNumbers=[]
var data=[]
var labe=[]
var data1=[]
var labe1=[]
var data2=[]
var labe2=[]
var data3=[]
var labe3=[]
var x1,y1,z1
function getSum(total, num) {
  return total + Math.round(num);
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
  //  document.getElementById("demo").innerHTML = myObj.name;

    var key, count = 0;
console.log(myObj.cases_time_series.length)
// Check if every key has its own property
for (var i=0; i< myObj.cases_time_series.length; i++) {


          data.push(myObj.cases_time_series[i].dailyconfirmed)
          labe.push(myObj.cases_time_series[i].date)
          data1.push(myObj.cases_time_series[i].dailydeceased)

          data2.push(myObj.cases_time_series[i].dailyrecovered)

        //  labe.push(myObj.cases_time_series[i].date)
        // If the key is found, add it to the total length
        if(count==myObj.cases_time_series.length-1)
        {
          labe1.push(myObj.cases_time_series[i].totalconfirmed-myObj.cases_time_series[i].totalrecovered-myObj.cases_time_series[i].totaldeceased)
          labe1.push(myObj.cases_time_series[i].totalrecovered)
          labe1.push(myObj.cases_time_series[i].totaldeceased)

        }

        count++;


}
  x1=myObj.cases_time_series[133].totalconfirmed
  console.log(x1)
// data.pop();
// labe.pop();
objectLenght = count;

  //console.log(myObj.cases_time_series[0].dailyconfirmed);
 // console.log(objectLenght);
console.log(data)
  console.log(labe)
  var x=document.querySelectorAll("h4");
  x[0].innerHTML="+ "+data[data.length-1];
  if(data[data.length-1]-data2[data2.length-1]>=0)
  x[1].innerHTML="+ " +(data[data.length-1]-data2[data2.length-1]-data1[data1.length-1])
  else
  x[1].innerHTML="- "+data[data.length-1]-data2[data2.length-1];
  x[2].innerHTML="+ "+data2[data2.length-1];
  x[3].innerHTML="+ "+data1[data1.length-1];

  //arrayOfNumbers = data.map(Number);
  }
};
console.log(data)
// cases_time_series[0].dailyconfirmed
//
xmlhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json", true);

xmlhttp.send();
//


var ctx = document.getElementById('myChart');
// const x=require("htpps");


var myChart = new Chart(ctx, {
 type: 'line',
 data: {
    labels: labe,
    datasets: [{
        label: 'Daily Cases',
        data: data,
        backgroundColor: "#f38b4a",
    }]

 },

})
var ctx = document.getElementById('myChart1');
// const x=require("htpps");


var myChart = new Chart(ctx, {
 type: 'line',
 data: {
    labels: labe,
    datasets: [{
        label: 'Death Cases',
        data: data1,
        backgroundColor: "#bdbdbd",
    }]

 },

})
var ctx = document.getElementById('myChart2');
// const x=require("htpps");


var myChart = new Chart(ctx, {
 type: 'line',
 data: {
    labels: labe,
    datasets: [{
        label: 'Recovered Cases',
        data: data2,
        backgroundColor: "#228B22",
    }]

 },

})
// var ctx = document.getElementById('myChart3');
// // const x=require("htpps");
//
//
// var myChart = new Chart(ctx, {
//  type: 'line',
//  data: {
//     labels: labe,
//     datasets: [{
//         label: 'Recovered Cases',
//         data: data2,
//         backgroundColor: "#228B22",
//     }]
//
//  },
//
// })
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Active", "Recovered", "Deaths"],
      datasets: [
        {
          label: "Total Cases",
          backgroundColor: ["#f38b4a", "#228B22","#bdbdbd"],
          data: labe1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total Cases Distrubution',
      },
      rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
});
