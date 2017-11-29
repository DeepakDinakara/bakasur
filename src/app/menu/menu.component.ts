import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   daysCount = [1,2,3,4,5];
   dayDetails= {1:{'day':'Monday','date':'4 Dec'},
2:{'day':'Tuesday','date':'5 Dec'},
3:{'day':'Wednesday','date':'6 Dec'},
4:{'day':'Thursday','date':'7 Dec'},
5:{'day':'Friday','date':'8 Dec'}};

   currentDay = 1;
   currentMenu = 1;
   likes= {'1_1':0,'2_1':0,'3_1':0,'4_1':0,'5_1':0,'1_2':0,'2_2':0,'3_2':0,'4_2':0,'5_2':0};
   dislikes={'1_1':0,'2_1':0,'3_1':0,'4_1':0,'5_1':0,'1_2':0,'2_2':0,'3_2':0,'4_2':0,'5_2':0};

   menus={'1_1':['http://www.fnstatic.co.uk/images/content/package/101-amazing-indian-recipes.jpeg',
'http://images.indianexpress.com/2017/11/khichdi_759.jpg',
'http://www.chingssecret.com/images/family_banner_1200_370.jpg',
'https://content1.jdmagicbox.com/comp/bangalore/q7/080pxx80.xx80.160304101252.d4q7/catalogue/indian-food-court-electronic-city-bangalore-home-delivery-restaurants-z117kl.jpg',
'https://media-cdn.tripadvisor.com/media/photo-s/0e/c6/38/1c/curry-magic-indian-food.jpg',
'https://riceandcurry.files.wordpress.com/2012/02/dscn2554.jpg'],
'2_1':['https://media-cdn.tripadvisor.com/media/photo-s/0b/71/97/4a/north-indian-food-kaitaia.jpg',
'https://indianhealthyrecipes.com/wp-content/uploads/2017/08/paneer-lababdar.jpg',
'http://www.maavalanindiatravels.com/wp-content/uploads/2016/01/Best-Indian-Food-dal-makhani.jpg',
'https://indianhealthyrecipes.com/wp-content/uploads/2017/10/bhindi-masala-recipe-348x232.jpg'],
'3_1':['https://www.fitfoodie.in/sites/default/files/02_0.jpg',
'https://media-cdn.tripadvisor.com/media/photo-s/0b/71/97/4d/north-indian-food-kaitaia.jpg',
'http://www.foodofy.com/wp-content/uploads/2015/07/north-indian-foods-15.jpg',
'https://www.fitfoodie.in/sites/default/files/08_5.jpg',
'http://www.cityshor.com/uploads/article/09_2016/1475040439_W_8_.jpg'],
'4_1':['http://bongong.com/images/recipes/Spicy_Onion_Rice/IMG_0031_1243361826_center.jpg',
'http://justindianfood.com/wp-content/uploads/2013/12/cholemasala1.jpg',
'https://i2.wp.com/blog.getfitso.com/wp-content/uploads/2016/10/North-Indian-Review-3-e1477471894462.jpg?resize=648%2C280',
'http://nu.tree.ooo/wp-content/uploads/2017/07/p3.jpg',
'https://cf0316.s3.amazonaws.com/cookificom/dishes/47/e40dab.jpg'],
'5_1':['http://english.mathrubhumi.com/polopoly_fs/1.1818744.1490269339!/image/image.jpg_gen/derivatives/landscape_822/image.jpg',
'https://media-cdn.tripadvisor.com/media/photo-s/0e/c6/38/4c/curry-magic-indian-food.jpg',
'https://bizimages.withfloats.com/actual/59e595b400ccd60544c00712.jpg',
'https://images.mapsofindia.com/my-india/2014/09/mava-kachori.jpg',
'https://i1.wp.com/blog-guru.net/wp-content/uploads/2015/11/Best-North-Indian-Food-Recipe3.jpg?ssl=1'],
'1_2':['https://www.whatsuplife.in/kolkata/blog/wp-content/uploads/2016/07/13971557301397600649-1024x678.jpg',
'http://hungrydunia.com/upload/0/20170203122043_0_paneer.jpg',
'http://www.namskar.ca/wp-content/uploads/2017/06/sahi-paneer-web-1046x470.jpg',
'https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg'],
'2_2':['https://www.boldsky.com/img/2016/04/22-1461298892-pic3.jpg',
'https://images.click.in/classifieds/images/151/17274286_28_6_2016_22_48_54_386859807_7ampemb9j.jpg',
'https://content1.jdmagicbox.com/comp/bangalore/q7/080pxx80.xx80.160304101252.d4q7/catalogue/indian-food-court-electronic-city-bangalore-home-delivery-restaurants-z117kl.jpg',
'http://cdn.c.photoshelter.com/img-get/I00009zUbNdQub.4/s/650/650/Chicken-Madras-Indian-Food-Pictures-PWP19274.jpg'],
'3_2':['http://indiafoods.india-biz.in/foods/images/naan1.jpg',
'https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/07/eU3ebuvIr31.jpg',
'http://3.bp.blogspot.com/-EmUP98MLGr4/Uuu4fBsC53I/AAAAAAAAK9w/dN5CKPpxdGQ/s1600/Aloo+Matar+Pulao.jpg',
'http://www.sangitaskitchen.com/wp-content/uploads/2014/03/palak-paneer11.jpg'],
'4_2':['http://www.vegrecipesofindia.com/wp-content/uploads/2015/01/hing-jeera-aloo-recipe1.jpg',
'http://3.bp.blogspot.com/-x3BXVLRhHsc/UGyCViYg0jI/AAAAAAAAAnw/ZwaHsZxxQHo/s1600/North+Indian+food+recipes+for+Rakhi.JPG',
'https://myannoyingopinions.files.wordpress.com/2014/11/rajma4.jpg?w=869',
'https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg'],
'5_2':['http://www.vegrecipesofindia.com/wp-content/uploads/2015/01/hing-jeera-aloo-recipe1.jpg',
'http://3.bp.blogspot.com/-x3BXVLRhHsc/UGyCViYg0jI/AAAAAAAAAnw/ZwaHsZxxQHo/s1600/North+Indian+food+recipes+for+Rakhi.JPG',
'https://myannoyingopinions.files.wordpress.com/2014/11/rajma4.jpg?w=869',
'https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg']};

   changeDay(item){
     this.currentDay = (item.index)+1;
     console.log(item);
   }
   getLikes(dayNumber,menuNumber){
     return this.likes[dayNumber+'_'+menuNumber];
   }
   getDisLikes(dayNumber,menuNumber){
     return this.dislikes[dayNumber+'_'+menuNumber];
   }
   like(dayNumber,menuNumber){
     this.likes[dayNumber+'_'+menuNumber]= this.likes[dayNumber+'_'+menuNumber]+1;
   }
   disLike(dayNumber,menuNumber){
     this.dislikes[dayNumber+'_'+menuNumber]= this.dislikes[dayNumber+'_'+menuNumber]+1;
   }
   changeMenu(){
     this.currentMenu= ((this.currentMenu)==1)?2:1;
   }
   getMenu(dayNumber, menuNumber){
     return this.menus[dayNumber+'_'+menuNumber];
   }
}
