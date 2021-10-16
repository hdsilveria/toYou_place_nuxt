<template>
  <div>
    <b-row
      class="menuNav w-10 text-center"
      align-h="center"
    >
      <b-col
        md="3"
        align-self="center"
      >
        <span>Ofertas de Hoje</span>
        <b-dropdown
          id="dropdown-1"
          text="Categorias"
          class="m-md-2 dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item active>
            Active action
          </b-dropdown-item>
          <b-dropdown-item disabled>
            Disabled action
          </b-dropdown-item>
        </b-dropdown>
        
      </b-col>
      <b-col
        md="6"
        align-self="center"
        class="p-0"
      >
        <b-form-input placeholder="Pesquise seu item desejado" />
      </b-col>
      <b-col
        md="3"
        align-self="center"
      >
        teste
      </b-col>
    </b-row>
  </div>
</template>

<style scoped lang="scss">

.menuNav {
  height: 70px;
}

</style>