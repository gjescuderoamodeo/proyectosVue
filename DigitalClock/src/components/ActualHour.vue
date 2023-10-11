<template>
  <div class="app">
    <table>
      <tr>
        <td>{{ horaActual }}</td>
        <td class="puntos"> : </td>
        <td>{{ minutosActual }}</td>
        <td class="puntos"> : </td>
        <td>{{ segundosActual }}</td>
        <td class="pm">PM</td>
      </tr>
    </table>
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
  props() {
    theme = "rainbow", "blue", "green";
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
.app {
  font-size: 5rem;
  color: rgb(255, 0, 0);
  text-align: center;
  align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
}

td {
  border: 2px solid white;
  width: 20px;
}

.puntos {
  border: 2px solid rgb(0, 164, 14);
}

.pm {
  font-size: 1rem;
  width: 5rem;
}
</style>
