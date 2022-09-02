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