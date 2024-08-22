interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book: Omit<Book, "description" | "pages"> = {
  title: "TypeScript",
  author: "Andre",
};

// O utilitário Omit do TypeScript para reutilizar uma tipagem excluindo propriedades.
// Vamos criar uma interface de livro e aprender como omitir propriedades ao definir um objeto com essa tipagem.
// O omit é útil para reaproveitar uma tipagem e deixar campos específicos de fora.
// Além disso, é possível omitir mais de uma propriedade usando o operador de pipe
