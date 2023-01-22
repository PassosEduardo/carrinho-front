import { Component,ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { CartService } from '../services/cart.service';
import { StorageService } from '../services/storageService';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem : number = 0;
  public searchTerm !: string;
  public email : string;

  constructor(private cartService : CartService, private storageService: StorageService) { 
    this.email = this.storageService.getMail();
  }



  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}



