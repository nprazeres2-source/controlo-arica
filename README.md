# Controlo de Pressão ARICAs

App para controlo de pressão de ARICAs em ocorrências, com sincronização entre dispositivos via Firebase (Firestore) por código de equipa.

© Prazeres · nprazeres2@gmail.com

## Ficheiros

- `index.html`: a app
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`: permitem instalar a app no tablet/telemóvel e abri-la sem rede
- `firestore.rules.txt`: regras a acrescentar no Firestore

## Configuração

1. Em `index.html`, cole o `firebaseConfig` do projeto em `FIREBASE_CONFIG` (início do segundo bloco `<script>`).
2. Consola Firebase > Firestore Database > Regras: acrescente os blocos de `firestore.rules.txt`.
3. GitHub: Settings > Pages > Deploy from a branch > `main` / `(root)`.

## Código de equipa

- No primeiro dispositivo: botão "Sincronização" > "Gerar código" > "Ligar".
- Nos restantes dispositivos: "Sincronização" > escrever o mesmo código > "Ligar".
- Sem código, a app funciona normalmente mas os registos ficam só no dispositivo.
- O código funciona como chave de acesso: partilhe-o apenas com quem deve ter acesso.

Os dados ficam em `aricas_equipas/<código>/ocorrencias` e `aricas_equipas/<código>/config/nomes`.
