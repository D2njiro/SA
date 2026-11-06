let DADOS_INICIAIS = {
    usuarios: [
      { id: 1, matricula: '1001', nome: 'Ana Souza',    senha: 'cantina123', perfil: 'atendente',  ativo: 1 },
      { id: 2, matricula: '1002', nome: 'Bruno Lima',   senha: 'lanche2026', perfil: 'atendente',  ativo: 1 },
      { id: 3, matricula: '2001', nome: 'Carla Mendes', senha: 'super2026',  perfil: 'supervisor', ativo: 1 },
      { id: 4, matricula: '2002', nome: 'Diego Rocha',  senha: 'diego2026',  perfil: 'atendente',  ativo: 0 }
    ],
    turmas: [
      { id: 1, nome: 'Técnico em Desenvolvimento de Sistemas' },
      { id: 2, nome: 'Técnico em Mecânica' }
    ],
    alunos: [
      { id: 1, matricula: 'A001', nome: 'João Pereira',  turma_id: 1, ativo: 1 },
      { id: 2, matricula: 'A002', nome: 'Maria Schmitt', turma_id: 2, ativo: 1 }
    ],
    entregas: [
      { id: 1, aluno_id: 1, usuario_id: 1, data: hoje(), hora: '11:45' }
    ]
  };