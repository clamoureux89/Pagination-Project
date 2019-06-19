/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



const studentlist = document.querySelector('ul')
const students = studentlist.getElementsByTagName('li')


function ShowPage(list,page) {
   itemsperpage = 10
   first = (page *itemsperpage)-(itemsperpage +1);
   second = (page*itemsperpage) - 1;
   
   for(i=0; i< list.length;i++){
      list[i].style.display = "none";
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
   pages = Math.ceil(list.length/itemsperpage);
   pagination = document.createElement('div');
   pagination.classList.add('pagination');
   pages_list = document.createElement('ul');
   pages_list.classList.add('pages-list');
   pagination.appendChild(pages_list);
   site.appendChild(pagination);


   for(i=1;i<pages;i++){
      icon = document.createElement('li');
      number = document.createElement('a');
      number.herf = "#";
      number.textContent = i;
      icon.appendChild(number)
      pages_list.appendChild(icon);
      number.addEventListener('click',() => {
         ShowPage(students,i);
         icons = pagination.getElementsByTagName('li')
         for(i=0;i<icons.length;i++)
            {icons[i].classList.remove('active')}
         event.target.classList.add('active');
      })
   }
}



ShowPage(students,1);
appendPageLinks(students);
