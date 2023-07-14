<template>
  <div>
    <h1>
      {{ part.title }}
    </h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import parts from '../data/parts';
import type { RobotPart } from "../stores/parts";

  export default {
    name: "PartInfo",
    props: {
        partType: {type: String}, id: {
            type: [Number, String],
            validator(value){
                return Number.isInteger(Number(value));
            }
        }
    },
    computed: {
        part(){
            const { partType, id } = this.$route.params;

            return parts[partType].find((part: RobotPart) => part.id === +id);
        }
    }
  };
</script>
