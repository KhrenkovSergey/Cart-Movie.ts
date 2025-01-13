import Buyable from '../domain/Buyable';
import Movie from '../domain/Movie';

export default class Cart {
    private _items: Buyable[] = [];
    private _prices: Map<number, number> = new Map(); // Храним цены товаров по id

    addItem(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    setPrice(id: number, price: number): void {
        this._prices.set(id, price);
    }

    private getPrice(id: number): number {
        return this._prices.get(id) || 0;
    }

    getTotalPrice(): number {
        return this._items.reduce((total, item) => {
            return total + (item instanceof Movie ? this.getPrice(item.id) : 0);
        }, 0);
    }
    
    getTotalPriceWithDiscount(discount: number): number {
        const total = this.getTotalPrice();
        return total - (total * discount);
    }

    removeItemById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
        this._prices.delete(id);
    }
}
