// Cria um objeto onde todas as chaves são strings e os valores são números
const scores: Record<string, number> = {
  Andre: 10,
  Mayk: 15,
};

// Limitar valores
type Profile = "admin" | "user" | "guest";

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
};

// Objetos personalizados
interface User {
  name: string;
  email: string;
}

const users: Record<string, User> = {
  1: { name: "Andre", email: "andre@email.com" },
  2: { name: "Andre", email: "andre@email.com" },
};

// O utilitário Record para mapear tipos de objetos.
// Pode-se definir chaves como String e valores como números, limitando as opções disponíveis.
// É possível criar objetos com chaves String e valores numéricos, ou até mesmo com tipos personalizados.
// O Record ajuda a restringir as chaves e valores dentro de um objeto, garantindo a conformidade com a tipagem definida.
// Essa ferramenta é útil para definir a estrutura que um objeto deve seguir.
