<template>
  <Head title="Permissions" />

  <AuthenticatedLayout>
    <template #header>
      Permissions

      <Link
        :href="route('permissions.create')"
        class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"
      >
        <i class="fa fa-plus mr-1"></i>
        New Permission
      </Link>
      <Link
        :href="route('permission-categories.create')"
        class="flex items-center justify-between px-4 py-2 mr-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"
      >
        <i class="fa fa-plus mr-1"></i>
        New Category
      </Link>
    </template>
    <div class="p-4 bg-white rounded-lg shadow-lg">
      <div v-for="(category, key) in categories" :value="key">
        <p class="font-bold">{{ key + 1 }}. {{ category.name }}</p>
        <div class="grid mb-4 mt-2 md:grid-cols-2 xl:grid-cols-4">
          <label
            class="flex items-center dark:text-gray-400"
            v-for="(permission, permissionKey) in category.permissions" :value="permissionKey"
          >
            {{ permissionKey+1 }}. 
            {{ permission.name }}
          </label>
          <p class="text-center" v-if="category.permissions.length === 0">
            No Permisions Found!
          </p>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head, Link, usePage, router } from "@inertiajs/vue3";

const props = defineProps({
  categories: Object,
});

function destroyPermission(id) {
  if (confirm("Are you sure?")) {
    router.delete(route("permissions.destroy", id));
  }
}
</script>
