'use strict';



function RandomSev(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
  return Math.floor(Math.random()*(max - min) + min);
}
 
let locatplaces=[];
function Locatplace(name,max,min,avg){
  // console.log(max);
  this.name=name;
    this.hour= ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'];
    this.max=max;
    this.min=min;
    this.arrC=[];
    this.avgC=function() {
    let customer=Math.ceil( avg * RandomSev(min,max));
    //console.log(getRandomInt(min,max));
    //console.log(customer);
    this.arrC.push(customer);
    return customer;
    } 
    locatplaces.push(this);
  };
   
    Locatplace.prototype.render = function () {
      let sum = 0;
      let total= 0 ;
      let trEl = document.createElement("tr");
      let tdEl3 = document.createElement("td");
      tdEl3.textContent = this.name;
      trEl.appendChild(tdEl3);
      
      let trE6 = document.createElement("tr");
      let tdEl5 = document.createElement("td");
      tdEl5.textContent = 'Total';
      trE6.appendChild(tdEl5);
      
      for (let i = 0; i < this.hour.length; i++) {
        let tdEl1 = document.createElement("td");
        tdEl1.textContent = this.avgC();
        trEl.appendChild(tdEl1);
        sum += this.avgC();
        for(let j=0 ; j<locatplaces.length ; j++){
          total=total+this.avgC();

        } 
       
        let tdEl88 = document.createElement("td");
        tdEl88.textContent = total;
        trE6.appendChild(tdEl88);
      }
      
      let tdEl2 = document.createElement("td");
      tdEl2.textContent = sum;
      trEl.appendChild(tdEl2);
      let tdEl88 = document.createElement("td");
      tdEl88.textContent = total;
      trE6.appendChild(tdEl88);








      
      tableEl.appendChild(trEl);
      tableEl.appendChild(trE6);
      containerEl.appendChild(tableEl);


    }
    

    // Location.prototype.footer=function(){
    // let sum1=0;
    // let total=0;
    // let trE2 = document.createElement("tr");
    // let tdEl3 = document.createElement("td");
    // tdEl3.textContent = 'total';
    // trE2.appendChild(tdEl3);
    // for(let i=0 ; i< this.hour.length ; i++)
    // {
    // for(let j=0 ; j<locatplaces.length ; j++){

    //   let tdEl3 = document.createElement("td");
    //   tdEl3.textContent = this.avgC();
    //   trE2.appendChild(tdEl3); 
    //  }
    //  total+=sum1;
    // }
    // let tdEl2 = document.createElement("td");
    // tdEl2.textContent = sum1;
    // trEl.appendChild(tdEl2);
    // tableEl.appendChild(trEl);
    //     containerEl.appendChild(tableEl);
    // }
    
     
      let arr=[ 'loc/time ', '6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm','Daily location total'];
      let containerEl = document.getElementById('container');
      let tableEl = document.createElement('table');
      containerEl.appendChild(tableEl);
      let trEl = document.createElement('tr');
      for(let i=0 ; i<arr.length; i++){
      let thEl1 = document.createElement('th');
      thEl1.textContent = arr[i];
      trEl.appendChild(thEl1);
      };
      tableEl.appendChild(trEl);



      let seattle = new Locatplace('seattle' ,65,23,6.3);
      let tokyo = new Locatplace('tokyo' ,24,3,6.3);
      let dubai =new Locatplace('dubai',38,11,3.7);
      let paris =new Locatplace('paris',38,20,2.3);
      let lima =new Locatplace('lima',16,2,4.6);
      seattle.render();
      tableEl.deleteRow(tableEl.rows.length - 1);
      tokyo.render();  
      tableEl.deleteRow(tableEl.rows.length - 1);

      dubai.render();
      tableEl.deleteRow(tableEl.rows.length - 1);
      paris.render();
      tableEl.deleteRow(tableEl.rows.length - 1);

      lima.render();

      
let myform = document.getElementById('myForm');
myForm.addEventListener('submit', addRow);
function addRow(event) {
  event.preventDefault();

   let loCname = event.target.loCname.value; 
   let   mXnumber = event.target.mXnumber.value;
   let   miniNum=event.target.miniNum.value;
    let   avGnum = event.target.avGnum.value;
  let brazeel = new Locatplace(loCname,mXnumber,miniNum,avGnum);
  tableEl.deleteRow(tableEl.rows.length - 1);

brazeel.render();
};