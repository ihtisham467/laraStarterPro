<template>
  <Head title="App Setting" />

  <AuthenticatedLayout>
    <template #header>
      App Setting

      
    </template>
    
    <div class="mt-10 sm:mt-0">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent="form.post(route('app-setting.update'))">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >App Name</label
                  >
                  <input
                    type="text"
                    name="app_name"
                    placeholder="App Name"
                    autocomplete="given-name"
                    autofocus
                    class="textInput"
                    v-model="form.app_name"
                  />
                  <p v-if="form.errors.app_name" class="text-red-500 text-xs">{{ form.errors.app_name }}</p>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <button
                    type="submit"
                    class="submitBtn mt-8"
                  >
                    Save
                  </button>
                  <Link :href="route('dashboard')"
                    class="cancelBtn mt-8 ml-2"
                  >
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
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";

const form = useForm({
  app_name: usePage().props.appSetting.app_name,
})

const props = defineProps({});
</script>
