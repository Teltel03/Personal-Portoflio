import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  tasks: any[] = [];
  newTaskContent: string = ''; 

  ngOnInit() {
    this.loadTasks();
  }

  newtask(content: string) {
    if (content !== '') {
      const newTask = { id: this.generateId(), title: content, isEditing: false };
      this.tasks.push(newTask);
      this.saveTask(newTask);
      this.newTaskContent = '';
    }
  }

  removetask(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.isFadingOut = true;
      setTimeout(() => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        if (this.isLocalStorageAvailable()) {
          localStorage.removeItem(`task-${id}`);
        }
      }, 1000); // Adjust the timing to match the animation duration
    }
  }

  removealltasks() {
    this.tasks.forEach(task => {
      task.isFadingOut = true;
    });
    setTimeout(() => {
      this.tasks.forEach(task => {
        if (this.isLocalStorageAvailable()) {
          localStorage.removeItem(`task-${task.id}`);
        }
      });
      this.tasks = [];
    }, 1000); // Adjust the timing to match the animation duration
  }

  editTask(task: any) {
    task.isEditing = true;
  }

  updateTask(task: any) {
    task.isEditing = false;
    this.saveTask(task);
  }

  saveTask(task: any) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(`task-${task.id}`, `${task.title}|${task.isEditing}`);
    }
  }

  loadTasks() {
    if (this.isLocalStorageAvailable()) {
      this.tasks = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('task-')) {
          const value = localStorage.getItem(key);
          if (value) {
            const [title, isEditing] = value.split('|');
            this.tasks.push({ id: Number(key.split('-')[1]), title, isEditing: isEditing === 'true' });
          }
        }
      }
    }
  }

  generateId() {
    return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 0;
  }

  isLocalStorageAvailable() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  
  
}

