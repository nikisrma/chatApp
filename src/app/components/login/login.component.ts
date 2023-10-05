import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService:AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value
      this.authService.login(formData).subscribe({
        next: (res) => {
          if (res?.success) {
            this.router.navigate(['/members-list']);
            this.loginForm.reset();
            // this.toastr.success(res?.message)
          } else {
            console.log(res, res?.error);
            // this.toastr.error(res?.error)
          }
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
}
