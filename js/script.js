/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



const studentlist = document.querySelector('ul')
const students = studentlist.getElementsByTagName('li')
const itemsperpage = 10

const ShowPage=(list,page) => {
   
   let first = (page *itemsperpage)-(itemsperpage +1);
   let second = (page*itemsperpage) - 1;
   
   for(i=0; i< list.length;i++){

      if ([i]> first && [i] <= second){
         list[i].style.display = "block";
         
      }else{
         list[i].style.display = "none";
         
      }
   }
}


ShowPage(students,1);

const appendPageLinks = (list) => {
   const site = document.querySelector('.page');
   let pages = Math.ceil(list.length/itemsperpage);
   const pagination = document.createElement('div');
   pagination.classList.add('pagination');
   let pages_list = document.createElement('ul');
   pages_list.classList.add('pages-list');
   pagination.appendChild(pages_list);
   site.appendChild(pagination);
   

   for(i=1;i<pages;i++){
      let icon = document.createElement('li');
      let number = document.createElement('a');
      number.href = "#";
      number.textContent = i;
      icon.appendChild(number)
      pages_list.appendChild(icon);
      
   }
   let icons = document.querySelectorAll('a');
   for(i=1;i<pages;i++){
   icons[i].addEventListener('click',(e) => {
      console.log(i);
      ShowPage(list,i);
      for(l=0;l<icons.length;l++){
         icons[l].classList.remove('active');
      }
      e.target.classList.add('active');
      })
   }
}



appendPageLinks(students);
