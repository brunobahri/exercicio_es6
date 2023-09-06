const alunos = [
    { nome: "Aluno1", nota: Math.floor(Math.random() * 11) },
    { nome: "Aluno2", nota: Math.floor(Math.random() * 11) },
    { nome: "Aluno3", nota: Math.floor(Math.random() * 11) },
    { nome: "Aluno4", nota: Math.floor(Math.random() * 11) },
    { nome: "Aluno5", nota: Math.floor(Math.random() * 11) }
  ];
  
  function removerAlunosComNotaMenorQueSeis(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Exibe o array original de alunos
  console.log("Alunos antes da remoção:");
  console.log(alunos);
  
  // Chama a função para remover os alunos com notas menores que 6
  const alunosFiltrados = removerAlunosComNotaMenorQueSeis(alunos);
  
  // Exibe o array de alunos após a remoção
  console.log("Alunos após a remoção:");
  console.log(alunosFiltrados);
  