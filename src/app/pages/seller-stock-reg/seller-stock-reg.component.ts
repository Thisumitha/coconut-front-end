import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductsServiceService } from '../../services/products-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-seller-stock-reg',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './seller-stock-reg.component.html',
  styleUrl: './seller-stock-reg.component.css'
})
export class SellerStockRegComponent {
  selectedFiles:{[key:string]:File}={};
  uploadedImages: string[]=[];
  coconutLot: any = {
    width: null,
    size: '',
    husk_state:'',
    moisture_state:'',
    inside_state:'',
    quantity:null,
    seller:''
  };
  constructor(private productService:ProductsServiceService){}

  onFileSelected(event:any, key: string){
    if(event.target.files.length>0){
      this.selectedFiles[key]=event.target.files[0];
    }
  }

  onSubmit(){
    const formData = new FormData();
    for(let key in this.selectedFiles){
      formData.append(key, this.selectedFiles[key]);
    }
    for(let key in this.coconutLot){
      formData.append(key, this.coconutLot[key]);
    }

    this.productService.createCoconutLot(formData).subscribe(
      (response:any)=>{
        this.uploadedImages = [
          response.lot_image,
          response.type_1,
          response.type_2,
          response.type_3,
          response.wet_coconut,
          response.dry_coconut,
          response.inside_image
        ].filter(image=>image);
      },
      (error)=>console.log('Upload error',error)
    )

    // this.productService.createCoconutLot(formData).subscribe((response:any)=>{
    //   this.uploadedImages=[
    //     response.lot_image,
    //       response.type_1,
    //       response.type_2,
    //       response.type_3,
    //       response.wet_coconut,
    //       response.dry_coconut,
    //       response.inside_image
    //   ].filter(image => image);
    // },(error)=>console.log('upload error',error)
    // );
  }
}
