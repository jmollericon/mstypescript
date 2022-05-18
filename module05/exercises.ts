// Lab - Convert three TypeScript functions to a class definition

/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

/*  sortDescending is a comparison function that tells the sort method how to sort numbers
  in descending order. */
let sortDescending = (a: number, b: number) => {
  if (a > b) {
      return -1;
  } else if (b > a) {
      return 1;
  } else {
      return 0; }
}

/*  sortAscending is a comparison function that tells the sort method how to sort numbers 
  in ascending order. */
let sortAscending = (a: number, b: number) => {
  if (a > b) {
      return 1;
  } else if (b > a) {
      return -1;
  } else {
      return 0;
  }
}

/*  buildArray builds an array of unique random numbers containing the number of items 
  based on the number passed to it. The sortOrder parameter determines whether to sort 
  the array in ascending or descending order. */
function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
  let randomNumbers: number[] = [];
  let nextNumber: number;
  for (let counter = 0; counter < items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
      } else {
          counter--;
      }
  }
  if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
  } else {
      return randomNumbers.sort(sortDescending);
  }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = buildArray(12, 'ascending');
let testArray2 = buildArray(8, 'descending');
console.log(testArray1);
console.log(testArray2);

type sortOrderType = "ascending" | "descending";
class BuildArray {
  // properties
  private _items: number;
  private _sortOrder: sortOrderType

  // constructor
  constructor(items: number, sortOrder: sortOrderType) {
    this._items = items;
    this._sortOrder = sortOrder;
  }

  // accessors
  getItems(): number {
    return this._items;
  }
  setItems(items: number): void {
    this._items = items;
  }
  getSortOrder(): sortOrderType {
    return this._sortOrder;
  }
  setSortOrder(sortOrder: sortOrderType): void {
    this._sortOrder = sortOrder;
  }

  // methods
  private sortDescending = (a: number, b: number) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  }
  private sortAscending = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
  buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this._items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === 'ascending') {
      return randomNumbers.sort(this.sortAscending);
    } else {
      return randomNumbers.sort(this.sortDescending);
    }
  }
}

const example1 = new BuildArray(12, 'ascending');
const example2 = new BuildArray(8, 'descending');

console.log(example1.buildArray());
console.log(example2.buildArray());
