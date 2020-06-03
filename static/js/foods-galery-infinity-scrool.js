window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       //User is currently at the bottom of the page
        addNewItem();
    }
};


function addNewItem(){
  var itemCount = document.getElementById("foods-list").childElementCount;
  console.log(itemCount)
  const itemLimit = 4; //total number of items to retrieve
  //retrieve the next list of items from wherever
  var nextTopItems = getNextItemSimulator(itemCount); 
  nextTopItems.forEach(function(item) {
    console.log(item)
  //add the items to your view
  document.getElementById("foods-list").innerHTML +='<div class="card" data-aos="flip-left"><div class="content"><h2 class="title">'+item.adi+'</h2><p class="copy">Tərkib: '+item.terkibi+'</p><button class="btn">View Trips</button></div></div>'
    // document.getElementById("foods-list").innerHTML += "<div data-aos='flip-left' data-aos-duration='1000' class='col-md-4'>"+item+"</div>"; 
    document.getElementById("footer").style.display = "block";
  });

  setTimeout(function(){
       //remove footer info message
    document.getElementById("footer").style.display = "none";
  }, 500);
}

function getNextItemSimulator(currentItem){ 
     //Just some dummy data to simulate an api response

  var dummyItems = []; 
  dummyItems=[
  '1','2','3','4','5','6','7','8',

  {'adi':'ZAVOD ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ un, xəmir mayası, şəkər tozu, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 6.9, Yağlar 1.0 q, Karbohidratlar 46.3, Enerji dəyəri 221 kkal',
  'sekili':'http://nafis.az/sites/default/files/zavod.jpg'
  },

  {'adi':'BORODİN ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ buğda unu, Çovdar unu, qıcqırdılmış çovdar səmənisi, təbii maya, preslənmiş xəmir mayası, kəpək, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 10.1, Yağlar 1.5 q, Karbohidratlar 70.9, Enerji dəyəri 335.5 kkal',
  'sekili':'http://nafis.az/sites/default/files/borodin.jpg'
  },
  {'adi':'GƏNCƏ ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ buğda unu, preslənmiş xəmir mayası, şəkər tozu, ekstra xörək duzu, içməli su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 6.9, Yağlar 1.0 q, Karbohidratlar 46.3, Enerji dəyəri 221 kkal',
  'sekili':'http://nafis.az/sites/default/files/gence.jpg'
  },
  {'adi':'SERPANTİN ÇÖRƏYİ',
  'terkibi':'Əla növ un, qara un, solod, quru maya, şəkər, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 8, Yağlar 2 q, Karbohidratlar 55, Enerji dəyəri 256 kkal',
  'sekili':'http://nafis.az/sites/default/files/serpantin%20%C3%A7%C3%B6r%C9%99yi_0.jpg'
  },
   {'adi':'ZAVOD ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ un, xəmir mayası, şəkər tozu, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 6.9, Yağlar 1.0 q, Karbohidratlar 46.3, Enerji dəyəri 221 kkal',
  'sekili':'http://nafis.az/sites/default/files/zavod.jpg'
  },

  {'adi':'BORODİN ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ buğda unu, Çovdar unu, qıcqırdılmış çovdar səmənisi, təbii maya, preslənmiş xəmir mayası, kəpək, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 10.1, Yağlar 1.5 q, Karbohidratlar 70.9, Enerji dəyəri 335.5 kkal',
  'sekili':'http://nafis.az/sites/default/files/borodin.jpg'
  },
  {'adi':'GƏNCƏ ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ buğda unu, preslənmiş xəmir mayası, şəkər tozu, ekstra xörək duzu, içməli su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 6.9, Yağlar 1.0 q, Karbohidratlar 46.3, Enerji dəyəri 221 kkal',
  'sekili':'http://nafis.az/sites/default/files/gence.jpg'
  },
  {'adi':'SERPANTİN ÇÖRƏYİ',
  'terkibi':'Əla növ un, qara un, solod, quru maya, şəkər, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 8, Yağlar 2 q, Karbohidratlar 55, Enerji dəyəri 256 kkal',
  'sekili':'http://nafis.az/sites/default/files/serpantin%20%C3%A7%C3%B6r%C9%99yi_0.jpg'
  },
   {'adi':'ZAVOD ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ un, xəmir mayası, şəkər tozu, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 6.9, Yağlar 1.0 q, Karbohidratlar 46.3, Enerji dəyəri 221 kkal',
  'sekili':'http://nafis.az/sites/default/files/zavod.jpg'
  },

  {'adi':'BORODİN ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ buğda unu, Çovdar unu, qıcqırdılmış çovdar səmənisi, təbii maya, preslənmiş xəmir mayası, kəpək, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 10.1, Yağlar 1.5 q, Karbohidratlar 70.9, Enerji dəyəri 335.5 kkal',
  'sekili':'http://nafis.az/sites/default/files/borodin.jpg'
  },
  {'adi':'GƏNCƏ ÇÖRƏYİ',
  'terkibi':'Tərkib:Əla növ buğda unu, preslənmiş xəmir mayası, şəkər tozu, ekstra xörək duzu, içməli su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 6.9, Yağlar 1.0 q, Karbohidratlar 46.3, Enerji dəyəri 221 kkal',
  'sekili':'http://nafis.az/sites/default/files/gence.jpg'
  },
  {'adi':'SERPANTİN ÇÖRƏYİ',
  'terkibi':'Əla növ un, qara un, solod, quru maya, şəkər, duz, su. 100 q Məhsulun qida və enerji dəyəri: Zülallar 8, Yağlar 2 q, Karbohidratlar 55, Enerji dəyəri 256 kkal',
  'sekili':'http://nafis.az/sites/default/files/serpantin%20%C3%A7%C3%B6r%C9%99yi_0.jpg'
  },
  ]
  const dummyItemCount = dummyItems.length;

  var nextTopDummyItems = [];
  // for(i = 1; i <= dummyItemCount; i++){
  // //add to main dummy list
  //     dummyItems.push("Movie " + i);
  // }
  var countTen = 4;
  var nextItem = currentItem + 1;
  for(i = nextItem; i <= dummyItems.length; i++){
      //get next 10 records from dummy list
      nextTopDummyItems.push(dummyItems[i - 1]);
      countTen--;
      if(countTen == 0)break;
  }
    console.log(nextTopDummyItems,currentItem)
     return nextTopDummyItems;
}