import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('Total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number =0;

  selectedRadioButoonValue: string = 'All';
  @Output()
  filterRadioButtonSelectedChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectedChanged.emit(this.selectedRadioButoonValue);
    // console.log(this.selectedRadioButoonValue);
  }
}
