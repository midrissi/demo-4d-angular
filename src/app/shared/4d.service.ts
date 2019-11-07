import { Injectable } from '@angular/core';
import { WakandaClient, Catalog } from 'wakanda-client';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  private readonly client = new WakandaClient({});
  private ds: Promise<Catalog>;

  get catalog(): Promise<Catalog> {
    if (!this.ds) {
      this.ds = this.client.getCatalog();
    }

    return this.ds;
  }
}
