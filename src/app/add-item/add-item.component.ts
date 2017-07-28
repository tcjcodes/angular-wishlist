import { Component, OnInit } from '@angular/core';
import { ItemService, WishlistItem } from '../item.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    maxDescriptionLength = 200;
    item: WishlistItem;

    constructor(private itemService: ItemService) {
        this.item = {
            name: null,
            favorite: false
        };
    }

    ngOnInit() {
    }

    onSubmit() {
        this.itemService.submitItem(this.item);
    }
}
