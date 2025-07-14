# 🌱 Biocrio - Sistema de Control de Incubadora/Invernadero

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-purple.svg)](https://socket.io/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 Descripción del Proyecto

Biocrio es un sistema de control y monitoreo para incubadoras/invernaderos inteligentes que permite gestionar proyectos de cultivo con parámetros ambientales específicos. El sistema proporciona control en tiempo real de variables como temperatura, humedad, CO₂, oxígeno e intensidad lumínica a través de una interfaz web moderna y comunicación WebSocket.

## 🎯 Objetivo

Desarrollar una plataforma integral que permita:

- **Gestión de Proyectos**: Crear y configurar proyectos de cultivo con parámetros ambientales personalizados
- **Control en Tiempo Real**: Monitorear y ajustar condiciones ambientales mediante comunicación WebSocket
- **Visualización de Datos**: Dashboard interactivo con gráficos históricos y métricas en tiempo real
- **Hardware Integration**: Comunicación bidireccional con ESP32 para control de sensores y actuadores
- **Sistema de Alertas**: Notificaciones automáticas cuando los parámetros salen de los rangos establecidos

## 🏗️ Arquitectura del Sistema
<img width="1600" height="1076" alt="imagen" src="https://github.com/user-attachments/assets/e7e4204c-682c-4ce8-91d8-243fe5bad5c5" />

## ✨ Características Principales

### 🔧 Gestión de Proyectos
- Crear, editar y eliminar proyectos de cultivo
- Configuración de rangos para múltiples variables ambientales
- Estados de proyecto (Inactivo, Activo, Completado)
- Historial de cambios de configuración

### 📊 Variables Controladas
- **Temperatura** (°C)
- **Humedad** (%)
- **Nivel de CO₂** (ppm)
- **Nivel de Oxígeno** (%)
- **Intensidad Lumínica** (lux)

### 🌐 Comunicación en Tiempo Real
- WebSocket para comunicación bidireccional
- Envío de comandos a ESP32
- Recepción de datos de sensores
- Notificaciones push a clientes web

### 📈 Monitoreo y Visualización
- Dashboard en tiempo real
- Gráficos históricos interactivos
- Sistema de alertas configurable
- Exportación de datos

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js >= 18.x
- npm >= 9.x
- TypeScript >= 5.x

### Configuración del entorno

```bash
# Clonar el repositorio
git clone https://github.com/DavidOlivero/biocrio-backend
cd biocrio-backend

# Instalar dependencias

npm install

# Iniciar el servidor

# Desarrollo
npm run start:dev

# Producción
npm run start:build
```

## Estructura del proyecto
```bash
📁 Estructura del Proyecto
src/
├── application/           # Casos de uso y lógica de negocio
│   └── use-cases/
│       └── websocket/
├── config/               # Configuración del servidor
├── domain/               # Entidades y repositorios (dominio)
│   └── repositories/
├── infrastructure/       # Implementaciones y detalles técnicos
│   ├── database/
│   │   └── websocket/
│   └── web/
│       ├── controllers/
│       └── routes/
└── index.ts             # Punto de entrada
```

## 🔌 API Endpoints

**WebSocket**
- Conexión: POST /websocket/set-conection
- Enviar Datos: POST /websocket/send-data

**Eventos WebSocket**
- message: Datos de sensores y comandos
- connect: Confirmación de conexión
- disconnect: Notificación de desconexión

**Dominio del servidor:** https://biocrio.onrender.com/


## 🛠️ Tecnologías Utilizadas

Backend: Node.js + TypeScript
Comunicación: Socket.IO
Arquitectura: Clean Architecture / Hexagonal
HTTP Server: Express.js

📋 Roadmap de Desarrollo

✅ Fase 1: Base del Sistema (Actual)
- Estructura básica del proyecto
- Comunicación WebSocket
- Arquitectura hexagonal
- Endpoints básicos

🚧 Fase 2: Gestión de Proyectos
- CRUD de proyectos
- Configuración de parámetros ambientales
- Estados de proyecto
- Base de datos

📅 Fase 3: Hardware Integration
- Protocolo de comunicación ESP32
- Comandos de control
- Recepción de datos de sensores
- Manejo de errores de hardware

📈 Fase 4: Dashboard y Visualización
- Dashboard en tiempo real
- Gráficos históricos
- Sistema de alertas
- Exportación de datos

🔐 Fase 5: Seguridad y Escalabilidad
- Autenticación y autorización
- Multi-usuario
- Soporte multi-incubadora
- Optimización de performance

## 🧪 Testing
```bash
# Ejecutar tests
npm run start:test
```

## 📖 Documentación Adicional

- Epic Stories y Requerimientos
- Protocolo ESP32
- API Documentation (próximamente)
- Frontend Integration (próximamente)

## 🤝 Contribución

- Fork el proyecto
- Crear una rama para tu feature 
  - **Para nuevas funcionalidades:** git checkout -b feature/ticket-link-mensaje-con-el-detalle-de-la-funcionalidad. 
  - **Para resolver bugs:** git checkout -b bugfix/ticket-link-mensaje-con-el-detalle-del-bug.
  - **Para hotfix rápidos:** git checkout -b hotfix/ticket-link-mensaje-con-el-detalle-del-hotfix.
- Commit tus cambios (git commit -m '[ticket-link] - Add some AmazingFeature')
- Push a la rama (git push origin feature/ticket-link-AmazingFeature)
- Abrir un Pull Request

**Nota:** El ticket-link va a ser el número de la tarea para el caso de los integrantes del proyecto. De lo contrario usar [no-ticket].

## 📝 Licencia
Este proyecto está bajo la Licencia MIT.

## 📞 Contacto
- Autor: David Olivero
- Email: deoliverod@unadvirtual.edu.co
- Proyecto: https://github.com/DavidOlivero/biocrio

## 🙏 Agradecimientos

- Comunidad de Socket.IO
- Node.js Community
- TypeScript Team


Estado del Proyecto: 🚧 En desarrollo activo

Última actualización: Julio 2025
