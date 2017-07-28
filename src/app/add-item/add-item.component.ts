import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ItemService, WishlistItem } from '../item.service';
import { NgForm } from '@angular/forms';

// FIXME

const required = 'This field is required';
const maxlengthLimit = 200;
const maxlength = `Cannot be more than ${maxlengthLimit} long`;

const validationMessages = {
    name: {
        required,
        maxlength
    },
    quantity: {
        required,
        number: 'Must be a number'
    },
    description: {
        maxlength
    }
};

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit, AfterViewChecked {
    addItemForm: NgForm;
    @ViewChild('addItemForm') currentForm: NgForm;

    formErrors;
    submitMessage: string;
    item: WishlistItem;
    submitted = false;
    maxDescriptionLength = maxlengthLimit;

    constructor(private itemService: ItemService) {
        this.resetItem();

        // for (const key in validationMessages) {
        //     this.formErrors[key] = '';
        // }
    }

    ngOnInit() {
    }

    private resetItem() {
        this.item = {
            name: null,
            favorite: false,
            quantity: 1
        };
    }

    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        // if (this.currentForm === this.addItemForm) {
        //     return;
        // }
        // if (this.addItemForm) {
        //     this.addItemForm.valueChanges
        //         .subscribe(data => this.onValueChanged(data));
        // }
    }

    private onValueChanged(data?: any) {
        // if (!this.addItemForm) {
        //     return;
        // }
        // const form = this.addItemForm.form;
        //
        // for (const field in this.formErrors) {
        //     this.formErrors[field] = '';
        //     const control = form.get(field);
        //     if (control && control.dirty && !control.valid) {
        //         const messages = validationMessages[field];
        //         for (const key in control.errors) {
        //             this.formErrors[field] += messages[key] + ' ';
        //         }
        //     }
        // }
    }

    onSubmit() {
        this.itemService.submitItem(this.item)
            .then(() => {
                this.submitMessage = 'Success!';
                this.resetItem();
            })
            .catch(() => this.submitMessage = 'Oops! There was an error saving this item. Try again later.');
    }
}
