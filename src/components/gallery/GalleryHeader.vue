<template>
  <v-row align="center" justify="center">
    <div id="comp-jx6hueb8" class="_1Z_nJ" data-testid="richTextElement">
      <h2 class="font_2" style="font-size: 29px; text-align: center">
        <span style="color: #2f2e2e">
          <span style="font-size: 29px">
            <span
              style="
                font-family: wfont_eb4b72_afe4c0ec08c843ddaa502514031ba9bf,
                  wf_afe4c0ec08c843ddaa5025140, orig_prida_61;
              "
              >{{ title }}</span
            >
          </span>
        </span>
      </h2>

      <h2 class="font_2" style="font-size: 17px; text-align: center">
        <span style="color: #2f2e2e">
          <span style="font-size: 17px">
            <span style="font-family: cinzel, serif">{{ subtitle }}</span>
          </span>
        </span>
      </h2>
    </div>
  </v-row>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>