'use strict';





function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
  return Math.floor(Math.random()*(max - min) + min);
}
 
let locatplaces=[];
function Locatplace(name,max,min,avg){
  console.log(max);
  console.log(max);
  console.log(max);
  console.log(max);
  this.name=name;
    this.hour= ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'];
    this.max=max;
    this.min=min;
    this.avgC=function() {
    let customer=Math.ceil( avg * getRandomInt(min,max));
    console.log(getRandomInt(min,max));
    console.log(customer);
    return customer;
    
    } 
       
    
    locatplaces.push(this);

  }
   
    Locatplace.prototype.render = function () {
      let sum=0;
      let trEl = document.createElement('tr');
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
      let arr=['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm','Daily location total'];
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
   
      seattle.render()
      tokyo.render();  
      dubai.render();
      paris.render();
      lima.render();

    
// let seattle = {
//     name : 'Seattle',
//     hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
//     AvgCookiesSale : 6.3 ,
//     minCustomer : 23,
//     maxCustomer : 65 ,
//     customer : 0 ,
//     total:0,
//     getCustomer:function(min , max) {
//       this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
//       this.total+=this.customer;
//       return this.customer;
//     } ,
//     render : function(){
  
//       let title = document.getElementById('seattle') ;
//       let artical = document.createElement('article')
//       title.appendChild(artical);
  
//       let hElem = document.createElement('h1');
//       artical.appendChild(hElem);
//       hElem.textContent=this.name;
  
  
//       let ulElem = document.createElement('ul');
//       artical.appendChild(ulElem);
//       for(let i=0 ; i<this.hoursSales.length; i++) {
//         let liElem =document.createElement('li');
//         liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
//         ulElem.appendChild(liElem);
//       }
//       artical.appendChild(ulElem);
//       let ulElem2 =document.createElement('ul');
//       artical.appendChild(ulElem2);
//       let liElem2=document.createElement('li');
//       liElem2.textContent=(`total   :    ${this.total}`);
//       ulElem2.appendChild(liElem2);
    
//     }} 

//     seattle.getCustomer(23,65);
//     seattle.render();
    

//     //second location..

//     let tokyo = {
//         name : 'tokyo',
//         hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
//         AvgCookiesSale :1.2 ,
//         minCustomer :3,
//         maxCustomer : 24 ,
//         customer : 0 ,
//         total:0,
//         getCustomer:function(min , max) {
//           this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
//           this.total+=this.customer;
//           return this.customer;
//         } ,
//         render : function(){
      
//           let title = document.getElementById('tokyo') ;
//           let artical = document.createElement('article')
//           title.appendChild(artical);
      
//           let hElem = document.createElement('h1');
//           artical.appendChild(hElem);
//           hElem.textContent=this.name;
      
      
//           let ulElem = document.createElement('ul');
//           artical.appendChild(ulElem);
//           for(let i=0 ; i<this.hoursSales.length; i++) {
//             let liElem =document.createElement('li');
//             liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
//             ulElem.appendChild(liElem);
//           }
//           artical.appendChild(ulElem);
//       let ulElem2 =document.createElement('ul');
//       artical.appendChild(ulElem2);
//       let liElem2=document.createElement('li');
//       liElem2.textContent=(`total   :    ${this.total}`);
//       ulElem2.appendChild(liElem2);
//       artical.appendChild(ulElem2);

        
//         }} 
          
    
//         tokyo.getCustomer(3,24);
//         tokyo.render();
        
// //third location :
        
//     let dubai = {
//         name : 'dubai',
//         hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
//         AvgCookiesSale :3.7 ,
//         minCustomer :11,
//         maxCustomer : 38 ,
//         customer : 0 ,
//         total:0,
//         getCustomer:function(min , max) {
//           this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
//           this.total+=this.customer;
//           return this.customer;
//         } ,
//         render : function(){
      
//           let title = document.getElementById('dubai') ;
//           let artical = document.createElement('article')
//           title.appendChild(artical);
      
//           let hElem = document.createElement('h1');
//           artical.appendChild(hElem);
//           hElem.textContent=this.name;
      
      
//           let ulElem = document.createElement('ul');
//           artical.appendChild(ulElem);
//           for(let i=0 ; i<this.hoursSales.length; i++) {
//             let liElem =document.createElement('li');
//             liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
//             ulElem.appendChild(liElem);
//           }
//           artical.appendChild(ulElem);

//           let ulElem2 =document.createElement('ul');
//       artical.appendChild(ulElem2);
//       let liElem2=document.createElement('li');
//       liElem2.textContent=(`total   :    ${this.total}`);
//       ulElem2.appendChild(liElem2);
//           artical.appendChild(ulElem2);
        
//         }} 
          
    
//         dubai.getCustomer(11,38);
//         dubai.render();
        

//         //fourth location:

           
//     let paris = {
//         name : 'paris',
//         hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
//         AvgCookiesSale :2.3 ,
//         minCustomer :20,
//         maxCustomer : 38 ,
//         customer : 0 ,
//         total:0,
//         getCustomer:function(min , max) {
//           this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
//           this.total+=this.customer;
//           return this.customer;
//         } ,
//         render : function(){
      
//           let title = document.getElementById('paris') ;
//           let artical = document.createElement('article')
//           title.appendChild(artical);
      
//           let hElem = document.createElement('h1');
//           artical.appendChild(hElem);
//           hElem.textContent=this.name;
      
      
//           let ulElem = document.createElement('ul');
//           artical.appendChild(ulElem);
//           for(let i=0 ; i<this.hoursSales.length; i++) {
//             let liElem =document.createElement('li');
//             liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
//             ulElem.appendChild(liElem);
//           }
//           artical.appendChild(ulElem);
//           let ulElem2 =document.createElement('ul');
//       artical.appendChild(ulElem2);
//       let liElem2=document.createElement('li');
//       liElem2.textContent=(`total   :    ${this.total}`);
//       ulElem2.appendChild(liElem2);
//       artical.appendChild(ulElem2);

        
//         }} 
          
    
//         paris.getCustomer(20,38);
//         paris.render();
        

        
//         //fifth location:

           
//     let lima = {
//         name : 'lima',
//         hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
//         AvgCookiesSale :4.6 ,
//         minCustomer :2,
//         maxCustomer : 16 ,
//         customer : 0 ,
//         total:0,
//         getCustomer:function(min , max) {
//           this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
//           this.total+=this.customer;
//           return this.customer;
//         } ,
//         render : function(){
      
//           let title = document.getElementById('lima') ;
//           let artical = document.createElement('article')
//           title.appendChild(artical);
      
//           let hElem = document.createElement('h1');
//           artical.appendChild(hElem);
//           hElem.textContent=this.name;
      
      
//           let ulElem = document.createElement('ul');
//           artical.appendChild(ulElem);
//           for(let i=0 ; i<this.hoursSales.length; i++) {
//             let liElem =document.createElement('li');
//             liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
//             ulElem.appendChild(liElem);
//           }
//           artical.appendChild(ulElem);
//           let ulElem2 =document.createElement('ul');
//       artical.appendChild(ulElem2);
//       let liElem2=document.createElement('li');
//       liElem2.textContent=(`total   :    ${this.total}`);
//       ulElem2.appendChild(liElem2);
//       artical.appendChild(ulElem2);

        
//         }} 
          
    
//         lima.getCustomer(2,16);
//         lima.render();
        