import { defineStore } from "pinia";

export interface RobotPart {
  id: number;
  description: string;
  title: string;
  src: string;
  type: string;
  cost: number;
  onSale?: boolean;
}

export class Robot {
  head;
  leftArm;
  torso;
  rightArm;
  base;

  constructor(
    head: RobotPart,
    leftArm: RobotPart,
    torso: RobotPart,
    rightArm: RobotPart,
    base: RobotPart
  ) {
    this.head = head;
    this.leftArm = leftArm;
    this.torso = torso;
    this.rightArm = rightArm;
    this.base = base;
  }
}

// export class RobotPart {
//     id;
//     description;
//     title;
//     src;
//     type;
//     cost;

//   constructor(
//     id: number,
//     description: string,
//     title: string,
//     src: string,
//     type: string,
//     cost: number
//   ) {
//     this.id = id;
//     this.description = description;
//     this.title = title;
//     this.src = src;
//     this.type = type;
//     this.cost = cost;
//   }
// }

export type RootState = {
  heads: RobotPart[];
  arms: RobotPart[];
  torsos: RobotPart[];
  bases: RobotPart[];
}

export const usePartsStore = defineStore("parts", {
  state: (): RootState => ({
    heads: [
      {
        id: 1,
        description:
          "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
        title: "Large Cyclops",
        src: "/src/build/images/head-big-eye.png",
        type: "heads",
        cost: 1225.5,
      },
      {
        id: 2,
        description:
          "A friendly robot head with two eyes and a smile -- great for domestic use.",
        title: "Friendly Bot",
        src: "/src/build/images/head-friendly.png",
        cost: 945.0,
        type: "heads",
        onSale: true,
      },
      {
        id: 3,
        description:
          "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
        title: "Shredder",
        src: "/src/build/images/head-shredder.png",
        type: "heads",
        cost: 1275.5,
      },
      {
        id: 4,
        description: "A simple single-eyed head -- simple and inexpensive.",
        title: "Small Cyclops",
        src: "/src/build/images/head-single-eye.png",
        type: "heads",
        cost: 750.0,
      },
      {
        id: 5,
        description:
          "A robot head with three oscillating eyes -- excellent for surveillance.",
        title: "Surveillance Bot",
        src: "/src/build/images/head-surveillance.png",
        type: "heads",
        cost: 1255.5,
      },
    ],
    arms: [
      {
        id: 1,
        description:
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        title: "Articulated",
        src: "/src/build/images/arm-articulated-claw.png",
        type: "arms",
        cost: 275,
      },
      {
        id: 2,
        description:
          "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
        title: "Two Clawed",
        src: "/src/build/images/arm-dual-claw.png",
        type: "arms",
        cost: 285,
      },
      {
        id: 3,
        description: "A telescoping arm with a grabber.",
        title: "Grabber",
        src: "/src/build/images/arm-grabber.png",
        type: "arms",
        cost: 205.5,
      },
      {
        id: 4,
        description:
          "An arm with a propeller -- good for propulsion or as a cooling fan.",
        title: "Propeller",
        src: "/src/build/images/arm-propeller.png",
        type: "arms",
        cost: 230,
        onSale: true,
      },
      {
        id: 5,
        description: "A short and stubby arm with a claw -- simple, but cheap.",
        title: "Stubby Claw",
        src: "/src/build/images/arm-stubby-claw.png",
        type: "arms",
        cost: 125,
      },
    ],
    torsos: [
      {
        id: 1,
        description:
          "A torso that can bend slightly at the waist and equiped with a heat guage.",
        title: "Flexible Gauged",
        src: "/src/build/images/torso-flexible-gauged.png",
        type: "torsos",
        cost: 1575,
      },
      {
        id: 2,
        description: "A less flexible torso with a battery gauge.",
        title: "Gauged",
        src: "/src/build/images/torso-gauged.png",
        type: "torsos",
        cost: 1385,
      },
      {
        id: 3,
        description: "A simple torso with a pouch for carrying items.",
        title: "Gauged",
        src: "/src/build/images/torso-pouch.png",
        type: "torsos",
        cost: 785,
        onSale: true,
      },
    ],
    bases: [
      {
        id: 1,
        description: "A two wheeled base with an accelerometer for stability.",
        title: "Double Wheeled",
        src: "/src/build/images/base-double-wheel.png",
        type: "bases",
        cost: 895,
      },
      {
        id: 2,
        description: "A rocket base capable of high speed, controlled flight.",
        title: "Rocket",
        src: "/src/build/images/base-rocket.png",
        type: "bases",
        cost: 1520.5,
      },
      {
        id: 3,
        description:
          "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
        title: "Single Wheeled",
        src: "/src/build/images/base-single-wheel.png",
        type: "bases",
        cost: 1190.5,
      },
      {
        id: 4,
        description: "A spring base - great for reaching high places.",
        title: "Spring",
        src: "/src/build/images/base-spring.png",
        type: "bases",
        cost: 1190.5,
      },
      {
        id: 5,
        description:
          "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
        title: "Triple Wheeled",
        src: "/src/build/images/base-triple-wheel.png",
        type: "bases",
        cost: 700.5,
      },
    ],
  }),
});

// export const usePartsStore = defineStore("parts", {
//   state: () => ({
//       heads: [
//         {
//           id: 1,
//           description:
//             "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
//           title: "Large Cyclops",
//           src: "/src/build/images/head-big-eye.png",
//           type: "heads",
//           cost: 1225.5,
//         },
//         {
//           id: 2,
//           description:
//             "A friendly robot head with two eyes and a smile -- great for domestic use.",
//           title: "Friendly Bot",
//           src: "/src/build/images/head-friendly.png",
//           cost: 945.0,
//           type: "heads",
//           onSale: true,
//         },
//         {
//           id: 3,
//           description:
//             "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
//           title: "Shredder",
//           src: "/src/build/images/head-shredder.png",
//           type: "heads",
//           cost: 1275.5,
//         },
//         {
//           id: 4,
//           description: "A simple single-eyed head -- simple and inexpensive.",
//           title: "Small Cyclops",
//           src: "/src/build/images/head-single-eye.png",
//           type: "heads",
//           cost: 750.0,
//         },
//         {
//           id: 5,
//           description:
//             "A robot head with three oscillating eyes -- excellent for surveillance.",
//           title: "Surveillance Bot",
//           src: "/src/build/images/head-surveillance.png",
//           type: "heads",
//           cost: 1255.5,
//         },
//       ],
//       arms: [
//         {
//           id: 1,
//           description:
//             "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
//           title: "Articulated",
//           src: "/src/build/images/arm-articulated-claw.png",
//           type: "arms",
//           cost: 275,
//         },
//         {
//           id: 2,
//           description:
//             "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
//           title: "Two Clawed",
//           src: "/src/build/images/arm-dual-claw.png",
//           type: "arms",
//           cost: 285,
//         },
//         {
//           id: 3,
//           description: "A telescoping arm with a grabber.",
//           title: "Grabber",
//           src: "/src/build/images/arm-grabber.png",
//           type: "arms",
//           cost: 205.5,
//         },
//         {
//           id: 4,
//           description:
//             "An arm with a propeller -- good for propulsion or as a cooling fan.",
//           title: "Propeller",
//           src: "/src/build/images/arm-propeller.png",
//           type: "arms",
//           cost: 230,
//           onSale: true,
//         },
//         {
//           id: 5,
//           description:
//             "A short and stubby arm with a claw -- simple, but cheap.",
//           title: "Stubby Claw",
//           src: "/src/build/images/arm-stubby-claw.png",
//           type: "arms",
//           cost: 125,
//         },
//       ],
//       torsos: [
//         {
//           id: 1,
//           description:
//             "A torso that can bend slightly at the waist and equiped with a heat guage.",
//           title: "Flexible Gauged",
//           src: "/src/build/images/torso-flexible-gauged.png",
//           type: "torsos",
//           cost: 1575,
//         },
//         {
//           id: 2,
//           description: "A less flexible torso with a battery gauge.",
//           title: "Gauged",
//           src: "/src/build/images/torso-gauged.png",
//           type: "torsos",
//           cost: 1385,
//         },
//         {
//           id: 3,
//           description: "A simple torso with a pouch for carrying items.",
//           title: "Gauged",
//           src: "/src/build/images/torso-pouch.png",
//           type: "torsos",
//           cost: 785,
//           onSale: true,
//         },
//       ],
//       bases: [
//         {
//           id: 1,
//           description:
//             "A two wheeled base with an accelerometer for stability.",
//           title: "Double Wheeled",
//           src: "/src/build/images/base-double-wheel.png",
//           type: "bases",
//           cost: 895,
//         },
//         {
//           id: 2,
//           description:
//             "A rocket base capable of high speed, controlled flight.",
//           title: "Rocket",
//           src: "/src/build/images/base-rocket.png",
//           type: "bases",
//           cost: 1520.5,
//         },
//         {
//           id: 3,
//           description:
//             "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
//           title: "Single Wheeled",
//           src: "/src/build/images/base-single-wheel.png",
//           type: "bases",
//           cost: 1190.5,
//         },
//         {
//           id: 4,
//           description: "A spring base - great for reaching high places.",
//           title: "Spring",
//           src: "/src/build/images/base-spring.png",
//           type: "bases",
//           cost: 1190.5,
//         },
//         {
//           id: 5,
//           description:
//             "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
//           title: "Triple Wheeled",
//           src: "/src/build/images/base-triple-wheel.png",
//           type: "bases",
//           cost: 700.5,
//         },
//       ],
//     })
//   }
// );
