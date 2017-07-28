import { Component, OnInit } from '@angular/core';
import { ItemService, WishlistItem } from '../item.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  items: WishlistItem[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems()
        .then((items) => this.items = items);
  }

}
