import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryService {
  createDb() {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
    return { items };
  }
  genId(items: any[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }

  constructor() { }
}
