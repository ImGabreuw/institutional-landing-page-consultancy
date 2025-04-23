# Institutional Landing Page Consultancy

## Configuração do Git

1. Baixe e instale o [Git para Windows](https://git-scm.com/download/win).
2. Após a instalação, abra o **Git Bash**.
3. Configure seu nome de usuário e e-mail:

   ```sh
   git config --global user.name "Seu Nome"
   git config --global user.email "seu@email.com"
   ```

## Configuração de credenciais no Git

### Utilizando SSH

1. Gere uma chave SSH:

   ```sh
   ssh-keygen -t ed25519 -C "seu@email.com"
   ```

2. Pressione Enter para aceitar o local padrão e defina uma senha se desejar.
3. Adicione a chave ao ssh-agent:

   ```sh
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. Copie a chave pública:

   ```sh
   cat ~/.ssh/id_ed25519.pub
   ```

5. Adicione a chave copiada em **Settings > SSH and GPG keys** no GitHub/GitLab.

### Utilizando Token

1. Gere um token de acesso pessoal no GitHub em **Settings > Developer settings > Personal access tokens**.
2. Ao clonar ou fazer push/pull, use o token como senha.

> Recomendo o uso do [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) para facilitar o gerenciamento de credenciais.

## Como instalar o Node.js

1. Baixe o instalador do Node.js em [https://nodejs.org/](https://nodejs.org/).
2. Execute o instalador e siga as instruções.
3. Após a instalação, verifique no terminal:

   ```sh
   node -v
   npm -v
   ```

## Como configurar o projeto na máquina local (Windows)

1. Clone o repositório:

   ```sh
   git clone git@github.com:ImGabreuw/institutional-landing-page-consultancy.git
   # ou via HTTPS
   git clone https://github.com/ImGabreuw/institutional-landing-page-consultancy.git
   ```

2. Acesse a pasta do projeto:

   ```sh
   cd institutional-landing-page-consultancy
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o projeto em modo desenvolvimento:

   ```sh
   npm run dev
   ```

5. Acesse `http://localhost:3000` no navegador para visualizar o projeto.
