import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
// products:Iproduct[]=[]
products:any
totalPrice:number=0;
myDate:Date;
filterProduct:any

  constructor() {
    this.myDate=new Date;
    this.products=[
      {
      id:1,
      title:'iphone 13 pro max',
      imageUrl:'https://i.insider.com/618c1c0c596d9b00111856a9?width=1136&format=jpeg',
      price:800,
      quantity:10,
      type:"iphone"

    },
    {
      id:2,
      title:'iphone 12',
      imageUrl:'https://i.insider.com/5f8f4178dace450018a3e489?width=700',
      price:700,
      quantity:8,
      type:"iphone"

    },
    {
      id:3,
      title:'iphone 11',
      imageUrl:'https://mobizil.com/wp-content/uploads/2019/09/Apple-iPhone-11.jpg',
      price:600,
      quantity:6,
      type:"iphone"

    },{
      id:4,
      title:'iphone 10',
      imageUrl:'https://c8.alamy.com/comp/M260M4/silver-apple-iphone-x-back-side-slightly-rotated-isolated-on-white-M260M4.jpg',
      price:500,
      quantity:4,
      type:"iphone"

    },
    {
      id:5,
      title:'Smart Watch',
      imageUrl:'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense/hero-static/sage-grey/sense-sage-gray-device-3qt.png',
      price:1700,
      type:"Watch",
      quantity:20,
    },
    {
      id:6,
      title:'Shirt',
      imageUrl:'https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2020/08/26/6984456-2078222690.jpg?itok=4GOylGvn',
      price:900,
      quantity:20,
      type:"clothes"

    },
    {
      id:7,
      title:'sweatshirt',
      imageUrl:'https://m.media-amazon.com/images/I/71hlZVUtDuL._AC_UX385_.jpg',
      price:300,
      quantity:20,
      type:"clothes"

    },
    {
      id:8,
      title:'sweatshirt nike',
      imageUrl:'https://i5.walmartimages.com/asr/68ecadf5-940a-49e9-978c-61258391c2b0.fd87ca6a15f10c4e9f11d1ff8c3c38e9.jpeg',
      price:400,
      quantity:20,
      type:"clothes"

    },
    {
      id:9,
      title:'Victorinox Watches',
      imageUrl:'https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHJvb3R8OTc5NDF8aW1hZ2UvanBlZ3xoMjkvaGQ4LzEzNTE5MTQyNzQ4MTkwL25hdi1jYXJwZXQtd2F0LW1hdmVyaWNrLTY0MHgzNTAuanBnfDU1OGRlNzRmNjE5ZGEzNWI3MjlhN2I3ZWYxNmYzNzZhNDM0MGIwZDI4YTdmZjM0NTVlN2YwNDVlOWRiZTE1YjM',
      price:400,
      quantity:20,
      type:"Watch"

    },
    {
      id:10,
      title:'Minimalist Watches',
      imageUrl:'https://i0.wp.com/ae01.alicdn.com/kf/H77cdd4f1b4d44afcb3b07b975066f3bdy/2020-Minimalist-Men-s-Fashion-Ultra-Thin-Watches-Simple-Men-Business-Stainless-Steel-Mesh-Belt-Quartz.jpg?resize=225%2C225&ssl=1',
      price:400,
      quantity:20,
      type:"Watch"
    },
    {
      id:11,
      title:'Victorinox Watches',
      imageUrl:'https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHJvb3R8OTc5NDF8aW1hZ2UvanBlZ3xoMjkvaGQ4LzEzNTE5MTQyNzQ4MTkwL25hdi1jYXJwZXQtd2F0LW1hdmVyaWNrLTY0MHgzNTAuanBnfDU1OGRlNzRmNjE5ZGEzNWI3MjlhN2I3ZWYxNmYzNzZhNDM0MGIwZDI4YTdmZjM0NTVlN2YwNDVlOWRiZTE1YjM',
      price:850,
      quantity:20,
      type:"Watch"

    },
    {
      id:12,
      title:'Victorinox Watches',
      imageUrl:'https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHJvb3R8OTc5NDF8aW1hZ2UvanBlZ3xoMjkvaGQ4LzEzNTE5MTQyNzQ4MTkwL25hdi1jYXJwZXQtd2F0LW1hdmVyaWNrLTY0MHgzNTAuanBnfDU1OGRlNzRmNjE5ZGEzNWI3MjlhN2I3ZWYxNmYzNzZhNDM0MGIwZDI4YTdmZjM0NTVlN2YwNDVlOWRiZTE1YjM',
      price:1200,
      quantity:200,
      type:"Watch"

    },
    {
      id:13,
      title:'Victorinox Watches',
      imageUrl:'https://imageengine.victorinox.com/medias/?context=bWFzdGVyfHJvb3R8OTc5NDF8aW1hZ2UvanBlZ3xoMjkvaGQ4LzEzNTE5MTQyNzQ4MTkwL25hdi1jYXJwZXQtd2F0LW1hdmVyaWNrLTY0MHgzNTAuanBnfDU1OGRlNzRmNjE5ZGEzNWI3MjlhN2I3ZWYxNmYzNzZhNDM0MGIwZDI4YTdmZjM0NTVlN2YwNDVlOWRiZTE1YjM',
      price:700,
      quantity:220,
      type:"Watch"

    },

  ]
  this.filterProduct=this.products
  // console.log(this.filterProduct);
  
   }

  ngOnInit(): void {
  }

  buyProduct(price:number,quantity:string){
    this.totalPrice=price*parseInt(quantity);
  }
  
  filterBy(type:string){
    console.log(this.products);
console.log(type);

if(type=="all"){
  this.filterProduct=this.products

}else{
  //  this.filterProduct=this.products.filter((p:any)=>{
  //     // p.type==type
  //     console.log(p.type);
  //     console.log(p.type==type);
  //   })
  this.filterProduct=[]
  for (let i = 0; i < 10; i++) {
    if (this.products[i].type==type) {
      this.filterProduct.push(this.products[i])
    }
  }
}


   
    console.log(this.filterProduct);

    
  }

}
