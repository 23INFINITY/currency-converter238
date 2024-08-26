import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {

  amount: number = 0;
  fromCurrency: string = 'INR';
  toCurrency: string = 'USD';
  convertedAmount: number = 0;

  exchangeRates: { [key: string]: number } = {
    'USD': 1,
    'INR': 83.81,
    'EUR': 0.85,
    'GBP': 0.75,
    'JPY': 110
  };

  convertCurrency() {
    const fromRate = this.exchangeRates[this.fromCurrency];
    const toRate = this.exchangeRates[this.toCurrency];
    this.convertedAmount = (this.amount / fromRate) * toRate;
  }
}
