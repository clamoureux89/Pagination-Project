/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

function checkForTarget(link){
   if(link != event.target){
      link.classList.remove('active')
   }
}


let studentlist = document.querySelector('ul')
let students = studentlist.getElementsByTagName('li')
itemsperpage = 10

function ShowPage(list,page) {
   for(i=0; i< list.length;i++){
      list[i].style.display === "none"
      console.log(i + "is changed")
      if ((page *itemsperpage)-itemsperpage>=i>=page*itemsperpage){
         list[i].style("is-shown")
      }
   }
}




const appendPageLinks = (list) => {
   site = document.querySelector('.page')
   pages = list/itemsperpage
   pagination = document.createElement('div')
   pagination.classList.add('pagination')
   pages_list = document.createElement('ul')
   pages_list.classList.add('pages-list')
   pagination.appendChild(pages_list)
   site.appendChild(pagination)
   for(i=1;i<pages;i++){
      icon = document.createElement('li')
      number = document.createElement('a')
      number.herf == "#"
      number.textContent == i
      pages_list.appendChild(number)
      document.addEventListener('click',ShowPage(list,event.target))
      document.addEventListener('click',checkForTarget(icon))
      document.addEventListener('click',event.target.classList.add('active'))
   }
}



ShowPage(students,1)
appendPageLinks(students)
