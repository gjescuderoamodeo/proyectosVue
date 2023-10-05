<template>
  <div>
    <input placeholder="Introduce la edad">
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCount: 0,
      family: [{
        name: 'pepe',
        age: 57,
        child: [{
          name: 'susana',
          age: 12,
          child: []
        },
        {
          name: 'julia',
          age: 20,
          child: [
            {
              name: 'jose',
              age: 1,
              child: []
            },
          ]
        }]
      }]
    }
  },
  beforeMount() {
    this.getCountPersonsWithAgeHighest(12);
  },
  methods: {
    calculateTotalCount(family, age) {
      family.forEach(member => {
        /*if (member.age > age) {
          this.totalCount++;
        }*/
        console.log(member.name);
        if (member.child.length === 0) {
          return;
        }
        this.calculateTotalCount(member.child, age);
      });
    },
    getCountPersonsWithAgeHighest(age) {
      this.calculateTotalCount(this.family, 12);
    }
  }
}
</script>

<style lang="">
  
</style>