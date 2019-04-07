import { CryptoCurrency } from '../constants/currency';
import { CurrencyAmount, CurrencyPrice } from '../types';

export interface Market {
  aUnit: CryptoCurrency;
  aUnitPrecision: number;
  bUnit: CryptoCurrency;
  bUnitPrecision: number;
  minTickSize: string;
  minTradeSize: string;
  name: string;
  status: MarketStatus;
}

export enum MarketStatus {
  INITIALIZING = 'INITIALIZING',
  OFFLINE = 'OFFLINE',
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  SHUTTING_DOWN = 'SHUTTING_DOWN'
}

export interface Ticker {
  market: Market;
  priceChange24hPct: number;
  volume24h: CurrencyAmount;
  lastPrice: CurrencyPrice;
  usdLastPrice: CurrencyPrice;
}

export interface OrderBook {
  bids: OrderbookRecord[];
  asks: OrderbookRecord[];
}

export interface OrderbookRecord {
  amount: CurrencyAmount;
  price: CurrencyPrice;
}