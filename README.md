# 📝 React Todo List App

A simple and responsive **Todo List Application** built with **React.js**, designed to help users manage daily tasks with ease. This app supports adding, checking/unchecking, deleting, and clearing all tasks. It also stores task data in **LocalStorage**, so your tasks remain saved even after refreshing the page.

---

## 🚀 Features
- **Add Tasks** – Quickly add new tasks to your list.
- **Mark as Complete** – Toggle task completion.
- **Delete Tasks** – Remove tasks individually.
- **Clear All Tasks** – Delete all tasks at once.
- **LocalStorage Support** – Tasks remain saved even after browser refresh.
- **Duplicate Task Protection** – Prevents adding tasks with the same content.

---

## 🧩 Tech Stack
- **React.js**
- **JavaScript (ES6+)**
- **LocalStorage API**
- **CSS**

---

## 📂 Project Structure
```bash
src/
 └── components/
      ├── Todo.jsx
      ├── TodoForm.jsx
      ├── TodoList.jsx
      ├── TodoLocalStorage.js
      └── Todo.css
```


---

## 📦 Installation & Setup
Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/umarazlan/React-Todo-App.git

# Navigate into the project folder
cd react-todo-app

# Install dependencies
npm install

# Start development server
npm start
```

---

## 🛠 Usage
1. Type your task in the input box.
2. Click **Add Task**.
3. Click the **Check icon** to mark a task completed.
4. Click the **Delete icon** to remove a task.
5. Press **Clear** to remove all tasks.

---

## 💾 LocalStorage Behavior
- Tasks are automatically saved in `localStorage` under the key:
```
reactTodo
```
- They load back into the app when the page reloads.

---

## 🤝 Contributing
Pull requests and improvements are always welcome.  
Feel free to fork the repository and enhance the project.

---

## ⭐ Show Your Support
If you like this project, consider giving it a **star** on GitHub!

---

## 📄 License
This project is open-source and available under the **MIT License**.
