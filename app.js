const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
var st,total,recent1;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res)
{
  const url="https://covid-19india-api.herokuapp.com/v2.0/state_data";
  https.get(url,function(response)
  {
    response.on("data",function(data)
    {
      const coviddata=JSON.parse(data);

       st=coviddata[1].state_data;
    //  console.log(st);
      st.sort(function (a, b) {
          return  b.confirmed-a.confirmed;
      });



      //console.log(st[0].state);

    });
  });
  const url1="https://covid-19india-api.herokuapp.com/v2.0/country_data"
  https.get(url1,function(response){
    response.on("data",function(data)
  {
    const totaldata=JSON.parse(data);
  //  console.log(totaldata[1].active_cases);
  total=totaldata[1];
});
});

//   const url2="https://api.covid19india.org/data.json"
//   https.get(url2,function(response){
//     response.on("data1",function(data1)
//   {
//   //  console.log(data);
//     const totaldata1=JSON.parse(data1);
//     console.log(totaldata1);
// console.log(totaldata1.cases_time_series.length)
//   recent1=totaldata1.cases_time_series[totaldata1.cases_time_series.length-1];
//   console.log(recent1);
// });
// });
  res.render('table', {stdata: st ,tdata:total });
//  res.send("hi");
})

app.listen(process.env.PORT || 3000,function()
{
  console.log("server");
})
