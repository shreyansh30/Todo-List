# Todo-List

A simple React-based Todo List application, deployed on GitHub Pages.

## 🚀 Live Demo

**View the app:**  
[https://shreyansh30.github.io/Todo-List](https://shreyansh30.github.io/Todo-List)

---

## 📋 Features

- Add, edit, and delete todos
- Mark tasks as completed
- Filter todos (all, active, completed)
- Responsive design

---

## 🛠️ Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/shreyansh30/Todo-List.git
cd Todo-List
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Run locally**

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🚢 Deploying to GitHub Pages

1. **Set the homepage in `package.json`:**
   ```json
   "homepage": "https://shreyansh30.github.io/Todo-List"
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

Your app will be published to  
[https://shreyansh30.github.io/Todo-List](https://shreyansh30.github.io/Todo-List)

---

## ⚙️ Tech Stack

- [React](https://react.dev/)
- [react-router-dom](https://reactrouter.com/) (using `HashRouter` for GitHub Pages compatibility)
- [gh-pages](https://www.npmjs.com/package/gh-pages) (for deployment)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Shreyansh30**  
[GitHub Profile](https://github.com/shreyansh30)

---

## 📝 Notes

- If you directly visit a sub-route (like `/add`), make sure you are using `HashRouter` in your code for proper routing on GitHub Pages.
- For any issues or suggestions, feel free to open an [issue](https://github.com/shreyansh30/Todo-List/issues).
