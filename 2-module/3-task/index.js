let calculator = {
  a: null, 
  b: null,
  read: function(a, b) {
    // сохраняет как свойства объекта
    this.a = a;
    this.b = b;
    console.log(a, b);
  },
  sum: function sum(a, b) {
    // возвращает сумму сохраненных значений
    return this.a + this.b;
  },
  mul: function mul(a, b) {
    // перемножает сохраненные значения и возвращает результат
    return this.a * this.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
