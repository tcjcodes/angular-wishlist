import { Injectable } from '@angular/core';

export interface WishlistItem {
    name: string;
    price?: string;
    description?: string;
    hyperlink?: string;
    favorite: boolean;
}

const mockItems = [];

@Injectable()
export class ItemService {

    constructor() {
    }

    getItems(): WishlistItem[] {
        return mockItems;
    }

    submitItem(item: WishlistItem) {
        console.log('Submitted', item);
    }
}
