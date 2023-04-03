import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addAddress, editAddress } from '../authStore/auth.actions';
import { Address, AddressSent, AddressType } from '../authStore/auth.store';
import { States } from '../authStore/states';

@Component({
  selector: 'app-address-changer',
  templateUrl: './address-changer.component.html',
  styleUrls: ['./address-changer.component.css'],
})
export class AddressChangerComponent {
  @Input() visible!: boolean;
  @Input() data!: Address[];

  @Output() close = new EventEmitter<void>();
  @Output() selectAddress = new EventEmitter<number>();

  values = Object.keys(States).filter((i) => !parseInt(i) && i != '0');

  showAddressForm!: boolean;

  editAddress: boolean = false;

  addressType: String = 'HOME';
  selectedAddress: number = 0;

  editedAddress!: Address | null;

  setMode(i: number, toEdit: Address | null) {
    this.showAddressForm = true;
    if (i == 1) {
      this.addressType =
        AddressType[parseInt(AddressType[toEdit?.addressType!])];

      this.editAddress = true;
      this.editedAddress = toEdit;

      //name
      this.name?.setValue(toEdit?.name!);
      this.mobile?.setValue(toEdit?.mobileNumber!);
      this.pin?.setValue('' + toEdit?.pin!);
      this.district?.setValue(toEdit?.district!);
      this.address?.setValue(toEdit?.totalAddress!);
      this.town?.setValue(toEdit?.town!);
      this.state?.setValue(States[parseInt(States[toEdit?.state!])]);
      this.isDefault?.setValue(toEdit?.defaultAddress!);
    }
  }

  changeAddressType(option: string) {
    this.addressType = option;
  }

  checkValue(value: number) {
    console.log('hai' + value);
    this.selectedAddress = value;
    this.selectAddress.emit(value);
    this.close.emit();
  }

  exit() {
    this.close.emit();
    this.setShowAddress(false);
    this.editAddress = false;
    this.editedAddress = null;
  }

  addAddressForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6-9][0-9]{9}$'),
    ]),
    pin: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9][0-9]{5}$'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    town: new FormControl('', [Validators.required, Validators.minLength(2)]),
    district: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    state: new FormControl('Assam', Validators.required),
    isDefault: new FormControl(false),
  });

  constructor(private store: Store) {}

  setShowAddress(val: boolean) {
    this.showAddressForm = val;
  }

  get name() {
    return this.addAddressForm.get('name');
  }

  get mobile() {
    return this.addAddressForm.get('mobile');
  }

  get pin() {
    return this.addAddressForm.get('pin');
  }

  get address() {
    return this.addAddressForm.get('address');
  }

  get town() {
    return this.addAddressForm.get('town');
  }

  get district() {
    return this.addAddressForm.get('district');
  }

  get state() {
    return this.addAddressForm.get('state');
  }

  get isDefault() {
    return this.addAddressForm.get('isDefault');
  }

  addAddress() {
    if (!this.editAddress) {
      let result: AddressSent = {
        name: this.name?.value!,
        mobileNumber: this.mobile?.value!,
        pin: parseInt(this.pin?.value!),
        totalAddress: this.address?.value!,
        town: this.town?.value!,
        district: this.district?.value!,
        state: States[this.state?.value! as keyof typeof States],
        defaultAddress: this.isDefault?.value!,
        addressType: AddressType[this.addressType as keyof typeof AddressType],
      };
      this.store.dispatch(addAddress({ address: result }));
    } else {
      let result: Address = {
        id: this.editedAddress?.id!,
        name: this.name?.value!,
        mobileNumber: this.mobile?.value!,
        pin: parseInt(this.pin?.value!),
        totalAddress: this.address?.value!,
        town: this.town?.value!,
        district: this.district?.value!,
        state: States[this.state?.value! as keyof typeof States],
        defaultAddress: this.isDefault?.value!,
        addressType: AddressType[this.addressType as keyof typeof AddressType],
      };

      console.log('hai');

      console.log(result.defaultAddress);

      this.store.dispatch(editAddress({ address: result }));
    }

    this.exit();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
