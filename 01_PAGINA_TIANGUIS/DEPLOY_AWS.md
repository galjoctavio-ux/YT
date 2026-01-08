# Despliegue: Tianguis Cultural en AWS Ubuntu con HTTPS

## Prerequisitos
- VM Ubuntu en AWS con acceso SSH
- Dominio `tianguis.cultural.tesivil.com` apuntando a la IP de la VM
- Puerto 80 y 443 abiertos en Security Group

---

## Paso 1: Preparar archivos para transferir

En tu PC local (PowerShell), comprime los archivos:

```powershell
# En PowerShell, crear ZIP del proyecto
cd c:\VMV\VMV
Compress-Archive -Path "Pagina_web_tianguis\*" -DestinationPath "tianguis_web.zip" -Force
```

---

## Paso 2: Transferir archivos a la VM

```powershell
# Reemplaza "tu-key.pem" con tu archivo de clave SSH y la IP de tu VM
scp -i "C:\ruta\tu-key.pem" tianguis_web.zip ubuntu@TU_IP_VM:~/
```

---

## Paso 3: Conectar a la VM por SSH

```powershell
ssh -i "C:\ruta\tu-key.pem" ubuntu@TU_IP_VM
```

---

## Paso 4: Instalar dependencias en la VM

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Nginx
sudo apt install nginx unzip -y

# Instalar Certbot para HTTPS
sudo apt install certbot python3-certbot-nginx -y
```

---

## Paso 5: Configurar el sitio web

```bash
# Crear directorio del sitio
sudo mkdir -p /var/www/tianguis.cultural.tesivil.com

# Descomprimir archivos
cd ~
unzip tianguis_web.zip -d tianguis_temp
sudo cp -r tianguis_temp/* /var/www/tianguis.cultural.tesivil.com/
rm -rf tianguis_temp tianguis_web.zip

# Permisos correctos
sudo chown -R www-data:www-data /var/www/tianguis.cultural.tesivil.com
sudo chmod -R 755 /var/www/tianguis.cultural.tesivil.com
```

---

## Paso 6: Configurar Nginx

```bash
# Crear configuración del sitio
sudo nano /etc/nginx/sites-available/tianguis.cultural.tesivil.com
```

Pega este contenido:

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name tianguis.cultural.tesivil.com;
    root /var/www/tianguis.cultural.tesivil.com;
    index index.html;

    # Logs
    access_log /var/log/nginx/tianguis_access.log;
    error_log /var/log/nginx/tianguis_error.log;

    # Servir archivos estáticos
    location / {
        try_files $uri $uri/ =404;
    }

    # Cache para assets estáticos
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Seguridad básica
    location ~ /\. {
        deny all;
    }
}
```

Guarda con `Ctrl+O`, `Enter`, `Ctrl+X`.

---

## Paso 7: Activar el sitio

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/tianguis.cultural.tesivil.com /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## Paso 8: Configurar HTTPS con Certbot

```bash
# Obtener certificado SSL
sudo certbot --nginx -d tianguis.cultural.tesivil.com

# Seguir las instrucciones:
# - Ingresar email
# - Aceptar términos
# - Elegir redirigir HTTP a HTTPS (opción 2)
```

---

## Paso 9: Verificar renovación automática

```bash
# Probar renovación
sudo certbot renew --dry-run
```

---

## Paso 10: Verificar despliegue

Visita en tu navegador:
- https://tianguis.cultural.tesivil.com

---

## Comandos útiles

```bash
# Ver logs de Nginx
sudo tail -f /var/log/nginx/tianguis_access.log
sudo tail -f /var/log/nginx/tianguis_error.log

# Reiniciar Nginx
sudo systemctl restart nginx

# Ver estado de Nginx
sudo systemctl status nginx

# Renovar certificado manualmente
sudo certbot renew
```

---

## Solución de problemas

| Problema | Solución |
|----------|----------|
| Error 502 | `sudo systemctl restart nginx` |
| Certificado no funciona | Verificar que el dominio apunte a la IP correcta |
| Permisos denegados | `sudo chown -R www-data:www-data /var/www/tianguis.cultural.tesivil.com` |
| Puerto bloqueado | Verificar Security Group en AWS (puertos 80, 443) |
