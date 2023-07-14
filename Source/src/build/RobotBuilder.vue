<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { usePartsStore, Robot } from "../stores/parts";

  // @ts-ignore
  import { useCartStore } from "../stores/cart";
  import { ref, computed } from "vue";
  import type { Ref } from "vue";
  import type { RobotPart } from "../stores/parts";
  // @ts-ignore
  import PartsSelector from "./PartSelector.vue";
  // @ts-ignore
  import CollapsibleSection from "../shared/CollapsibleSection.vue";
  import { onBeforeRouteLeave } from "vue-router";

  const { heads, arms, torsos, bases } = storeToRefs(usePartsStore());
  const cartStore = useCartStore();
  const { cart } = storeToRefs(cartStore);

  let addedToCart = false;
  const addToCart = function (): void {
    const robot = selectedRobot;
    const cost =
      robot.value.head.cost +
      robot.value.leftArm.cost +
      robot.value.torso.cost +
      robot.value.rightArm.cost +
      robot.value.base.cost;

    cartStore.addRobotToCart(robot.value, cost);
    addedToCart = true;


    
  };

  const selectedRobot = ref(
    new Robot(
      {} as RobotPart,
      {} as RobotPart,
      {} as RobotPart,
      {} as RobotPart,
      {} as RobotPart
    )
  );

  onBeforeRouteLeave((to, from, next) => {
    if (addedToCart) {
      next(true);
    } else {
      const response = confirm(
        "You have not added your robot to your cart, are you sure you want to leave?"
      );
      next(response);
    }
  });
</script>

<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left" />
            <img :src="selectedRobot.torso.src" />
            <img :src="selectedRobot.rightArm.src" class="rotate-right" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src" />
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
    <div class="top-row">
      <PartsSelector
        :parts="heads"
        position="top"
        @partSelected="(part: RobotPart) => selectedRobot.head = part"
      />
    </div>
    <div class="middle-row">
      <PartsSelector
        :parts="arms"
        position="left"
        @partSelected="(part: RobotPart) => selectedRobot.leftArm = part"
      />
      <PartsSelector
        :parts="torsos"
        position="center"
        @partSelected="(part: RobotPart) => selectedRobot.torso = part"
      />
      <PartsSelector
        :parts="arms"
        position="right"
        @partSelected="(part: RobotPart) => selectedRobot.rightArm = part"
      />
    </div>
    <div class="bottom-row">
      <PartsSelector
        :parts="bases"
        position="bottom"
        @partSelected="(part: RobotPart) => selectedRobot.base = part"
      />
    </div>
    <!-- <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>
              {{ robot.head.title }}
            </td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<style>
  .part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
  }

  .part img {
    width: 165px;
  }

  .top-row {
    display: flex;
    justify-content: space-around;
  }

  .middle-row {
    display: flex;
    justify-content: center;
  }

  .bottom-row {
    display: flex;
    justify-content: space-around;
    border-top: none;
  }

  .head {
    border-bottom: none;
  }

  .left {
    border-right: none;
  }

  .right {
    border-left: none;
  }

  .left img {
    transform: rotate(-90deg);
  }

  .right img {
    transform: rotate(90deg);
  }

  .bottom {
    border-top: none;
  }

  .prev-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
  }

  .next-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
  }

  .center .prev-selector,
  .center .next-selector {
    opacity: 0.8;
  }

  .left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }

  .left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }

  .right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }

  .right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }

  .right .next-selector {
    right: -3px;
  }

  .robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
  }

  .sale {
    color: red;
  }

  .content {
    position: relative;
  }

  .add-to-cart {
    width: 210px;
    padding: 3px;
    font-size: 16px;
  }

  h1 {
    text-align: left;
  }

  /* td,
  th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
  }

  .cost {
    text-align: right;
  } */

  .sale-border {
    border: 3px solid red;
  }

  .preview {
    position: absolute;
    top: -20px;
    right: 0;
    width: 210px;
    height: 210px;
    padding: 5px;
  }

  .preview-content {
    border: 1px solid #999;
  }

  .preview img {
    width: 50px;
    height: 50px;
  }

  .rotate-right {
    transform: rotate(90deg);
  }

  .rotate-left {
    transform: rotate(-90deg);
  }

  .part-info {
    position: absolute;
    top: -20px;
    left: 0;
    width: 210px;
    height: 210px;
    padding: 5px;
  }
</style>
