<template>
  <Head title="Roles" />

  <AuthenticatedLayout>
    <template #header>
      Roles

      <Link
        :href="route('roles.create')"
        class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"
      >
        Add New Role
      </Link>
    </template>
    <toast-alert :message="$page.props.flash.successMsg" />
    <div class="p-4 bg-white rounded-lg shadow-xs">
      <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
        <div class="overflow-x-auto w-full">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"
              >
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y">
              <tr v-for="role in roles.data" :key="role.id" class="text-gray-700">
                <td class="px-4 py-3 text-sm">
                  {{ role.name }}
                </td>
                <td class="px-4 py-3 text-sm">
                  <i class="fa fa-solid fa-users"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"
        >
          <pagination :links="roles.links" />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import ToastAlert from "@/Components/ToastAlert.vue";
import { Head, Link, usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";

const props = defineProps({
  roles: Object,
});
</script>
