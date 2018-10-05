import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sectionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSectionSelect(selection: string) {
    this.sectionSelected.emit(selection);
  }

}
