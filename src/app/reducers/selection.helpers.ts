import { IDrink } from '../models/ISelectionStore';

export function modifyQuantity(drinkArr: IDrink[], drink: IDrink, offset: number): IDrink[] {
  const existingEntryIndex = drinkArr.find(d => d.name === drink.name);
  if (existingEntryIndex) {
    return drinkArr.map(d => d.name !== drink.name ? d : { ...d, quantity: Math.max(d.quantity + offset, 0) });
  } else {
    return drinkArr.concat([{ ...drink, quantity: 1 }]);
  }
}

export const allDrinks: IDrink[] = [
  { name: 'Kopi', type: 'hot' },
  { name: 'Kopi C', type: 'hot' },
  { name: 'Kopi O', type: 'hot' },
  { name: 'Kopi O Siew Dai', type: 'hot' },
  { name: 'Kopi O Kosong', type: 'hot' },
  { name: 'Teh', type: 'hot' },
  { name: 'Teh C', type: 'hot' },
  { name: 'Teh O', type: 'hot' },
  { name: 'Teh O Siew Dai', type: 'hot' },
  { name: 'Teh O Kosong', type: 'hot' },
  { name: 'Barley', type: 'hot' },
  { name: 'Kopi Peng', type: 'cold' },
  { name: 'Teh Peng', type: 'cold' },
  { name: 'Coke', type: 'cold' },
  { name: 'Coke Light', type: 'cold' },
  { name: 'Coke Zero', type: 'cold' },
  { name: 'Ice Lemon Tea', type: 'cold' },
  { name: 'Ice Barley', type: 'cold' },
]