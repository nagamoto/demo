import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit, AfterViewInit {
  private queryParams: Params;
  value: string;
  barcodeValue: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.value = this.route.snapshot.paramMap.get('value');
    JsBarcode('#fixedBarcode', 'fixedBarcode');
  }

  ngAfterViewInit() {
    if (this.value) {
      JsBarcode('#greenBarcode', this.value, {
        width: 5,
        height: 200,
        fontOptions: 'bold italic',
        font: 'fantasy',
        textPosition: 'top',
        textMargin: 0,
        fontSize: 50,
        margin: 0,
        background: '#C5E99B',
        lineColor: '#77AF9C',
      });
    }
  }
}
