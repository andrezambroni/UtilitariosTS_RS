const icons = {
  home: "./path/home.svg",
  add: "./path/add.svg",
  remove: "./path/remove.svg",
};

type Icon = typeof icons;

const icon: keyof Icon = "add";


// Utilizar o KeyOff para extrair chaves de um objeto e usá-las para tipagem. 
// Criaremos um objeto icons com chaves de nomes de ícones e valores de endereços. Em seguida, criaremos uma tipagem a partir desse objeto usando KeyOff, 
// o que nos permite restringir o uso apenas às chaves disponíveis. 
// Assim, conseguiremos extrair as chaves de uma tipagem usando o KeyOff.