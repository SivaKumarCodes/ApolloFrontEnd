import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { address } from '../authStore/auth.store';

@Component({
  selector: 'app-address-changer',
  templateUrl: './address-changer.component.html',
  styleUrls: ['./address-changer.component.css'],
})
export class AddressChangerComponent {
  @Input() visible!: boolean;
  @Input() data!: address[];

  showAddressForm!: boolean;

  addressType: String = 'HOME';

  changeAddressType(option: string) {
    this.addressType = option;
  }

  addreesOption = new FormGroup({
    selectedAddress: new FormControl('', Validators.required),
  });

  addAddressForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    pin: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });

  setShowAddress() {
    this.showAddressForm = !this.showAddressForm;
  }
}
