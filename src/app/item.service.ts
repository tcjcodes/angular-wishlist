import { Injectable } from '@angular/core';

export interface WishlistItem {
    name: string;
    price?: string;
    description?: string;
    hyperlink?: string;
    favorite: boolean;
    quantity: number;
}

const mockItems: WishlistItem[] = [{
    name: 'Cupcakes!',
    description: 'Lorem ipsum dolores',
    favorite: false,
    quantity: 12
}, {
    name: 'Tartelette in Bloom',
    price: '46.00',
    description: 'Lorem ipsum dolores',
    hyperlink: 'http://www.ulta.com/',
    favorite: true,
    quantity: 1
}];

@Injectable()
export class ItemService {

    constructor() {
    }

    getItems(): Promise<WishlistItem[]> {
        return Promise.resolve(mockItems);
    }

    submitItem(item: WishlistItem): Promise<number> {
        mockItems.push(item);
        return Promise.resolve(mockItems.length - 1)
    }
}
