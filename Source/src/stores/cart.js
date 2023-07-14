import { defineStore } from "pinia";
// import type { RobotPart } from "../stores/parts";
// import { Robot } from "./parts";

// type CartItems = {
//   cart: Cart[];
// };

// interface Cart {
//   head: RobotPart;
//   leftArm: RobotPart;
//   torso: RobotPart;
//   rightArm: RobotPart;
//   base: RobotPart;
//   cost: number;
// }

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addRobotToCart(robot, cost) {
      this.cart.push(Object.assign({}, { ...robot, cost }));
    },
  },
  getters:{
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale)
    }
  }
});
