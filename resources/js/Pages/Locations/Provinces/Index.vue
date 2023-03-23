<template>
  <Head title="Province" />

  <AuthenticatedLayout>
    <template #header>
      Province

      <Link
        :href="route('provinces.create')"
        class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple float-right"
      >
        Add New Province
      </Link>
      <input
        type="text"
        name="name"
        placeholder="Search"
        autocomplete="given-name"
        class="searchInput float-right"
        v-model="searchForm.keyword"
      />
    </template>
    <div class="p-4 bg-white rounded-lg shadow-lg">
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
              <tr
                v-for="province in provinces.data"
                :key="province.id"
                class="text-gray-700"
              >
                <td class="px-4 py-3 text-sm">
                  {{ province.name }}
                </td>
                <td class="px-4 py-3 text-sm">
                  <!-- <Link :href="route('provinces.permissions', province.id)" title="Province"><i class="fa fa-bars"></i></Link> -->
                  <a
                    href="#"
                    class="ml-3"
                    type="button"
                    @click="destroyProvince(role.id)"
                  >
                    <i class="fa fa-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <div
          class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"
        >
          <pagination :links="provinces.links" />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head, Link, usePage, router, useForm } from "@inertiajs/vue3";
import { onMounted } from "vue";
import pickBy from "lodash/pickBy";
import throttle from "lodash/throttle";

export default {
  components: {
    AuthenticatedLayout,
    Head,
    Link,
    Pagination
  },
  props: {
    roles: Object,
  },
  props: {
    provinces: Object,
  },

  setup() {
    const searchForm = useForm({
      keyword: null,
    });
    return { searchForm };
  },

  watch: {
    searchForm: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get(route("provinces.index"), pickBy(this.searchForm), {
          preserveState: true,
        });
      }, 150),
    },
  },

  methods: {
    destroyProvince(id) {
      if (confirm("Are you sure?")) {
        router.delete(route("provinces.destroy", id));
      }
    },
  },
};
</script>
