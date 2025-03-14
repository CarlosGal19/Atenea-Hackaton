# Atenea Iris Hackaton Virtual

Este es el proyecto **ATENEA Iris CiberSeguridad**, desarrollado por [Carlos Galindo](https://github.com/CarlosGal19), [Jorge Fraidez](https://github.com/Jorge-Fraidez), [Sofia Campos](https://github.com/SofiaCamposH), [Maricruz Torres](https://github.com/Maricruz1900) y [Fernanda Rodríguez](https://github.com/Mafer-Rodriguez) para el Hackathon Virtual. Este repositorio contiene el código fuente de las aplicaciones desarrolladas en **React Native y React**, así
como de los canisters de **Motoko y RUST**.

## Requisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Git](https://git-scm.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [DFX](https://internetcomputer.org/docs/current/developer-docs/getting-started/install/) (version 24)

## Probar proyecto desplegado en Mainet

El canister de Motoko (backend) y el dashboard de react ya se encuentran en Mainet

- [Backend](https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=fvkqz-2qaaa-aaaap-akphq-cai)
- [Frontend](https://hix6r-jyaaa-aaaap-akpia-cai.icp0.io/)
- Para desplegar la aplicación de React Native y crear reportes desde la App:

1.- Clonar el repositorio
   
   ```bash
   git clone https://github.com/CarlosGal19/Atenea-Hackaton
   ```
2.- Navega a la carpeta de React Native

   ```bash
  cd Atene-Hackaton/src/react-native-app
   ```

2.- Instala las dependencias locales

   ```bash
  npm install
   ```

3.- Corre el proyecto

   ```bash
  npx expo start
   ```

## Clonar el Repositorio

Para clonar este repositorio, sigue estos pasos:

1. Abre tu terminal o línea de comandos.
2. Ejecuta el siguiente comando:

   ```bash
   git clone https://github.com/CarlosGal19/Atenea-Hackaton

3. Navega a la carpeta generada

   ```bash
   cd MetisHackaton

3. Instala las dependencias globales

   ```bash
   npm install

4. Crea el servidor local con tunnel para acceder desde el móvil

   ```bash
   npm run tunnel:start
   ```
   Vas a obtener una salida como:
   ```bash
   > tunnel:start
   > npx --yes tsx ./src/tunnel/src/index.ts

   https://rotten-onions-yawn.loca.lt

6. Abre otra terminal, navega a internet_identity_middleware e instala las dependencias locales

   ```bash
   cd src/internet_identity_middleware
   npm install

7. Navega a la carpeta react-dashboard e instala las dependencias y declaraciones locales

   ```bash
   cd ../react-dashboard
   npm install
   dfx generate backend qr

8. Navega a la carpeta react-native-app e instala las dependencias locales

   ```bash
   cd ../react-native-app
   npm install
   dfx generate backend qrcode

9. Navega a la raíz del proyecto e inicia la réplica de dfx

    ```bash
    cd ../../
    dfx start --background --clean

10. Obten el id del canister backend, internet_identity, internet_identity_middleware y qrcode

    ```bash
    dfx canister id backend
    dfx canister id internet_identity
    dfx canister id internet_identity_middleware

   Los IDs serán mostrados en el orden de ejecución

11. Navega a interner_identity_middleware, crea un archivo .env

   ```bash
   cd src/interner_identity
   touch .env
   ```
   Añade lo siguiente
  ```bash
   VITE_INTERNET_IDENTITY_URL="TU_URL_DE_TUNNEL/?canisterId=INTERNET_IDENTITY_CANISTER_ID"
   ```

12. Navega a react-dashboard y crea un archivo .env

   ```bash
   cd ../react-dashboard
   touch .env
   ```
   Añade lo siguiente
  ```bash
   VITE_CANISTER_ID_BACKEND='BACKEND_CANISTER_ID'
   VITE_CANISTER_ID_QRCODE='QRCODE_CANISTER_ID'
   VITE_REACT_APP_INTERNET_COMPUTER_PROVIDER='INTERNET_IDENTITY_CANISTER_ID.localhost:4943/'
  ```

13. Navega a react-native-app y crea un archivo .env

   ```bash
   cd ../react-native-app
   touch .env
   ```
   Añade lo siguiente
  ```bash
   EXPO_PUBLIC_IC_HOST_URL="TU_URL_DE_TUNNEL"
   EXPO_PUBLIC_INTERNET_IDENTITY_MIDDLEWARE_URL='TU_URL_DE_TUNNEL/?canisterId=INTERNET_IDENTITY_MIDDLEWARE_CANISTER_ID'
   EXPO_PUBLIC_APP_LINK="exp://173.16.16.49:8081" (o url generada por expo)
   DFX_NETWORK="local"
   BACKEND_CANISTER_ID="BACKEND_CANISTER_ID",
   QRCODE_CANISTER_ID="QRCODE_CANISTER_ID"
   ```

14. Vuelve a la raíz del proyecto y despliega el proyecto

    ```bash
    cd ../..
    dfx deploy

15. Navega a react-native-app y corre la app

    ```bash
    npx expo start

## Propuesta de Valor:

Nuestra propuesta de valor radica en ofrecer transparencia, trazabilidad e inmutabilidad en la elaboración de reportes policiales, además de optimizar el tiempo dedicado a esta tarea. Nuestro sistema facilita la obtención de estadísticas precisas y actualizadas, brindando una valiosa herramienta para la toma de decisiones estratégicas en materia de seguridad pública.

## Público Objetivo:

Nuestro público objetivo se compone de diversas corporaciones policiales, incluyendo policías municipales, estatales y federales, así como empresas privadas del sector de seguridad.

## Relación con los Clientes:

Mantendremos una estrecha relación con nuestros clientes a través de un servicio de atención al cliente personalizado y un foro de soporte técnico. Nuestro objetivo es garantizar la satisfacción total de nuestros usuarios y brindarles asistencia en todo momento.

## Fuentes de Ingreso:

Nuestras principales fuentes de ingreso serán la venta de licencias de uso de nuestro sistema y el desarrollo de soluciones a la medida para satisfacer las necesidades específicas de cada cliente. Asimismo, exploraremos oportunidades de financiamiento a través de donaciones.

## Recursos Clave:

Nuestros recursos clave incluyen el talento humano especializado en tecnología y seguridad, la infraestructura tecnológica necesaria para el desarrollo y operación del sistema, y los recursos financieros para llevar a cabo nuestras actividades.

## Socios Clave:

Para garantizar la implementación exitosa de nuestra solución, estableceremos alianzas estratégicas con corporaciones policiales a nivel municipal, estatal y federal. Además, exploraremos la posibilidad de colaborar con compañías telefónicas para desarrollar planes que integren el uso de nuestro sistema y optimicen la comunicación y el intercambio de información.
