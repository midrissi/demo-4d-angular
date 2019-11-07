import { Component, OnInit, ViewChild } from '@angular/core';
import { RemoteService } from './shared/4d.service';
import { Catalog } from 'wakanda-client';
import { IUser } from './shared/remote.interfaces';
import { MatPaginator, PageEvent } from '@angular/material';

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
  public pageSize = 5;
  public length = 0;

  constructor(private readonly service: RemoteService) {}

  async ngOnInit() {
    this.ds = await this.service.catalog;
    this.refresh({});
  }

  onPageChange(ev: PageEvent) {
    this.pageSize = ev.pageSize;
    this.refresh({ page: ev.pageIndex });
  }

  async refresh({ page = 0 }) {
    const { entities, _count } = await this.ds.User.query<IUser>({
      start: page*this.pageSize,
      pageSize: this.pageSize,
    });
    this.users = entities;
    this.length = _count;
  }
}
