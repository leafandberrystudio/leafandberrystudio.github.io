<template>
  <v-row align="center" justify="center">
    <div id="comp-jx6huebr" class="_1Z_nJ" data-testid="richTextElement">
      <p
        class="font_8"
        style="font-size: 25px; line-height: 1.3em; text-align: center"
      >
        <span style="font-size: 25px"
          ><span style="color: #2f2e2e"
            ><span style="font-family: caudex, serif; letter-spacing: 0.03em">{{
              description
            }}</span></span
          ></span
        >
      </p>
    </div>
  </v-row>
</template>

<script>
export default {
  props: ["description"],
};
</script>