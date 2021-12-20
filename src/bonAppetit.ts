/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
export default function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  let billsum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      billsum += bill[i];
    }
  }
  const bon = (billsum / 2) === b;
  if (!bon) {
    const switchover = b - (billsum / 2);
    console.log(switchover);
  } else {
    const n_n = 'Bon Appetit';
    console.log(n_n);
  }
}
