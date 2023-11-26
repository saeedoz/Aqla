new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [],
        filterStatus: 'all',
    },
    methods: {
        addTask: function () {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = '';
            }
        },
        editTask: function (index) {
            const newText = prompt('Edit task:', this.tasks[index].text);
            if (newText !== null) {
                this.$set(this.tasks, index, { text: newText, completed: this.tasks[index].completed });
            }
        },
        deleteTask: function (index) {
            if (confirm('Are you sure you want to delete this task?')) {
                this.tasks.splice(index, 1);
            }
        },
    },
    computed: {
        filteredTasks: function () {
            if (this.filterStatus === 'all') {
                return this.tasks;
            } else if (this.filterStatus === 'active') {
                return this.tasks.filter(task => !task.completed);
            } else {
                return this.tasks.filter(task => task.completed);
            }
        },
    },
});
