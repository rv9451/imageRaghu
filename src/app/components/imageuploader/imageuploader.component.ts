import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imageuploader',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './imageuploader.component.html',
  styleUrl: './imageuploader.component.css'
})
export class ImageuploaderComponent implements OnInit {
  enhancedImageSrc: string | null = null;
  previewImageSrc: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Initialization code if needed
  }

  uploadImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Create preview
      this.createPreview(file);

      const formData = new FormData();
      formData.append('image', file);
     
      this.http.post('https://raghu123.serv00.net/enhanceimageapi.php', formData)
        .subscribe({
          next: (res: any) => {
            if (res.status === 'success' && res.image) {
              this.enhancedImageSrc = 'data:image/jpeg;base64,' + res.image;
            } else {
              console.error('Image enhancement failed:', res.message);
            }
          },
          error: (error) => {
            console.error('Error uploading image:', error);
          }
        });
    }
  }

  createPreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewImageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}