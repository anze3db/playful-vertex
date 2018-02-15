<template>
    <v-container grid-list-md text-xs-right>
      <v-layout row wrap>
        <v-flex xs12
          v-for="(item, key) in objects"
          :key="key"
        >
          <v-card>
            <v-card-title primary-title>
              <h1 class="headline" label="content">{{item.content}}</h1>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon label=delete @click="deleteObject(key)">
                <v-icon>delete</v-icon>
              </v-btn>
              <ObjectMapper></ObjectMapper>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ObjectMapper from '@/components/ObjectMapper'
export default {
  name: 'ObjectList',
  components: {
    ObjectMapper
  },
  computed: {
    ...mapGetters(['objects', 'count'])
  },
  methods: {
    deleteObject: function (key) {
      this.$store.commit('remove_object', key)
    }
  }
}
</script>
