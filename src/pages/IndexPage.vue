<template>
  <q-page class="">
    <q-virtual-scroll
      :items="categories"
      virtual-scroll-horizontal
      v-slot="{ item }"
    >
      <q-card class="product-card">
        <q-card-section>
          <div class="text-subtitle1 category-product-title">
            {{ item['Nom'] }}
          </div>
        </q-card-section>
      </q-card>
    </q-virtual-scroll>
    <div v-for="category in landing['Sous-categories']" :key="category.ID">
      <div class="category-title text-h4">
        {{ category.Nom }}
      </div>
      <div class="category-description text-h6">
        {{ category.Description }}
      </div>
      <div class="row items-start q-gutter-md">
        <div class="category-img max-width-20">
          <img :src="category.Image" />
        </div>
        <q-virtual-scroll
          :items="category['Produits']"
          virtual-scroll-horizontal
          class="max-width-80"
          v-slot="{ item }"
        >
          <q-card class="product-card">
            <q-card-section class="q-pt-none">
              <img class="category-product-img" :src="item.Image" />
            </q-card-section>
            <q-card-section>
              <router-link :to="{ path: 'product/' + item.ID }">
                <div class="text-subtitle1 category-product-title">
                  {{ item['Nom du produit'] }}
                </div>
              </router-link>
            </q-card-section>
          </q-card>
        </q-virtual-scroll>
      </div>
      <div class="all-category"></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { fetchCategories, fetchLanding } from '../services/store.api';
import { ref, onMounted } from 'vue';
const landing = ref({});
const categories = ref({});
onMounted(async () => {
  landing.value = await fetchLanding();
  categories.value = await fetchCategories();
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
