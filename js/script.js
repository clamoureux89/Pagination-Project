/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


///Establish Global Variables
const studentlist = document.querySelector('ul')
const students = studentlist.getElementsByTagName('li')
const itemsperpage = 10


///Create function for showing list. 
///Takes two arguments, the first being the list of students, the second being which page of the list to display

const ShowPage=(list,page) => {
   console.log(page)
   let first = (page *itemsperpage)-(itemsperpage -1);
   let second = (page*itemsperpage);
   
   for(i=0; i< list.length;i++){


   for(let i = 0; i < list.length; i++){

      if (i >= first && i < second){
         list[i].style.display = "block";

      }else{
         list[i].style.display = "none";
      }
   }
}
}
///Call first function for initial page
ShowPage(students,1);

///Create function for establishing page links.  Adds event listeners so that the user can click to different pages.
///Also assigns and removes the "active" class so users know which page they are on
const appendPageLinks = (list) => {
   const site = document.querySelector('.page');
   let pages = Math.ceil(list.length/itemsperpage);
   const pagination = document.createElement('div');
   pagination.classList.add('pagination');
   let pages_list = document.createElement('ul');
   pages_list.classList.add('pages-list');
   pagination.appendChild(pages_list);
   site.appendChild(pagination);
   

   for(i=1;i<=pages;i++){
      let icon = document.createElement('li');
      let number = document.createElement('a');
      number.href = "#";
      number.textContent = i;
      icon.appendChild(number)
      pages_list.appendChild(icon);
      number.addEventListener('click',(e) => {
      console.log(i);
      let page_links = document.getElementsByClassName('active')
      for(l=0;l<page_links.length;l++){
         page_links[l].classList.remove('active');
      }
      ShowPage(list,number.textContent)
      e.target.classList.add('active');
      })
   }
}



appendPageLinks(students);
