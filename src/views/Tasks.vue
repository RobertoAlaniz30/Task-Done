<template>
  <form class="form-tasks">
    <h1>✍️ Tasks ✍️</h1>
    <font-awesome-icon class="fa-solid fa-alien" />
    <input
      class="input-task"
      type="text"
      placeholder="Something New?"
      v-model="title"
    />

    <button class="add-task" @click.prevent="addCourse">+</button>
  </form>

  <ul class="list-tasks">
    <p v-show="!tasks.length">No pending tasks</p>
    <li
      :class="{ black: completed == true, green: completed == false }"
      v-for="a in tasks"
      :key="a.title"
    >
      <div>
        <button @click.prevent="complet()"></button>
        <span>{{ a.title }}</span>
      </div>
      <!-- <div class="task-item">{{ a.title }}</div> -->

      <font-awesome-icon icon="delete" />
      <!-- <button class="delete-task" @click.prevent="delet(a.title)">
        <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" />
      </button> -->
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
      tasks: [],

      title: "",
      completed: true,
    };
  },
  methods: {
    addCourse() {
      if (!this.title) {
        return;
      }

      this.tasks.push({
        title: this.title,
      });
    },
    complet() {
      this.completed = false;
    },
    delet(title) {
      this.$swal("Hello Vue world!!!");
      this.tasks = this.tasks.filter((a) => {
        return a.title != title;
      });
    },
  },
  //   computed: {
  //     Urgent() {
  //       return this.tasks.sort((a, b) => {
  //         return b.urgency - a.urgency;
  //       });
  //     },
  //   }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka&family=Montserrat:wght@600&family=Palette+Mosaic&family=Varela+Round&display=swap");
* {
  font-family: "Fredoka", sans-serif;
}
span {
  color: white;
}
.main-container {
  margin: 0 auto;
}
.container {
  display: flex;
  justify-content: center;
  width: 30%;
}
.form-tasks {
  width: 100%;
}
.input-task {
  width: 40%;
  height: 30px;
  border-radius: 12px;
  color: white;
  background-color: rgb(50, 50, 50);
}

.add-task {
  height: 30px;
  width: 30px;
  margin-left: 4px;
  color: aliceblue;
  background-color: rgb(50, 50, 50);
  border-radius: 50px;
}

.list-tasks {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 50%;
  padding-left: 0;
}
.list-tasks p {
  height: 30px;
  color: rgb(234, 234, 234);
  background-color: black;
  box-shadow: 0px 0px 7px 1px #e3e1dd;
  border-radius: 8px;
}
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 7px 1px #e3e1dd;
  border-radius: 8px;
}
.black {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 7px 1px #e3e1dd;
  border-radius: 8px;
  background-color: black;
}
.green {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 7px 1px #e3e1dd;
  border-radius: 8px;
  background-color: rgb(101, 204, 168);
}

.task-item div button {
  height: 15px;
  margin: 0 8px;
  border-radius: 50%;
}
.delete-task img {
  width: 40px;
  height: 40px;
  border: none;
  background: none;
}
</style>
