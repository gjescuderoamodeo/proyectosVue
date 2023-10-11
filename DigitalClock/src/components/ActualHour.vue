<template>
  <div id="app">
    {{ horaActual }} : {{ minutosActual }} : {{ segundosActual }}
  </div>
</template>

<script>
export default {
  name: "ActualHour",
  data() {
    return {
      horaActual: '',
      minutosActual: '',
      segundosActual: ''
    };
  },
  created() {
    // Actualizar la hora cada segundo
    setInterval(() => {
      this.obtenerHoraActual();
    }, 1000);
  },
  methods: {
    obtenerHoraActual() {
      const ahora = new Date();
      const hora = ahora.getHours().toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      const segundos = ahora.getSeconds().toString().padStart(2, '0');
      this.horaActual = `${hora}`;
      this.minutosActual = `${minutos}`;
      this.segundosActual = `${segundos}`;
    }
  }
}
</script>

<style>
/* Estilos CSS aquí si es necesario */
</style>
