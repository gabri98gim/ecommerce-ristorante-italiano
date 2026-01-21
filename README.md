# 🇮🇹 Il Pasticcio - E-commerce Ristorante

¡Benvenuto! 👋 **Il Pasticcio** es una moderna aplicación web de e-commerce diseñada para un restaurante italiano de alta cocina. Este proyecto ofrece una experiencia de usuario fluida y atractiva, permitiendo a los clientes explorar el menú, gestionar su carrito de compras y realizar pedidos con estilo.

![Banner](https://via.placeholder.com/1200x400?text=Il+Pasticcio+Banner) *Use una imagen de banner real aquí*

## ✨ Características Principales

*   **🛒 Carrito de Compras Inteligente:** Gestión de pedidos en tiempo real con cálculos automáticos.
*   **❤️ Sistema de Favoritos:** Guarda tus platos preferidos para pedirlos rápidamente después.
*   **🌓 Modo Oscuro/Claro:** Interfaz adaptable a las preferencias del usuario (ThemeContext).
*   **🔐 Autenticación Segura:** Registro e inicio de sesión de usuarios con protección de rutas.
*   **🎨 Animaciones Suaves:** Experiencia inmersiva impulsada por **GSAP**.
*   **📱 Diseño Totalmente Responsivo:** Optimizado para móviles, tablets y escritorio.
*   **🍕 Menú Interactivo:** Exploración detallada de platos con `PizzaCard` y vistas de detalle.
*   **🔔 Notificaciones:** Feedback instantáneo al usuario con `react-hot-toast`.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido con un stack moderno para asegurar rendimiento y escalabilidad:

*   **Frontend Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animaciones:** [GSAP](https://greensock.com/gsap/)
*   **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Notificaciones:** React Hot Toast
*   **Gestión de Estado:** Context API (Auth, Cart, Favorites, Theme)

## 🚀 Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu máquina local:

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/gabri98gim/ecommerce-ristorante-italiano.git
    cd ecommerce-ristorante-italiano
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador**
    Visita `http://localhost:5173` para ver la aplicación.

## 📂 Estructura del Proyecto

```text
src/
├── components/      # Componentes reutilizables (PizzaCard, Footer, etc.)
├── context/         # Estados globales (Auth, Cart, Theme, Favorites)
├── data/            # Datos estáticos del menú
├── pages/           # Vistas principales (Inicio, Menu, Contacto, Login, etc.)
└── assets/          # Imágenes y recursos estáticos
```

## 📸 Capturas de Pantalla

| Inicio | Menú | Carrito |
|:---:|:---:|:---:|
| ![Inicio](https://via.placeholder.com/300x200?text=Inicio) | ![Menu](https://via.placeholder.com/300x200?text=Menu) | ![Carrito](https://via.placeholder.com/300x200?text=Carrito) |

> *Nota: Reemplaza las imágenes de marcador de posición con capturas reales de tu aplicación.*

## 📞 Contacto

Desarrollado con ❤️ para los amantes de la pizza.

---

*Buon appetito!* 🍝
