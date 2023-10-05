import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  maxFileSize = 10485760; // 10 MB
  allowedImageType = ['jpg', 'jpeg', 'png'];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        profileImage: [
          '',
          [
            Validators.required,
          ],
        ],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }
  passwordMatchValidator(
    form: FormGroup
  ): { passwordMismatch: boolean } | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { passwordMismatch: true };
    }

    return null;
  }


  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      if (selectedFile && selectedFile.size > this.maxFileSize) {
        this.registerForm.get('profileImage')?.setErrors({fileSizeInvalid: true})
      }
      else if(
        selectedFile &&
        !this.allowedImageType.includes(selectedFile?.type?.split('/')[1].toLowerCase())
      ) {
        this.registerForm.get('profileImage')?.setErrors({fileTypeInvalid: true})
      }
      else{
        this.registerForm.get('profileImage')?.setValue(selectedFile);
      }
    }
  }

  
  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = new FormData();

      // Add form values
      formData.append('name', this.registerForm.get('name')?.value);
      formData.append('email', this.registerForm.get('email')?.value);
      formData.append('password', this.registerForm.get('password')?.value);
      formData.append(
        'confirmPassword',
        this.registerForm.get('confirmPassword')?.value
      );
      // Add profile image
      const profileImageFile = this.registerForm.get('profileImage')?.value;
      formData.append('profileImage', profileImageFile);
      this.authService.signup(formData).subscribe({
        next: (res) => {
          if (res?.success) {
            this.router.navigate(['/']);
            this.registerForm.reset();
            // this.toastr.success(res?.message)
          } else {
            console.log(res, res?.error);
            // this.toastr.error(res?.error)
          }
        },
        error: (error) => {
          console.error('Registration failed', error);
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
