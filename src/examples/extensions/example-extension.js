(function (Scratch) {
  'use strict';

  // Verifica se o ambiente de blocos está disponível
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Esta extensão precisa ser executada fora do sandbox (unsandboxed).');
  }

  class LernimExtension {
    getInfo() {
      return {
        id: 'lernimExtension',
        name: 'Lernim', // Nome da aba alterado para Lernim
        blockIconURI: '', // Adicione o link do ícone se houver
        color1: '#0FBD8C', // Cor principal dos blocos (Verde)
        color2: '#0B9A71', // Cor de clique/borda do bloco
        color3: '#087858', // Cor de contraste
        blocks: [
          // --- BLOCOS DA NOVA EXTENSÃO 1 ---
          {
            opcode: 'novoBlocoComando',
            blockType: Scratch.BlockType.COMMAND,
            text: 'fazer nova ação [TEXTO]',
            arguments: {
              TEXTO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'olá'
              }
            }
          },
          {
            opcode: 'novoBlocoReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'obter dado de Lernim',
            arguments: {}
          },

          // --- BLOCOS DA NOVA EXTENSÃO 2 ---
          {
            opcode: 'outroBlocoComando',
            blockType: Scratch.BlockType.COMMAND,
            text: 'executar função verde',
            arguments: {}
          }
          
          // Adicione mais blocos novos aqui seguindo a mesma estrutura
        ],
        menus: {
          // Se as novas extensões precisarem de menus (dropdowns), defina-os aqui
        }
      };
    }

    // --- FUNÇÕES DOS NOVOS BLOCOS ---

    novoBlocoComando(args) {
      const texto = args.TEXTO;
      console.log('Lernim executou comando com: ' + texto);
    }

    novoBlocoReporter() {
      return 'Dado do Lernim';
    }

    outroBlocoComando() {
      // Lógica do outro bloco
    }
  }

  // Registra a nova extensão Lernim no ecossistema
  Scratch.extensions.register(new LernimExtension());
})(Scratch);
