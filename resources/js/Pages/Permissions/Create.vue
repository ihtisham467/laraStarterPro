<template>
  <Head title="Create New Permission" />

  <AuthenticatedLayout>
    <template #header> Create New Permission </template>

    <div class="mt-10 sm:mt-0">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="form.post(route('permissions.store'))">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Permission Name</label
                  >
                  <input
                    type="text"
                    name="name"
                    placeholder="Permission Name"
                    autocomplete="given-name"
                    autofocus
                    class="textInput"
                    v-model="form.name"
                  />
                  <p v-if="form.errors.name" class="text-red-500 text-xs">
                    {{ form.errors.name }}
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Permission Category</label
                  >
                  <select class="textInput" v-model="form.category">
                    <option v-for="category in categories" :value="category.id">
                      {{ category.name }}
                    </option>
                  </select>
                  <p v-if="form.errors.category" class="text-red-500 text-xs">
                    {{ form.errors.category }}
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <button type="submit" class="submitBtn mt-8">Save</button>
                  <Link :href="route('permissions.index')" class="cancelBtn mt-8 ml-2">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
const form = useForm({
  name: null,
  category: null,
});

const props = defineProps({
  categories: Object,
});
</script>
