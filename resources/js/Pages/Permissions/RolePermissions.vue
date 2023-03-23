<template>
  <Head title="Role Permissions" />

  <AuthenticatedLayout>
    <template #header> Role Permissions </template>
    <div class="p-4 bg-white rounded-lg shadow-lg">
      <form @submit.prevent="form.post(route('roles.update-permissions', role.id))">
      <div v-for="(category, key) in categories" :value="key">
        <p class="font-bold">{{ key + 1 }}. {{ category.name }}</p>
        <div class="grid mb-4 mt-2 md:grid-cols-2 xl:grid-cols-4">
          <label
            class="flex items-center dark:text-gray-400"
            v-for="permission in category.permissions"
          >
            <input type="checkbox" class="customCheckbox" v-model="form.permissions" :value="permission.id"/>
            <span class="ml-2">
              {{ permission.name }}
            </span>
          </label>
          <p class="text-center" v-if="category.permissions.length === 0">
            No Permisions Found!
          </p>
        </div>
      </div>
      <div class="col-span-6 sm:col-span-3">
        <button type="submit" class="submitBtn mt-">Update</button>
        <Link :href="route('permissions.index')" class="cancelBtn mt- ml-2">
          Cancel
        </Link>
      </div>
      </form>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
  categories: Object,
  role: Object,
  rolePermissions: Object,
  errors: Object,
});

const form = useForm({
  permissions: props.rolePermissions,
});

function destroyPermission(id) {
  if (confirm("Are you sure?")) {
    router.delete(route("permissions.destroy", id));
  }
}
</script>
