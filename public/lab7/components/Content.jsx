class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ['Книги', 'Спорт', 'Музика', 'Фільми'],
      books: ['Хроніки Буресвітла', 'З імли народжені', 'Юмі і митець кошмарів']
    };
  }

  render() {
    return React.createElement('div', null,
      React.createElement('div', null,
        React.createElement('h3', null, 'Хобі'),
        React.createElement('ul', { id: 'element-9' },
          this.state.hobbies.map((hobby, index) =>
            React.createElement('li', {
              key: index,
              id: index === 0 ? "element-after-9" : undefined,
              style: {
                backgroundColor: index === 0 ? 'green' : 'transparent',
                color: index === 0 ? 'white' : 'inherit'
              }
            }, hobby)
          )
        )
      ),
      React.createElement('div', null,
        React.createElement('h3', null, 'Улюблені книги'),
        React.createElement('ol', null,
          this.state.books.map((book, index) =>
            React.createElement('li', { key: index }, book)
          )
        )
      ),
      React.createElement('div', null,
        React.createElement('h3', null, 'Опис найвподобанішого міста, яке я відвідав'),
        React.createElement('p', null,
          'Найвподобанішим містом, яке я відвідав, є місто Київ. Це місто має багато історичних пам\'яток, таких як Київська фортеця, Хрещатик, і багато інших.'
        )
      )
    );
  }
}
