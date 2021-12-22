<template>
  <div @click="$router.push({ name: 'entry', params: { id: 10 } })"
    class="mb-3 pointer p-2 entry-container">
      <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">
            15
        </span>
        <span class="mx-1 fs-5">
            20
        </span>
        <span class="mx-2 fw-light">
            Diciembre 2021
        </span>
      </div>
      <div class="entry-descripcion">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, amet adipisci nulla eius aperiam nemo velit. Earum, maxime ducimus, aliquam praesentium expedita magnam, consectetur nulla vero exercitationem a iure adipisci.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
}
.entry-descripcion{
    font-size: 12px;
}
</style>