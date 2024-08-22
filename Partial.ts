interface User {
  id: number;
  name: string;
  email: string;
}

const newUser: User = { id: 1, name: "andre", email: "andre@email.com" };

const updatedUser: Partial<User> = { name: "andre zambroni" };


// criar a interface User com propriedades obrigatórias. 
// Com o Partial, podemos tornar propriedades específicas opcionais ao atualizar um usuário, sem a necessidade de preencher todas as propriedades novamente. 
// O Partial permite reaproveitar a tipagem existente, tornando propriedades selecionadas opcionais.
// Essa ferramenta é útil para cenários em que se deseja flexibilidade na atualização de propriedades.