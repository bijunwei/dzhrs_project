<template>
    <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-grey-3">
      <template v-slot:avatar>
        <img :src="src" style="width: 64px; height: 64px">
      </template>
    <p>{{titelName}}</p>
    <p>{{describe}}</p>
    </q-banner>
  </div>
</template>

<script>
import {LIST_ITEM_DATA} from "../../config/listItemConfig.js"
export default {
    name:"listItem",
    data(){
        return {
            src:String,
            titelName:String,
            describe:String
        }
    },
    props:{
        type:String
    },
    created(){
        console.log(LIST_ITEM_DATA)
        this.titelName = LIST_ITEM_DATA[this.type].titelName;
        this.describe = LIST_ITEM_DATA[this.type].describe;
        this.src = LIST_ITEM_DATA[this.type].src;
    }
}
</script>

<style>

</style>