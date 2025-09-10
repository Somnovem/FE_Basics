import './App.css'

function App() {
  return (
    <main className="container">
      <h1>FE Basics — Лабораторні</h1>
      <p className="lead">Оберіть лабораторну роботу нижче.</p>
      <section className="grid">
        <a className="card" href={import.meta.env.BASE_URL + 'lab1/index.html'}>
          <strong>Lab 1</strong>
          <small>Початкові елементи HTML</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab2/index.html'}>
          <strong>Lab 2</strong>
          <small>Створення зображень в CSS-3</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab3/index.html'}>
          <strong>Lab 3</strong>
          <small>Блочна верстка</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab4/index.html'}>
          <strong>Lab 4</strong>
          <small>Об'єкти і сценарії</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab5/index.html'}>
          <strong>Lab 5</strong>
          <small>Події і регулярні вирази у JavaScript</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab6/index.html'}>
          <strong>Lab 6</strong>
          <small>JSON та отримання даних з API</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab7/index.html'}>
          <strong>Lab 7</strong>
          <small>React components та props</small>
        </a>
        <a className="card" href={import.meta.env.BASE_URL + 'lab8/index.html'}>
          <strong>Lab 8</strong>
          <small>Верстка проєкту за зразком</small>
        </a>
      </section>
      <footer>© 2025 FE Basics - Жмура Артем</footer>
    </main>
  )
}

export default App
