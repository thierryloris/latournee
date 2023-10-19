<template>
  <q-page class="productPage">
    <div>{{ data }}</div>
  </q-page>
</template>

<script setup lang="ts">
import { fetchProductByID } from '../services/store.api';
import { ref, onMounted } from 'vue';

const data = ref({});
onMounted(async () => {
  data.value = await fetchProductByID('reckhDpHgH1hmlNrT');
});
</script>

<style lang="scss" scoped>
.category-img img {
  max-width: 220px;
  max-height: 220px;
}

.max-width-80 {
  max-width: 80%;
}
.product-card {
  margin: 10px;
  .category-product-img {
    min-height: 148px;
    max-height: 148px;
    width: 148px;
    height: 148px;
    margin: 0px;
    border-radius: 10px 10px 0px 0px;
  }

  .category-product-title {
    max-width: 148px;
  }
}
</style>
