import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
    @Output() formSubmitted = new EventEmitter<any>();
    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    //     address: new FormGroup({
    //         street: new FormControl(''),
    //         city: new FormControl(''),
    //         state: new FormControl(''),
    //         zip: new FormControl(''),
    //     }),
    // });
    profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
        }),
        aliases: this.fb.array([this.fb.control('')]),
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.profileForm.markAllAsTouched();
        if (this.profileForm.valid) {
            console.log('Submitted!');
            console.log(this.profileForm.value);
            this.formSubmitted.emit(this.profileForm.value);
        }
    }

    fillForm(): void {
        this.aliases.clear();
        this.addAlias();
        this.addAlias();
        this.addAlias();
        this.profileForm.setValue({
            firstName: 'Hala',
            lastName: 'Qadi',
            address: {
                street: 'King St',
                city: 'some city',
                state: 'some state',
                zip: 'CA400',
            },
            aliases: ['1', '2', '3'],
            ...(this.profileForm.controls.email && { email: 'someEmail@test.com'}),
        });
    }

    fillFormWithPatchValue(): void {
        this.profileForm.patchValue({
            firstName: 'Hala 2',
            lastName: 'Qadi 2',
            address: {
                state: 'California',
            },
        });
    }

    resetForm(): void {
        this.profileForm.reset();
    }

    disableFirstName(): void {
        this.profileForm.get('firstName')?.disable();
        console.log(this.profileForm.getRawValue());

    }

    enableFirstName(): void {
        this.profileForm.get('firstName')?.enable();
    }

    addEmailControl(): void {
        this.profileForm.addControl('email', this.fb.control(''));
    }

    removeEmailControl(): void {
        this.profileForm.removeControl('email');
    }

    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
    }

    addAlias(): void {
        this.aliases.push(this.fb.control(''));
    }

    removeAlias(index: number): void {
        this.aliases.removeAt(index);
    }
}
