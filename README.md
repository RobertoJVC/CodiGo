# Primer dia con Git/Github

Lista de comandos de Git

* Para poder ver la version de Git
```bash
git --version
```

* Para configurar el correo
```bash
git config --global user.email "email@domain.com"
```

* Para configurar el usuario
```bash
git config --global user.name "username"
```

* Para poder empezar a usar el control de versiones en carpeta
    * solo una vez por carpeta de proyecto
```bash
git init
```

* Para ver el status de nuestros cambios
```bash
git status
```

* Agrega los archivos a la memoria de la pc
```bash
git add .
```

* Crea el registro de los cambios realizados
```bash
git commit -m "comentario"
```

* Poder ver historial de commit
```bash
git log
```

[x] git log retorna un ´id´ mediante el cual con un comando se muestra el detalle del ultimo commit

```bash
git show 'id de commit en log'
```

* Cambiar el (master) del git a (main)
```bash
git branch -M main
```

* Enlazar el origen del URL
```bash
git remote add origin "URL"
```

* Cambiar el origen del repo
```bash
git remote set-url origin  "url"
```

* Enlazar al repositorio en GitHub
```bash
git push origin main
```

* Clonar de repositorio en GitHub
```bash
git clone https://github.com/RobertoJVC/CodiGo.git
```
* Cargar cambios a repositorio de GitHub de un usuario
```bash
git push
```
* Traer cambios a repositorio de GitHub de otro usuario
```bash
git pull https://github.com/RobertoJVC/CodiGo.git main
```

xyz