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
    this.avgC=function() {
    let customer=Math.ceil( avg * RandomSev(min,max));
    //console.log(getRandomInt(min,max));
    //console.log(customer);
    return customer;
    
    } ;
    locatplaces.push(this);
  };
   
    Locatplace.prototype.render = function () {
      let sum=0;
      let trEl = document.createElement('tr');
      if(this.min==23){
          let tdEl3 = document.createElement('td');
          tdEl3.textContent ='Seattle';
          trEl.appendChild(tdEl3);
        }else if(this.min==3){
          let tdEl3 = document.createElement('td');
          tdEl3.textContent ='Tokyo';
          trEl.appendChild(tdEl3);
        }else if(this.min==11){
          let tdEl3 = document.createElement('td');
          tdEl3.textContent ='Dubai';
          trEl.appendChild(tdEl3);
        }else if(this.min==20){
          let tdEl3 = document.createElement('td');
          tdEl3.textContent ='Paris';
          trEl.appendChild(tdEl3);
        } else if(this.min==2){
          let tdEl3 = document.createElement('td');
          tdEl3.textContent ='Lima';
          trEl.appendChild(tdEl3);}
      for(let i=0 ; i<this.hour.length ; i++){
        let tdEl1 = document.createElement('td');
        tdEl1.textContent = this.avgC();
        trEl.appendChild(tdEl1);
      sum+=this.avgC() ;
      }
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = sum;
    trEl.appendChild(tdEl2);
    tableEl.appendChild(trEl);
    containerEl.appendChild(tableEl);
    }
     
      let seattle = new Locatplace('seattle' ,65,23,6.3);
      let tokyo = new Locatplace('tokyo' ,24,3,6.3);
      let dubai =new Locatplace('dubai',38,11,3.7);
      let paris =new Locatplace('paris',38,20,2.3);
      let lima =new Locatplace('lima',16,2,4.6);
      let arr=[ 'loc\time ', '6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm','Daily location total'];
      let containerEl = document.getElementById('container');
      let tableEl = document.createElement('table');
      containerEl.appendChild(tableEl);
      let trEl = document.createElement('tr');
      for(let i=0 ; i<arr.length; i++){
      let thEl1 = document.createElement('th');
      thEl1.textContent = arr[i];
      trEl.appendChild(thEl1);
      }

      tableEl.appendChild(trEl);
      seattle.render();
      tokyo.render();  
      dubai.render();
      paris.render();
      lima.render();

  