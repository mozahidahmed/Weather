const API_KEY=`c8004b59952e8d07a97dc5198caa3807`
// ........................................................................................
const searchTemperature=()=>{
const city =document.getElementById('city-name').value;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
console.log(url)


fetch(url)
.then(res=>res.json())
.then(data=>displayTemperature(data))


}
// .............................................................................................


// ..................................................
const setInnerText=(id,text)=>{
document.getElementById(id).innerText=text;
}
// .................................................





// ................................
const displayTemperature = temperature =>{
setInnerText('city',temperature.name)
setInnerText('temperature',temperature.main.temp)
setInnerText('condition',temperature.weather[0].main)
console.log(temperature);

// icon 
const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const imageIcon=document.getElementById('weather-icon');
imageIcon.setAttribute('src',url);

}
// ................................................
