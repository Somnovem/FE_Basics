const Lab7App = () => {
  return React.createElement('div', null,
    React.createElement('h3', null, 'Завдання 1'),
    React.createElement('hr', null,),
    React.createElement('div', null,
      React.createElement(Header, null),
      React.createElement(Content, null),
      React.createElement(Image, null)
    ),
    React.createElement('hr', null,),
    React.createElement('h3', null, 'Завдання 2'),
    React.createElement(GoodsList, null),
    React.createElement('p', null,
      React.createElement('a', { href: '../index.html' }, '← Повернутись на головну')
    )
  );
};
