import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchitems: Subject<string[]> = new Subject<string[]>();

  constructor() {
  }

  saveItem(data: string[]) {
    this.searchitems.next(data);
  }
}
