# Controlo de Pressão ARICAs

App para controlo de pressão de ARICAs em ocorrências, com login e sincronização entre dispositivos via Firebase (Firestore).

© Prazeres · nprazeres2@gmail.com

## Ficheiros

- `index.html`: a app
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`: permitem instalar a app no tablet/telemóvel e abri-la sem rede
- `firestore.rules.txt`: regras a acrescentar no Firestore

## Configuração

1. Em `index.html`, cole o `firebaseConfig` do projeto em `FIREBASE_CONFIG` (início do segundo bloco `<script>`).
2. Consola Firebase > Authentication > Sign-in method: ative **Email/Password**.
3. Consola Firebase > Authentication > Users > Add user:
   - Email: `ahbvf@aricas-ahbvf.app`
   - Password: a palavra-passe do utilizador AHBVF
4. Consola Firebase > Firestore Database > Regras: acrescente os blocos de `firestore.rules.txt`.
5. GitHub: Settings > Pages > Deploy from a branch > `main` / `(root)`.

## Login

Utilizador: `AHBVF`. A palavra-passe não está escrita no código (só o seu resumo SHA-256).
A sessão fica guardada no dispositivo até carregar em "Terminar sessão".
O primeiro login em cada dispositivo deve ser feito com rede para ligar ao Firebase.

Para mudar a palavra-passe: altere-a em Authentication > Users e atualize `PASS_SHA256` em `index.html`
com o resumo SHA-256 da nova palavra-passe.

Os dados ficam nas coleções `aricas_ocorrencias` e `aricas_config`.
