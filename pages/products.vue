<script lang="ts" setup> 
import { products } from '~/composables/constants/products'; 
const allProducts = ref(products); 
</script> 
<template> 
<section> 
<div class="container"> 
<div class="py-10"> 
<div class="flex gap-6 flex-wrap mx-auto"> 
<template v-for="(item, index) in allProducts" :key="index"> 
<CardsCardProduct :product="item" class="w-[calc(100%/4-18px)]"/> 
</template> 
</div> 
</div> 
</div> 
</section> 
</template>