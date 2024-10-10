let myLeads=[]
    //myLeads=JSON.parse(myLeads)
    //myLeads.push("www.lead2.com")
    //myLeads=JSON.stringify(myLeads)
      const inputEl=document.getElementById("input-el")
      const inputBtn=document.getElementById("input-btn");
      const ulEl=document.getElementById("ul-el")
      const deleteBtn=document.getElementById("delete-btn")
      const tabBtn=document.getElementById("tab-btn")
      //localStorage.setItem("myLeads","www.examplelead.com")
      
      let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
      if(leadsFromLocalStorage){
        myLeads=leadsFromLocalStorage
        render(myLeads)
    }
    
    tabBtn.addEventListener("click",function(){
        chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
           
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads",JSON.stringify(myLeads))
            render(myLeads)
        })
    })
    deleteBtn.addEventListener("click",function(){
        console.log('double clicked!')
        localStorage.clear()
        myLeads=[]
        render(myLeads)
    })
      inputBtn.addEventListener("click",function(){
        myLeads.push(inputEl.value)
        inputEl.value=""
        localStorage.setItem("myLeads",JSON.stringify(myLeads) )
        render(myLeads)
      })
      function render(leads){
      let listItems="";
      for(let i=0;i<leads.length;i++)
      {
        //ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
        listItems+=`<li><a href='${leads[i]}'>${leads[i]}</a></li>`
        // const li=document.createElement("li")
        // li.textContent=myLeads[i];
        // ulEl.append(li)
      }
      ulEl.innerHTML=listItems
    }