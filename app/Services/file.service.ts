import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private readonly assetsFolderPath = 'C:/Users/158341/Downloads/';

  constructor() {}

  saveFile(file: File): Promise<string> {


    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileDataUrl = reader.result as string;
        const fileName = file.name;
        const filePath = `${this.assetsFolderPath}${fileName}`;

        const dataBlob = this.dataURItoBlob(fileDataUrl);
        this.saveBlobLocally(dataBlob, fileName)
          .then(() => resolve(filePath))
          .catch(() => reject(new Error('Failed to save the file locally.')));
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file.'));
      };

      reader.readAsDataURL(file);
    });
  }

  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  }

  private saveBlobLocally(blob: Blob, filePath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filePath;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      resolve();
    });
  }
}
