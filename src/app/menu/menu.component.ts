import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {
  }

  daysCount = [1, 2, 3, 4, 5, 6];
  dayDetails = {
    1: { 'day': 'Wednesday', 'date': '29 Nov' },
    2: { 'day': 'Thursday', 'date': '30 Nov' },
    3: { 'day': 'Friday', 'date': '1 Dec' },
    4: { 'day': 'Monday', 'date': '4 Dec' },
    5: { 'day': 'Tuesday', 'date': '5 Dec' },
    6: { 'day': 'Wednesday', 'date': '6 Dec' }
  };

  currentDay = 3;
  currentMenu = 1;
  likes = {
    "1_1": 0,
    "2_1": 0,
    "3_1": 0,
    "4_1": 0,
    "5_1": 0,
    "1_2": 0,
    "2_2": 0,
    "3_2": 0,
    "4_2": 0,
    "5_2": 0,
    "6_1": 0,
    "6_2": 0
  };
  dislikes = {
    "1_1": 0,
    "2_1": 0,
    "3_1": 0,
    "4_1": 0,
    "5_1": 0,
    "1_2": 0,
    "2_2": 0,
    "3_2": 0,
    "4_2": 0,
    "5_2": 0,
    "6_1": 0,
    "6_2": 0
  };
  descriptions = {
    "1_1": "Tomato Soup, Tandoori Paneer Tikka, Russian Salad / Maccroni, Dal Makhani,Tandoori Roti,Sambhar Rice, Mix Veg. Pulao, Gulab Jamun, Curd, Butter Milk , Papad",
    "1_2": "Veg. Clear Soup, Veg. Manchurian Dry, Chilly Paneer Gravy, Roomali Roti , Soya Dum Biryani, Dahi Vada, Badusha,Curd, Butter Milk , Papad",
    "2_1": "Veg. Munchow, Chilly Paneer Dry ,Veg Chopsouey , Malai Kofta, Tandoori Roti,Steam Rice, Sambhar Vada, Jalebi, Curd, Butter Milk , Papad ",
    "2_2": "Lemon & Coriander, Veg. Manchurian Dry, Sweet & Sour Veg, Veg Hakka Noodles, Chilly Garlic Rice, Jeera Pulao, Tawa Parantha, Rajma ,Rava Kesri, Sambhar Rice, Mix Veg. Pulao, Rasgulla,Curd, Butter Milk , Papad",
    "3_1": "Veg. Noodle Soup, Potatoes in Honey & Chilly , Manchurian Gravy, Butter Roti, Veg. Pulao, Dosa (Butter), Icecream,Curd, Butter Milk , Papad",
    "3_2": "Hot & Sour,Fried Vegetables in Salt, Sweet & Sour Veg, Plain Naan, Mix Veg. Pulao, Paper Dosa, Laddu,Curd, Butter Milk , Papad",
    "4_1": "Tomato Soup, Crispy Spinach & Baby - Corn, Mix. Veg. in Hot Garlic Sauce,Shahi Paneer, Butter Naan, Matka Biryani With Raita, Rawa Dosa, Bason Laddu,Curd, Butter Milk , Papad",
    "4_2": "Veg. Clear Soup, Chilly Mushroom Dry, Kadhai Paneer, Garlic Naan Butter,Hyderabadi Biryani , Mix Veg Uttapam, Kaju katli,Curd, Butter Milk , Papad",
    "5_1": "Sweet Corn, Spring Roll, Paneer Butter Masala, Tawa Parantha , Veg. Pulao, Onion Rawa Dosa, Mango Burfi,Curd, Butter Milk , Papad",
    "5_2": "Lemon & Coriander, Chilly Paneer Dry, Mushroom Masala, Laccha Parantha, Steam Rice, Mysore Dosa, Carrot Halwa,Curd, Butter Milk , Papad",
    "6_1": "Tomato Soup, Tandoori Paneer Tikka, Russian Salad / Maccroni, Dal Makhani,Tandoori Roti,Sambhar Rice, Mix Veg. Pulao, Gulab Jamun, Curd, Butter Milk , Papad",
    "6_2": "Lemon & Coriander, Veg. Manchurian Dry, Sweet & Sour Veg, Veg Hakka Noodles, Chilly Garlic Rice, Jeera Pulao, Tawa Parantha, Rajma ,Rava Kesri, Sambhar Rice, Mix Veg. Pulao, Rasgulla,Curd, Butter Milk , Papad",

  };
  menus = {
    "1_1": [
      "http://www.vegrecipesofindia.com/wp-content/uploads/2013/12/tomato-soup-recipe-4.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/71/97/4a/north-indian-food-kaitaia.jpg",
      "https://indianhealthyrecipes.com/wp-content/uploads/2017/08/paneer-lababdar.jpg",
      "http://www.maavalanindiatravels.com/wp-content/uploads/2016/01/Best-Indian-Food-dal-makhani.jpg",
      "https://indianhealthyrecipes.com/wp-content/uploads/2017/10/bhindi-masala-recipe-348x232.jpg",
      "https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/06/20131010/easy-rasgulla-recipes-600x451.jpg",
      "http://www.whatshelikes.in/wp-content/uploads/2014/06/phulka-indian-roti-1000x563.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "2_1": [
      "https://www.archanaskitchen.com//images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg",
      "http://www.fnstatic.co.uk/images/content/package/101-amazing-indian-recipes.jpeg",
      "http://images.indianexpress.com/2017/11/khichdi_759.jpg",
      "http://www.chingssecret.com/images/family_banner_1200_370.jpg",
      "https://content1.jdmagicbox.com/comp/bangalore/q7/080pxx80.xx80.160304101252.d4q7/catalogue/indian-food-court-electronic-city-bangalore-home-delivery-restaurants-z117kl.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/c6/38/1c/curry-magic-indian-food.jpg",
      "https://riceandcurry.files.wordpress.com/2012/02/dscn2554.jpg",
      "https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2016/09/khasta-roti-recipe-2.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "3_1": [
      "https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg",
      "https://www.fitfoodie.in/sites/default/files/02_0.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/71/97/4d/north-indian-food-kaitaia.jpg",
      "http://www.foodofy.com/wp-content/uploads/2015/07/north-indian-foods-15.jpg",
      "https://www.fitfoodie.in/sites/default/files/08_5.jpg",
      "http://www.cityshor.com/uploads/article/09_2016/1475040439_W_8_.jpg",
      "https://ddc72v09c4xlz.cloudfront.net/landing-page/sweets/images/popular/5-min.jpg",
      "https://www.saveur.com/sites/saveur.com/files/styles/1000_1x_/public/league-of-kitchens-roti-7_2000x1500.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "4_1": [
      "http://bongong.com/images/recipes/Spicy_Onion_Rice/IMG_0031_1243361826_center.jpg",
      "http://justindianfood.com/wp-content/uploads/2013/12/cholemasala1.jpg",
      "https://i2.wp.com/blog.getfitso.com/wp-content/uploads/2016/10/North-Indian-Review-3-e1477471894462.jpg?resize=648%2C280",
      "http://nu.tree.ooo/wp-content/uploads/2017/07/p3.jpg",
      "https://cf0316.s3.amazonaws.com/cookificom/dishes/47/e40dab.jpg",
      "http://i.ndtvimg.com/i/2015-07/sweet-625_625x350_51438261999.jpg",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2016/01/missi-roti-recipe-2.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "5_1": [
      "http://english.mathrubhumi.com/polopoly_fs/1.1818744.1490269339!/image/image.jpg_gen/derivatives/landscape_822/image.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/c6/38/4c/curry-magic-indian-food.jpg",
      "https://bizimages.withfloats.com/actual/59e595b400ccd60544c00712.jpg",
      "https://images.mapsofindia.com/my-india/2014/09/mava-kachori.jpg",
      "https://i1.wp.com/blog-guru.net/wp-content/uploads/2015/11/Best-North-Indian-Food-Recipe3.jpg?ssl=1",
      "https://cdn.shopify.com/s/files/1/1554/5497/files/Gujiya_large.jpg?v=1477059623",
      "http://www.manjulaskitchen.com/blog/wp-content/uploads/roti_chapati.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "1_2": [
      "https://www.whatsuplife.in/kolkata/blog/wp-content/uploads/2016/07/13971557301397600649-1024x678.jpg",
      "http://hungrydunia.com/upload/0/20170203122043_0_paneer.jpg",
      "http://www.namskar.ca/wp-content/uploads/2017/06/sahi-paneer-web-1046x470.jpg",
      "https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg",
      "https://cdn.yourstory.com/wp-content/uploads/2015/07/yourstory-zimplistic.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "2_2": [
      "https://www.boldsky.com/img/2016/04/22-1461298892-pic3.jpg",
      "https://images.click.in/classifieds/images/151/17274286_28_6_2016_22_48_54_386859807_7ampemb9j.jpg",
      "https://content1.jdmagicbox.com/comp/bangalore/q7/080pxx80.xx80.160304101252.d4q7/catalogue/indian-food-court-electronic-city-bangalore-home-delivery-restaurants-z117kl.jpg",
      "http://cdn.c.photoshelter.com/img-get/I00009zUbNdQub.4/s/650/650/Chicken-Madras-Indian-Food-Pictures-PWP19274.jpg",
      "http://www.rehmateshereen.com/wp-content/uploads/2015/10/malai-cham-cham.jpg",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2016/09/khasta-roti-recipe-2.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "3_2": [
      "http://indiafoods.india-biz.in/foods/images/naan1.jpg",
      "https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/07/eU3ebuvIr31.jpg",
      "http://3.bp.blogspot.com/-EmUP98MLGr4/Uuu4fBsC53I/AAAAAAAAK9w/dN5CKPpxdGQ/s1600/Aloo+Matar+Pulao.jpg",
      "http://www.sangitaskitchen.com/wp-content/uploads/2014/03/palak-paneer11.jpg",
      "https://3.bp.blogspot.com/-S_uV2sbtHnI/VyGeMd-PlYI/AAAAAAAAmpY/4TxW7IkkYHA9DSUAP8SJ1Tg24DAAHdvvQCLcB/s1600/Badusha%2Brecipe.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "4_2": [
      "http://www.vegrecipesofindia.com/wp-content/uploads/2015/01/hing-jeera-aloo-recipe1.jpg",
      "http://3.bp.blogspot.com/-x3BXVLRhHsc/UGyCViYg0jI/AAAAAAAAAnw/ZwaHsZxxQHo/s1600/North+Indian+food+recipes+for+Rakhi.JPG",
      "https://myannoyingopinions.files.wordpress.com/2014/11/rajma4.jpg?w=869",
      "https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg",
      "http://www.indobase.com/recipes/rec-images/chum-chum.jpg",
      "https://images.pachakam.com/RcpImags/North-Indian-Style-Thava-Roti-Pachakam-10430.jpghttp://l7.alamy.com/zooms/916aafe164d949129cf07b27ed993d2d/traditional-indian-roti-ready-to-serve-g0t2r5.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "5_2": [
      "http://www.vegrecipesofindia.com/wp-content/uploads/2015/01/hing-jeera-aloo-recipe1.jpg",
      "http://3.bp.blogspot.com/-x3BXVLRhHsc/UGyCViYg0jI/AAAAAAAAAnw/ZwaHsZxxQHo/s1600/North+Indian+food+recipes+for+Rakhi.JPG",
      "https://myannoyingopinions.files.wordpress.com/2014/11/rajma4.jpg?w=869",
      "https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg",
      "http://foodofinterest.com/wp-content/uploads/2017/06/DharwadPeda-1200x804.jpg",
      "https://en.petitchef.com/imgupl/recipe/super-healthy-multigrain-roti-chapati-indian-flat-bread--md-140968p211533.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"
    ],
    "6_1": ["https://www.tarladalal.com/members/524831/images/aam_ka_panna-1.jpg?size=250X249",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2015/01/hing-jeera-aloo-recipe1.jpg",
      "http://3.bp.blogspot.com/-x3BXVLRhHsc/UGyCViYg0jI/AAAAAAAAAnw/ZwaHsZxxQHo/s1600/North+Indian+food+recipes+for+Rakhi.JPG",
      "https://myannoyingopinions.files.wordpress.com/2014/11/rajma4.jpg?w=869",
      "https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg",
      "https://du7ybees82p4m.cloudfront.net/56a288e117d3f8.50310584.jpg",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2016/09/khasta-roti-recipe-2.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"],

    "6_2": ["http://www.vegrecipesofindia.com/wp-content/uploads/2013/12/tomato-soup-recipe-4.jpg",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2015/01/hing-jeera-aloo-recipe1.jpg",
      "http://3.bp.blogspot.com/-x3BXVLRhHsc/UGyCViYg0jI/AAAAAAAAAnw/ZwaHsZxxQHo/s1600/North+Indian+food+recipes+for+Rakhi.JPG",
      "https://myannoyingopinions.files.wordpress.com/2014/11/rajma4.jpg?w=869",
      "https://i.ytimg.com/vi/HiciJDlGDbY/maxresdefault.jpg",
      "https://cdn.shopify.com/s/files/1/1554/5497/files/Gujiya_large.jpg?v=1477059623",
      "http://www.vegrecipesofindia.com/wp-content/uploads/2016/01/missi-roti-recipe-2.jpg",
      "http://pindpunjabidhaba.in/wp-content/uploads/2016/10/papad.jpg",
      "https://cdn.awesomecuisine.com/wp-content/uploads/2008/11/masala_buttermilk.jpg",
      "https://dailypost.in/wp-content/uploads/2017/10/curd.jpg"]
  };

  changeDay(item) {
    this.currentDay = (item.index) + 1;
    console.log(item);
  }
  getLikes(dayNumber, menuNumber) {
    return this.likes[dayNumber + '_' + menuNumber];
  }
  getDisLikes(dayNumber, menuNumber) {
    return this.dislikes[dayNumber + '_' + menuNumber];
  }
  like(dayNumber, menuNumber) {
    this.likes[dayNumber + '_' + menuNumber] = this.likes[dayNumber + '_' + menuNumber] + 1;
  }
  disLike(dayNumber, menuNumber) {
    this.dislikes[dayNumber + '_' + menuNumber] = this.dislikes[dayNumber + '_' + menuNumber] + 1;
  }
  changeMenu() {
    this.currentMenu = ((this.currentMenu) == 1) ? 2 : 1;
  }
  getMenu(dayNumber, menuNumber) {
    return this.menus[dayNumber + '_' + menuNumber];
  }
  getDescription(dayNumber, menuNumber) {
    return this.descriptions[dayNumber + '_' + menuNumber].substr(0, 100);
  }
  canLike(dayNumber) {
    return this.currentDay <= dayNumber;
  }

  openFeedbackDialog(): void {
    let dialogRef = this.dialog.open(FeedbackComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Feedback Received. Thanks!', 'Success', {
        duration: 1000,
        panelClass: 'success-color'
      });
    });
  }

  openMenuDetails(): void {
    let dialogRef = this.dialog.open(MenuDetailsComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Menu Details dialog was closed');

    });
  }
}


@Component({
  selector: 'feedback-component',
  templateUrl: 'feedback-dialog.html',
})
export class FeedbackComponent {

  rating: number;
  constructor(
    public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addRating(inputRating: number): void {
    this.rating = inputRating;
  }

}

@Component({
  selector: 'menu-details-component',
  templateUrl: 'menu-details.html',
})
export class MenuDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<MenuDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}