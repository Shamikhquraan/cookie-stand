'use strict';
//shamikh j.script .. 

//first location ..

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
let seattle = {
    name : 'Seattle',
    hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
    AvgCookiesSale : 6.3 ,
    minCustomer : 23,
    maxCustomer : 65 ,
    customer : 0 ,
    getCustomer:function(min , max) {
      this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
      return this.customer;
    } ,
    render : function(){
  
      let title = document.getElementById('seattle') ;
      let artical = document.createElement('article')
      title.appendChild(artical);
  
      let hElem = document.createElement('h1');
      artical.appendChild(hElem);
      hElem.textContent=this.name;
  
  
      let ulElem = document.createElement('ul');
      artical.appendChild(ulElem);
      for(let i=0 ; i<this.hoursSales.length; i++) {
        let liElem =document.createElement('li');
        liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
        ulElem.appendChild(liElem);
      }
      artical.appendChild(ulElem);
    
    }} 

    seattle.getCustomer(23,65);
    seattle.render();
    

    //second location..

    let tokyo = {
        name : 'tokyo',
        hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
        AvgCookiesSale :1.2 ,
        minCustomer :3,
        maxCustomer : 24 ,
        customer : 0 ,
        getCustomer:function(min , max) {
          this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
          return this.customer;
        } ,
        render : function(){
      
          let title = document.getElementById('tokyo') ;
          let artical = document.createElement('article')
          title.appendChild(artical);
      
          let hElem = document.createElement('h1');
          artical.appendChild(hElem);
          hElem.textContent=this.name;
      
      
          let ulElem = document.createElement('ul');
          artical.appendChild(ulElem);
          for(let i=0 ; i<this.hoursSales.length; i++) {
            let liElem =document.createElement('li');
            liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
            ulElem.appendChild(liElem);
          }
          artical.appendChild(ulElem);
        
        }} 
          
    
        tokyo.getCustomer(3,24);
        tokyo.render();
        
//third location :
        
    let dubai = {
        name : 'dubai',
        hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
        AvgCookiesSale :3.7 ,
        minCustomer :11,
        maxCustomer : 38 ,
        customer : 0 ,
        getCustomer:function(min , max) {
          this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
          return this.customer;
        } ,
        render : function(){
      
          let title = document.getElementById('dubai') ;
          let artical = document.createElement('article')
          title.appendChild(artical);
      
          let hElem = document.createElement('h1');
          artical.appendChild(hElem);
          hElem.textContent=this.name;
      
      
          let ulElem = document.createElement('ul');
          artical.appendChild(ulElem);
          for(let i=0 ; i<this.hoursSales.length; i++) {
            let liElem =document.createElement('li');
            liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
            ulElem.appendChild(liElem);
          }
          artical.appendChild(ulElem);
        
        }} 
          
    
        dubai.getCustomer(11,38);
        dubai.render();
        

        //fourth location:

           
    let paris = {
        name : 'paris',
        hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
        AvgCookiesSale :2.3 ,
        minCustomer :20,
        maxCustomer : 38 ,
        customer : 0 ,
        getCustomer:function(min , max) {
          this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
          return this.customer;
        } ,
        render : function(){
      
          let title = document.getElementById('paris') ;
          let artical = document.createElement('article')
          title.appendChild(artical);
      
          let hElem = document.createElement('h1');
          artical.appendChild(hElem);
          hElem.textContent=this.name;
      
      
          let ulElem = document.createElement('ul');
          artical.appendChild(ulElem);
          for(let i=0 ; i<this.hoursSales.length; i++) {
            let liElem =document.createElement('li');
            liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
            ulElem.appendChild(liElem);
          }
          artical.appendChild(ulElem);
        
        }} 
          
    
        paris.getCustomer(20,38);
        paris.render();
        

        
        //fifth location:

           
    let lima = {
        name : 'lima',
        hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
        AvgCookiesSale :4.6 ,
        minCustomer :2,
        maxCustomer : 16 ,
        customer : 0 ,
        getCustomer:function(min , max) {
          this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
          return this.customer;
        } ,
        render : function(){
      
          let title = document.getElementById('lima') ;
          let artical = document.createElement('article')
          title.appendChild(artical);
      
          let hElem = document.createElement('h1');
          artical.appendChild(hElem);
          hElem.textContent=this.name;
      
      
          let ulElem = document.createElement('ul');
          artical.appendChild(ulElem);
          for(let i=0 ; i<this.hoursSales.length; i++) {
            let liElem =document.createElement('li');
            liElem.textContent=(` ${this.hoursSales[i]}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. `);
            ulElem.appendChild(liElem);
          }
          artical.appendChild(ulElem);
        
        }} 
          
    
        lima.getCustomer(2,16);
        lima.render();
        