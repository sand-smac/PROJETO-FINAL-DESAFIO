# 🧠 Desafio DevSecOps — Gerenciador de Tarefas

## 📖 Sobre o Projeto
Este repositório faz parte do desafio prático do módulo de **DevSecOps da ADA Tech**.  
O sistema é um **Gerenciador de Tarefas** que permite criar, editar e excluir tarefas.  
O objetivo foi implementar uma pipeline de segurança completa e corrigir vulnerabilidades propositais.

---

## 📌 Estado Atual
A pipeline foi concluída com sucesso ✅  
Todos os steps de segurança foram implementados e o deploy em produção está ativo.

---

## 🎯 Missão
- Implementar os steps de segurança no `pipeline.yml`.  
- Fazer a pipeline quebrar ao detectar problemas.  
- Corrigir as vulnerabilidades encontradas.  
- Garantir que a pipeline passe com tudo verde.  
- Documentar o funcionamento da pipeline neste README.  

---

## ⚙️ O que foi implementado
- **Secrets Scanning com Gitleaks** → detecta credenciais expostas.  
- **SAST com Semgrep** → análise estática de segurança no código.  
- **SCA com Grype** → valida dependências e bibliotecas contra vulnerabilidades conhecidas.  
- **Deploy com GitHub Pages** → publicação automática da aplicação em produção.  

---

## 🔐 Como a pipeline funciona
1. **Checkout** – baixa o código do repositório.  
2. **Build** – verifica a estrutura e integridade dos arquivos.  
3. **Gitleaks** – escaneia segredos expostos.  
4. **Semgrep (SAST)** – aplica regras de segurança no código-fonte.  
5. **Grype (SCA)** – analisa dependências e bibliotecas vulneráveis.  
6. **Deploy** – publica automaticamente no GitHub Pages, somente se todos os steps anteriores passarem.  

---

## 🌐 URL de Produção
A aplicação está disponível em:  
👉 [https://sand-smac.github.io/PROJETO-FINAL-DESAFIO](https://sand-smac.github.io/PROJETO-FINAL-DESAFIO)

---

## ✅ Testes em Produção
- Criar tarefas.  
- Editar tarefas.  
- Excluir tarefas.  
- Validar persistência e funcionamento em diferentes navegadores.  

---

## 📚 O que aprendi com este desafio
Durante o desenvolvimento deste projeto, aprendi a importância de integrar segurança em todas as etapas do ciclo de vida de software.  
- Entendi como **Gitleaks** ajuda a proteger contra exposição de segredos.  
- Compreendi como o **Semgrep** aplica regras de segurança diretamente no código.  
- Vi na prática como o **Grype** identifica dependências vulneráveis e força correções antes do deploy.  
- Aprendi a estruturar uma **pipeline CI/CD completa**, garantindo que só código seguro chegue à produção.  
- Ganhei experiência em **documentar e validar aplicações em produção**, reforçando boas práticas de DevSecOps.  

Esse aprendizado me mostrou que segurança não é um passo isolado, mas sim parte essencial do processo de desenvolvimento.  

---

## 👩‍💻 Autora
**Sandra Nmariza Alves Cardoso**  
Projeto desenvolvido como parte do desafio **ADA Tech • DevSecOps**.
