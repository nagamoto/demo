import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
    JsBarcode('#fixedBarcode', 'fixedBarcode', {
      width: 3,
    });
  }

  ngAfterViewInit() {
    JsBarcode('#specifiedBarcode', 'specifiedBarcode', {
      width: 3,
    });
  }

  ngAfterViewChecked() {
    JsBarcode('#interactiveBarcode', 'interactiveBarcode', {
      width: 3,
    });
  }
}
