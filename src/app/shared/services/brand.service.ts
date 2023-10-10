import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getAllBrand(): Observable<Brand[]> {
    let newPath = this.apiUrl + '/brands';
    return this.httpClient.get<Brand[]>(newPath);
  }
}
