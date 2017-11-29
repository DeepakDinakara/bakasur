import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   days = ['4 Dec Monday','5 Dec Tuesday','6 Dec Wednesday','7 Dec Thursday','8 Dec Friday'];
   currentDay = 1;
   currentMenu = 1;
   likes= {'1_1':0,'2_1':0,'3_1':0,'4_1':0,'5_1':0,'1_2':0,'2_2':0,'3_2':0,'4_2':0,'5_2':0};
   dislikes={'1_1':0,'2_1':0,'3_1':0,'4_1':0,'5_1':0,'1_2':0,'2_2':0,'3_2':0,'4_2':0,'5_2':0};

   menus={'1_1':['https://i.pinimg.com/736x/ae/43/7d/ae437d197c3185fdc87b6b49c2042692--desi-wedding-indian-wedding-food.jpg','https://assets.londonist.com/uploads/2016/05/i875/jashan_vegetarian_thali_1.jpg'],
'2_1':['https://assets.londonist.com/uploads/2016/05/i875/jashan_vegetarian_thali_1.jpg'],
'3_1':['http://del.h-cdn.co/assets/17/19/1494616646-maryland-.jpg'],
'4_1':['https://pauperswithouttravel.files.wordpress.com/2012/07/rajdhani3.jpeg'],
'5_1':['https://i.ytimg.com/vi/f3OsUwuWxgg/maxresdefault.jpg'],
'1_2':['https://upload.wikimedia.org/wikipedia/commons/8/86/Marwadi_Gujarati_Thali.jpg'],
'2_2':['https://upload.wikimedia.org/wikipedia/commons/7/70/India_ki_Thali.jpg'],
'3_2':['http://www.jauntlust.com/wp-content/uploads/2016/08/South-Indian-Food.jpg'],
'4_2':['https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sadhya_DSW.jpg/1200px-Sadhya_DSW.jpg'],
'5_2':['https://i.pinimg.com/736x/2a/90/6c/2a906c9e1b02936860c20ab30ac23889--andhra-recipes-indian-recipes.jpg']};

   changeDay(item){
     this.currentDay = (item.index)+1;
     console.log(item);
   }
   getLikes(menuNumber){
     return this.likes[this.currentDay+'_'+menuNumber];
   }
   getDislikes(menuNumber){
     return this.dislikes[this.currentDay+'_'+menuNumber];
   }
   like(menuNumber){
     this.likes[this.currentDay+'_'+menuNumber]= this.likes[this.currentDay+'_'+menuNumber]+1;
   }
   disLike(menuNumber){
     this.dislikes[this.currentDay+'_'+menuNumber]= this.dislikes[this.currentDay+'_'+menuNumber]+1;
   }
   changeMenu(){
     this.currentMenu= ((this.currentMenu)==1)?2:1;
   }
   getMenu(menuNumber){
     return this.menus[this.currentDay+'_'+menuNumber];
   }
}
