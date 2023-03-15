# GIT 

## Les prérequis : 
- Installer git sur le site `git-scm.com`
- Savoir si git est installer `git --version`
- Bosser en <strong>ligne de commande</strong >
- Utiliser VI pour faire les commits 

## C'est quoi ? 
- Sauvegarde des codes de manière instantanée : retourner à la version voulu :: snapchot

## Commande : 
- `git-init` => créer un repo 
- `rm -rf .git/` ==> supprimer le repo 
- Créer un README.MD
- `git status` ==> savoir si on a save ou pas les fichiers 
- `git add .` ou `git add *` pour ajouter tous les fichiers dans le repo  : ajouter 
- `git commit -m "First Commit"`==> envoyer un message pour le commit : persister
- `git push origin main`==> push sur gitHub les fichiers

## Comment faire ? 
- Créer un repo sur Git-Hub 
- Push un repo existant sur notre pc : 
``` 
git remote add origin https://github.com/M4XGO/JS_API_FETCH.git
git branch -M main
git push -u origin main
```
- Aller dans les paramètres : clefs ssh 
    - Créer une nouvelle clef SSH 
    - Coller la clef dans le terminal (clef ssh)
    - Faire entrer entrer
- Aller chercher la clef ssh dans le dossier ~/.ssh 
    - Copier coller la clef dans `add a new key` dans Git-Hub
- Connexion à Git-Hub : `$ git remote add origin leLienCopié(du repo sur gitHub`
    - `$ git remote -v ` à faire avant le push