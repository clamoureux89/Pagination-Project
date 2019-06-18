/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

function checkForTarget(link){
   if(link != event.target){
      link.classList.remove('active');
   }
}


const studentlist = document.querySelector('ul')
const students = studentlist.getElementsByTagName('li')
itemsperpage = 10

function ShowPage(list,page) {
   first = (page *itemsperpage)-(itemsperpage +1);
   second = (page*itemsperpage) - 1;
   for(i=0; i< list.length;i++){
      if ([i]> first && [i] <= second){
         list[i].style.display = "block";
         console.log(i+"not changed");
      }else{
         list[i].style.display = "none";
         console.log(i + "is changed");
      }
   }
}




const appendPageLinks = (list) => {
   site = document.querySelector('.page');
   pages = list/itemsperpage;
   pagination = document.createElement('div');
   pagination.classList.add('pagination');
   pages_list = document.createElement('ul');
   pages_list.classList.add('pages-list');
   pagination.appendChild(pages_list);
   site.appendChild(pagination);
   for(i=1;i<pages;i++){
      icon = document.createElement('li');
      number = document.createElement('a');
      number.herf === "#";
      number.textContent === i;
      pages_list.appendChild(number);
      document.addEventListener('click',() => {
         ShowPage(list,event.target)
         event.target.classList.add('active')

      })
   }
}



ShowPage(students,1);
appendPageLinks(students);
