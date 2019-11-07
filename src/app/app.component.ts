import { Component, OnInit } from '@angular/core';
import { RemoteService } from './shared/4d.service';
import { Catalog } from 'wakanda-client';
import { IUser } from './shared/remote.interfaces';

const PAGE_SIZE = 20;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private ds: Catalog;
  public users: IUser[] = [];
  public displayedColumns: string[] = ['id', 'firstname', 'lastname'];

  constructor(private readonly service: RemoteService) {}

  async ngOnInit() {
    this.ds = await this.service.catalog;
    this.refresh({});
  }

  async refresh({ page = 0 }) {
    const { entities } = await this.ds.User.query<IUser>({
      start: page*PAGE_SIZE,
      pageSize: PAGE_SIZE
    });
    this.users = entities;
  }
}
