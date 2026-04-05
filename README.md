# Desafio Técnico — Sênior React Native Engineer

## Gerenciador de Senhas e Anotações

### Contexto

Estamos construindo um aplicativo mobile de gerenciamento de senhas e anotações privadas com foco absoluto em segurança. O app deve funcionar sob o modelo **zero-knowledge**: nem nós, nem ninguém além do usuário, deve ser capaz de ler o conteúdo armazenado — nem mesmo com acesso físico ao dispositivo ou aos dados brutos.

Você foi contratado para projetar e implementar este aplicativo. O que avaliamos não é apenas se o app funciona, mas como você pensa sobre segurança, arquitetura, tradeoffs e experiência do usuário em um domínio de alta criticidade.

### Objetivo

Construir um aplicativo React Native que permita ao usuário:

1. Criar uma conta local protegida por uma **master password**
2. Armazenar credenciais (site, usuário, senha, notas)
3. Armazenar anotações privadas (título, conteúdo em texto livre)
4. Buscar, editar e deletar itens
5. Desbloquear o app com biometria após setup inicial
6. Gerar senhas fortes
7. Todo o conteúdo deve ser criptografado **antes** de tocar qualquer storage

### Requisitos Obrigatórios

#### Segurança (não-negociável)

- A master password **nunca** é armazenada em lugar nenhum, nem em hash
- A chave de criptografia é derivada da master password usando **Argon2id** (preferencial) ou **PBKDF2** com no mínimo 600.000 iterações e SHA-256
- Salt único por usuário, gerado com CSPRNG, armazenado separadamente
- Criptografia simétrica com **AES-256-GCM** ou **XChaCha20-Poly1305**
- IV/nonce único por operação de criptografia (nunca reutilizar)
- Dados sensíveis armazenados apenas de forma criptografada (SQLite, MMKV criptografado, ou Realm encrypted)
- Chaves derivadas armazenadas em **Keychain (iOS) / Keystore (Android)**, nunca em AsyncStorage
- Auto-lock do app após 2 minutos de inatividade (configurável)
- Clipboard limpa automaticamente após 30 segundos quando usuário copia uma senha
- Proteção contra screenshot na tela de itens (`FLAG_SECURE` no Android, blur no iOS quando app vai pro background)
- Nenhum log de dados sensíveis, mesmo em ambiente de desenvolvimento

#### Funcionalidades

- Onboarding: criar master password com validação de força (mínimo 12 caracteres, zxcvbn score >= 3)
- Unlock com master password
- Unlock com biometria (Face ID / Touch ID / Fingerprint) após setup
- Listar credenciais e notas com busca
- Criar, editar e deletar itens
- Gerador de senhas com opções (tamanho, símbolos, números, maiúsculas)
- Copiar senha para clipboard com feedback visual e timer de limpeza
- Tela de configurações com: mudar master password, tempo de auto-lock, toggle de biometria

#### Arquitetura (MVVM)

- **Model**: entidades, camada de criptografia e storage
- **ViewModel**: estado observável e regras de negócio, sem importar nada de React Native
- **View**: componentes consumindo o ViewModel via hook, sem lógica de negócio
- ViewModels devem ser testáveis isoladamente, com Jest puro

#### Qualidade Técnica

- TypeScript estrito (sem `any` implícito, `strict: true` no tsconfig)
- Tratamento de estados de loading, erro e empty em todas as telas
- Pelo menos 5 testes unitários na camada de criptografia
- Pelo menos 2 testes de integração em fluxos críticos (unlock, salvar item)
- Acessibilidade básica (labels, roles, contraste, tamanhos de toque)

### Desafios Bonus

Não são obrigatórios, mas cada um executado bem conta pontos:

- **Have I Been Pwned integration** usando k-anonymity (envia apenas os 5 primeiros caracteres do SHA-1 da senha)
- **TOTP generator** integrado (RFC 6238) para códigos 2FA
- **Detecção de root/jailbreak** com aviso ao usuário
- **Export/import** de backup criptografado (arquivo `.vault` protegido por senha)
- **Análise de força de senha** em tempo real com zxcvbn
- **Animações com Reanimated 3** em transições e feedback de ações
- **Haptic feedback** em ações críticas
- **Tema claro/escuro** com detecção automática do sistema
- **Documentação de threat model**: o que o app protege contra, o que não protege
- **CI/CD** com GitHub Actions rodando lint, type-check e testes
