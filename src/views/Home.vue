<template>
  <div>
    <v-img
      src="../assets/jumbo.jpg"
      max-width="100%"
      max-height="500px"
    ></v-img>
    <v-container>
      <h2 class="text-center tit" color="success">Here Goes the content</h2>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="md-6" class="text-center">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </v-col>
        <v-col cols="md-6" class="text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="md-4" class="text-center">
          <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="100%"
          >
          <template slot="progress">
            <v-progress-linear
            color="purple"
            height="10"
            indeterminate
            ></v-progress-linear>
          </template>
            <v-img
            height="250"
            src="../assets/new.png"
            >
            </v-img>
            <v-card-title>Zanahoria</v-card-title>
            <v-card-text>
              <v-row
              align="center"
              class="mx-0"
              >
                <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                >
                </v-rating>
                <div class="grey--text ml-4">
                  4.5 (413)
                </div>
              </v-row>
              <div class="my-4 subtitle-1">
                $ . Italian Cafe
              </div>
              <div>Small plates, salads and sandwhich and many more..</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>Tonight Availability</v-card-title>
            <v-card-text>
              <v-chip-group
              v-modal="selection"
              active-class="deep-purple accent-4 white--text"
              column
              >
              <v-chip>5:30 PM</v-chip>
              <v-chip>6:30 PM</v-chip>
              <v-chip>7:30 PM</v-chip>
              <v-chip>8:30 PM</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <v-btn 
              color="deep-purple ligthen-2"
              text
              @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="md-4" class="text-center">
          <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="100%"
          >
          <template slot="progress">
            <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
            >

            </v-progress-linear>
          </template>
          <v-img height="250" src="../assets/logo.png"></v-img>
          <v-card-title>Pepino</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="3.5" color="green darken-4" readonly half-increments dense size="14" ></v-rating>
              <div class="grey--text ml-4">3.5 (33)</div>
            </v-row>
            <div class="my-4 subtitle-1">$. Chinese Recipe</div>
              <div>Pepinos, Brussels sproutes and other green diet</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Tonight Availability</v-card-title>
          <v-card-text>
            <v-chip-group v-model="selection" active-class="green accent-4 white--text">
              <v-chip>5:30 PM</v-chip>
              <v-chip>6:30 PM</v-chip>
              <v-chip>7:30 PM</v-chip>
              <v-chip>8:30 PM</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green darken-4" text @click="reserve" >Reserve</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="md-4" class="text-center">
          <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="100%"
          >
          <template slot="progress">
            <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
            >

            </v-progress-linear>
          </template>
          <v-img height="250" src="../assets/brand.png"></v-img>
          <v-card-title>Picante</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4" color="red darken-4" readonly half-increments dense size="14" ></v-rating>
              <div class="grey--text ml-4">3.5 (33)</div>
            </v-row>
            <div class="my-4 subtitle-1">$. Chinese Recipe</div>
              <div>Pepinos, Brussels sproutes and other green diet</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Tonight Availability</v-card-title>
          <v-card-text>
            <v-chip-group v-model="selection" active-class="red accent-4 white--text">
              <v-chip>5:30 PM</v-chip>
              <v-chip>6:30 PM</v-chip>
              <v-chip>7:30 PM</v-chip>
              <v-chip>8:30 PM</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red darken-4" text @click="reserve" >Reserve</v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    loading:false,
    Selection:1
  }),
  methods:{
    reserve(){
      this.loading = true,
      setTimeout(() => (this.loading = false),2000)
    }
  }
};
</script>
<style>
.tit::after {
  content: "-----";
  position: absolute;
  top: 530px;
  left: 650px;
  color: orange;
}
</style>
