<div class="services-table">
    <template v-if="this.$store.getters.isLoading">
        <div class="loader" />
    </template>
    <v-simple-table
            class="elevation-5 my-6"
            :fixed-header="true"
    >
        <template v-slot:services-data-table>
            <thead>
            <tr>
                <th class="text-left text-h5 text-dark">
                    Title
                </th>
                <th class="text-left text-h5 text-dark">
                    Phone
                </th>
                <th class="text-right text-h5 text-dark">
                    Actions
                </th>
            </tr>
            </thead>
            <tbody>
            <template v-if="!services.length">
                <tr>
                    <td colspan="3">
                        ...loading...
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr
                        v-for="service in services"
                        :key="service.id"
                >
                    <td>
                        <router-link :to="`/m/service/${service.id}`">
                            {{ service.title }}
                        </router-link>
                    </td>
                    <td>{{ service.phone }}</td>
                    <td class="text-right">
                        <router-link :to="`/m/service/${service.id}`">
                            View
                        </router-link>
                    </td>
                </tr>
            </template>
            </tbody>
        </template>
    </v-simple-table>
</div>

<script>
  export default {
    name: 'ServicesTable',
    props: {
      services: {
        type: Array,
        required: true,
      },
    },
    data: function () {
      return {
        //  services: [],
      }
    },
  }
</script>
