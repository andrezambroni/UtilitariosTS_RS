interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

interface BookPreview {
  title: string;
}

const book1: BookPreview = { title: "TypeScript" };
const book2: Pick<Book, "title" | "pages"> = {
  title: "TypeScript",
  pages: 150,
};

// Utilizar o utilitário Pick para criar uma interface chamada Book, representando um livro com propriedades como title, pages e author.
// O Pick permite selecionar propriedades específicas de um tipo, evitando a necessidade de criar novos tipos.
// Além disso, é possível reaproveitar várias propriedades de um tipo, garantindo flexibilidade e facilitando a reutilização de tipagens em aplicações.
