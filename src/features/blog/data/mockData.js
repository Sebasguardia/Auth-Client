// src/features/blog/data/mockData.js
export const mockPosts = [
  {
    id: 1,
    title: "Introducción a React Hooks: useState y useEffect",
    excerpt: "Aprende cómo usar los hooks más importantes de React para manejar estado y efectos secundarios en tus componentes funcionales.",
    body: {
      introduction: "Los React Hooks han revolucionado la forma en que escribimos componentes en React. En este artículo, exploraremos en profundidad los dos hooks más fundamentales: useState y useEffect.",
      sections: [
        {
          title: "¿Qué son los Hooks?",
          content: "Los Hooks son funciones que te permiten 'enganchar' el estado de React y el ciclo de vida desde componentes funcionales. Fueron introducidos en React 16.8 y han cambiado completamente cómo desarrollamos aplicaciones React.",
          type: "text"
        },
        {
          title: "useState: Manejo de Estado",
          content: "El hook useState nos permite agregar estado a nuestros componentes funcionales.",
          type: "code",
          code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
        },
        {
          title: "useEffect: Efectos Secundarios",
          content: "El hook useEffect nos permite ejecutar efectos secundarios en componentes funcionales.",
          type: "code",
          code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  return <div>{user ? user.name : 'Loading...'}</div>;
}`
        }
      ],
      conclusion: "Los hooks han hecho que React sea más accesible y fácil de entender. En próximos artículos, exploraremos hooks más avanzados como useContext y useReducer."
    },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    category: "react",
    tags: ["react", "hooks", "javascript", "frontend"],
    author: "María González",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    readTime: 8,
    publishedDate: "2024-01-15",
    likes: 142,
    comments: 23,
    featured: true,
    difficulty: "beginner",
    popularity: 95,
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    title: "TypeScript en Proyectos React: Guía Completa",
    excerpt: "Descubre cómo TypeScript puede mejorar tu experiencia de desarrollo en React con tipado estático y mejores prácticas.",
    body: {
      introduction: "TypeScript se ha convertido en el estándar para el desarrollo de aplicaciones React a escala empresarial. En esta guía completa, cubriremos desde la configuración básica hasta patrones avanzados.",
      sections: [
        {
          title: "Configuración Inicial",
          content: "Para empezar con TypeScript en React, necesitas configurar tu proyecto:",
          type: "code",
          code: `npx create-react-app my-app --template typescript
# o
npx create-next-app@latest --typescript`
        },
        {
          title: "Tipado de Componentes",
          content: "Uno de los mayores beneficios de TypeScript es el tipado de props:",
          type: "code",
          code: `interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};`
        }
      ],
      conclusion: "TypeScript no solo detecta errores en tiempo de compilación, sino que también mejora la experiencia de desarrollo con autocompletado inteligente."
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "typescript",
    tags: ["typescript", "react", "javascript", "webdev"],
    author: "Carlos Rodríguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    readTime: 12,
    publishedDate: "2024-01-12",
    likes: 89,
    comments: 15,
    featured: true,
    difficulty: "intermediate",
    popularity: 87,
    lastUpdated: "2024-01-12"
  },
  {
    id: 3,
    title: "Tailwind CSS: Diseño Moderno y Rápido",
    excerpt: "Aprende a usar Tailwind CSS para crear interfaces modernas y responsivas sin escribir CSS personalizado.",
    body: {
      introduction: "Tailwind CSS es un framework de CSS utility-first que ha ganado popularidad por su enfoque práctico y altamente personalizable.",
      sections: [
        {
          title: "Ventajas de Tailwind CSS",
          content: "- Desarrollo rápido: No necesitas cambiar entre archivos\n- Diseño consistente: Utiliza un sistema de diseño unificado\n- Personalizable: Configura fácilmente colores, espaciados, etc.",
          type: "text"
        },
        {
          title: "Ejemplo Práctico",
          content: "Aquí tienes un ejemplo de cómo usar Tailwind CSS:",
          type: "code",
          code: `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img.jpg" alt="Modern building">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>`
        }
      ],
      conclusion: "Tailwind CSS es especialmente poderoso cuando se combina con React, permitiendo un desarrollo de UI extremadamente rápido."
    },
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
    category: "css",
    tags: ["tailwind", "css", "frontend", "design"],
    author: "Ana López",
    authorAvatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
    readTime: 6,
    publishedDate: "2024-01-10",
    likes: 156,
    comments: 28,
    featured: false,
    difficulty: "beginner",
    popularity: 92,
    lastUpdated: "2024-01-10"
  },
  {
    id: 4,
    title: "Node.js y Express: Construyendo APIs RESTful",
    excerpt: "Guía completa para crear APIs RESTful escalables con Node.js y Express, incluyendo mejores prácticas y seguridad.",
    body: {
      introduction: "Node.js combinado con Express.js es la stack perfecta para construir APIs RESTful rápidas y escalables.",
      sections: [
        {
          title: "Estructura del Proyecto",
          content: "Una buena estructura es clave para mantener el código organizado:",
          type: "code",
          code: `src/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── app.js`
        },
        {
          title: "Ejemplo de API Básica",
          content: "Aquí tienes un ejemplo básico de una API con Express:",
          type: "code",
          code: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
        }
      ],
      conclusion: "Node.js permite construir APIs rápidas y eficientes que pueden manejar miles de peticiones concurrentes."
    },
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
    category: "backend",
    tags: ["nodejs", "express", "api", "backend", "javascript"],
    author: "David Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    readTime: 10,
    publishedDate: "2024-01-08",
    likes: 78,
    comments: 12,
    featured: true,
    difficulty: "intermediate",
    popularity: 76,
    lastUpdated: "2024-01-08"
  },
  {
    id: 5,
    title: "Vue.js 3: Composition API vs Options API",
    excerpt: "Comparativa detallada entre la Composition API y Options API en Vue.js 3, con ejemplos prácticos y casos de uso.",
    body: {
      introduction: "Vue.js 3 introdujo la Composition API como una alternativa a la tradicional Options API. Ambas tienen sus ventajas y casos de uso específicos.",
      sections: [
        {
          title: "Options API: El Enfoque Clásico",
          content: "La Options API organiza el código por opciones:",
          type: "code",
          code: `<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>`
        },
        {
          title: "Composition API: El Nuevo Enfoque",
          content: "La Composition API organiza el código por funcionalidad:",
          type: "code",
          code: `<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>`
        }
      ],
      conclusion: "Ambas APIs son totalmente válidas y puedes incluso mezclarlas en el mismo proyecto."
    },
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
    category: "vue",
    tags: ["vue", "composition-api", "javascript", "frontend"],
    author: "Laura Martínez",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    readTime: 9,
    publishedDate: "2024-01-05",
    likes: 94,
    comments: 18,
    featured: false,
    difficulty: "advanced",
    popularity: 89,
    lastUpdated: "2024-01-05"
  },
  {
    id: 6,
    title: "Python con Django: Desarrollo Web Full-Stack",
    excerpt: "Aprende a construir aplicaciones web completas con Django, el framework web de Python para perfeccionistas con fechas límite.",
    body: {
      introduction: "Django es un framework web de alto nivel que permite desarrollar aplicaciones web rápidamente y con menos código.",
      sections: [
        {
          title: "Filosofía de Django",
          content: "- Rapidez: Desarrolla rápido, despliega más rápido\n- Seguridad: Protección incorporada contra vulnerabilidades comunes\n- Escalabilidad: Maneja tráfico alto sin problemas",
          type: "text"
        },
        {
          title: "Ejemplo de Modelo",
          content: "Creando modelos en Django:",
          type: "code",
          code: `from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title`
        }
      ],
      conclusion: "Django es ideal para proyectos que requieren un backend robusto con administración automática y alta seguridad."
    },
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&h=400&fit=crop",
    category: "python",
    tags: ["python", "django", "backend", "webdev"],
    author: "Miguel Ángel",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    readTime: 11,
    publishedDate: "2024-01-03",
    likes: 67,
    comments: 9,
    featured: false,
    difficulty: "intermediate",
    popularity: 71,
    lastUpdated: "2024-01-03"
  },
  {
    id: 7,
    title: "JavaScript Moderno: ES6+ Features que Debes Conocer",
    excerpt: "Domina las características más importantes de JavaScript moderno desde ES6 hasta las últimas versiones.",
    body: {
      introduction: "JavaScript ha evolucionado enormemente en los últimos años. En este artículo exploraremos las features más importantes de ES6+.",
      sections: [
        {
          title: "Arrow Functions",
          content: "Las arrow functions proporcionan una sintaxis más concisa:",
          type: "code",
          code: `// Traditional function
function multiply(a, b) {
  return a * b;
}

// Arrow function
const multiply = (a, b) => a * b;`
        },
        {
          title: "Destructuring",
          content: "El destructuring permite extraer datos de arrays y objetos:",
          type: "code",
          code: `// Object destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;`
        }
      ],
      conclusion: "Estas features hacen que JavaScript sea más expresivo y fácil de mantener."
    },
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
    category: "javascript",
    tags: ["javascript", "es6", "modern-js", "webdev"],
    author: "Sofia Ramirez",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    readTime: 7,
    publishedDate: "2024-01-18",
    likes: 203,
    comments: 34,
    featured: true,
    difficulty: "beginner",
    popularity: 98,
    lastUpdated: "2024-01-18"
  },
  {
    id: 8,
    title: "GraphQL vs REST: ¿Cuál Elegir en 2024?",
    excerpt: "Análisis completo comparando GraphQL y REST APIs para ayudarte a elegir la mejor opción para tu proyecto.",
    body: {
      introduction: "Tanto GraphQL como REST son arquitecturas populares para construir APIs. En este artículo compararemos sus ventajas y desventajas.",
      sections: [
        {
          title: "Ventajas de REST",
          content: "- Estándar ampliamente adoptado\n- Cacheo simple\n- Fácil de entender y implementar",
          type: "text"
        },
        {
          title: "Ventajas de GraphQL",
          content: "- Solo los datos necesarios\n- Tipado fuerte\n- Documentación automática",
          type: "text"
        },
        {
          title: "Ejemplo GraphQL",
          content: "Consulta específica en GraphQL:",
          type: "code",
          code: `query {
  user(id: "1") {
    name
    email
    posts {
      title
      createdAt
    }
  }
}`
        }
      ],
      conclusion: "La elección depende de tus necesidades específicas: REST para simplicidad, GraphQL para flexibilidad."
    },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    category: "backend",
    tags: ["graphql", "rest", "api", "backend"],
    author: "Alex Thompson",
    authorAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    readTime: 14,
    publishedDate: "2024-01-20",
    likes: 156,
    comments: 27,
    featured: true,
    difficulty: "intermediate",
    popularity: 91,
    lastUpdated: "2024-01-20"
  },
  {
    id: 9,
    title: "Next.js 14: Novedades y Mejores Prácticas",
    excerpt: "Explora las nuevas características de Next.js 14 y aprende las mejores prácticas para aplicaciones de producción.",
    body: {
      introduction: "Next.js 14 trae importantes mejoras en performance y developer experience. Veamos qué hay de nuevo.",
      sections: [
        {
          title: "Server Components por Defecto",
          content: "Ahora todos los componentes son Server Components por defecto:",
          type: "code",
          code: `// Este es un Server Component por defecto
async function UserList() {
  const users = await fetchUsers();
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
        },
        {
          title: "Mejoras en Turbopack",
          content: "Turbopack ahora es más estable y rápido para desarrollo.",
          type: "text"
        }
      ],
      conclusion: "Next.js 14 consolida su posición como el framework React más completo para producción."
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "react",
    tags: ["nextjs", "react", "framework", "frontend"],
    author: "Carlos Rodríguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    readTime: 11,
    publishedDate: "2024-01-22",
    likes: 178,
    comments: 31,
    featured: true,
    difficulty: "intermediate",
    popularity: 94,
    lastUpdated: "2024-01-22"
  },
  {
    id: 10,
    title: "MongoDB para Desarrolladores JavaScript",
    excerpt: "Guía completa para integrar MongoDB con aplicaciones JavaScript usando Mongoose ODM.",
    body: {
      introduction: "MongoDB es una base de datos NoSQL popular entre desarrolladores JavaScript. Aprende a usarla efectivamente.",
      sections: [
        {
          title: "Conectando MongoDB",
          content: "Conexión básica con Mongoose:",
          type: "code",
          code: `const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection error:', error);
  }
};`
        },
        {
          title: "Definiendo Schemas",
          content: "Creando schemas con Mongoose:",
          type: "code",
          code: `const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 }
});`
        }
      ],
      conclusion: "MongoDB ofrece flexibilidad y escalabilidad perfectas para aplicaciones JavaScript modernas."
    },
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
    category: "backend",
    tags: ["mongodb", "database", "javascript", "nodejs"],
    author: "David Chen",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    readTime: 9,
    publishedDate: "2024-01-25",
    likes: 134,
    comments: 19,
    featured: false,
    difficulty: "intermediate",
    popularity: 83,
    lastUpdated: "2024-01-25"
  },
  {
    id: 11,
    title: "Testing en React: Jest y React Testing Library",
    excerpt: "Aprende a escribir tests efectivos para tus componentes React usando las herramientas más populares.",
    body: {
      introduction: "El testing es crucial para mantener aplicaciones React confiables. Conoce Jest y React Testing Library.",
      sections: [
        {
          title: "Configuración Básica",
          content: "Configurando Jest para un proyecto React:",
          type: "code",
          code: `// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};`
        },
        {
          title: "Ejemplo de Test",
          content: "Testeando un componente simple:",
          type: "code",
          code: `import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});`
        }
      ],
      conclusion: "Una suite de tests robusta es tu mejor aliada para refactorizar con confianza."
    },
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    category: "react",
    tags: ["testing", "jest", "react", "quality"],
    author: "María González",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    readTime: 13,
    publishedDate: "2024-01-28",
    likes: 167,
    comments: 22,
    featured: true,
    difficulty: "intermediate",
    popularity: 88,
    lastUpdated: "2024-01-28"
  },
  {
    id: 12,
    title: "Sass vs CSS-in-JS: Enfrentamiento de Estilos",
    excerpt: "Comparativa detallada entre Sass y soluciones CSS-in-JS como Styled Components y Emotion.",
    body: {
      introduction: "La forma de estilizar aplicaciones React ha evolucionado. Analizamos Sass contra CSS-in-JS.",
      sections: [
        {
          title: "Ventajas de Sass",
          content: "- Variables y mixins\n- Anidamiento natural\n- Comunidad madura",
          type: "text"
        },
        {
          title: "Ventajas de CSS-in-JS",
          content: "- Estilos scoped automáticamente\n- Dinámicos con props\n- Mejor developer experience",
          type: "text"
        },
        {
          title: "Ejemplo Styled Components",
          content: "Creando componentes estilizados:",
          type: "code",
          code: `import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? 'blue' : 'white'};
  color: \${props => props.primary ? 'white' : 'blue'};
  padding: 1rem 2rem;
  border: 2px solid blue;
  border-radius: 4px;
\`;`
        }
      ],
      conclusion: "Sass es excelente para proyectos tradicionales, CSS-in-JS para componentes dinámicos y reutilizables."
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    category: "css",
    tags: ["sass", "css-in-js", "styled-components", "styling"],
    author: "Ana López",
    authorAvatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
    readTime: 8,
    publishedDate: "2024-01-30",
    likes: 145,
    comments: 25,
    featured: false,
    difficulty: "beginner",
    popularity: 85,
    lastUpdated: "2024-01-30"
  },
  {
    id: 13,
    title: "Docker para Desarrolladores Frontend",
    excerpt: "Aprende a containerizar tus aplicaciones frontend con Docker para despliegues consistentes.",
    body: {
      introduction: "Docker no es solo para backend. Los desarrolladores frontend también pueden beneficiarse de la containerización.",
      sections: [
        {
          title: "Dockerfile Básico para React",
          content: "Creando un Dockerfile para una app React:",
          type: "code",
          code: `# Multi-stage build
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
        },
        {
          title: "docker-compose.yml",
          content: "Orquestando con docker-compose:",
          type: "code",
          code: `version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production`
        }
      ],
      conclusion: "Docker asegura que tu aplicación se comporte igual en desarrollo, staging y producción."
    },
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    category: "devops",
    tags: ["docker", "containers", "devops", "deployment"],
    author: "Alex Thompson",
    authorAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    readTime: 10,
    publishedDate: "2024-02-02",
    likes: 198,
    comments: 29,
    featured: true,
    difficulty: "intermediate",
    popularity: 90,
    lastUpdated: "2024-02-02"
  },
  {
    id: 14,
    title: "Web Performance: Optimizando tu Aplicación React",
    excerpt: "Técnicas avanzadas para mejorar el performance de tus aplicaciones React y métricas Core Web Vitals.",
    body: {
      introduction: "El performance web es crucial para la experiencia de usuario y SEO. Aprende a optimizar tu React app.",
      sections: [
        {
          title: "Code Splitting",
          content: "Divide tu bundle en chunks más pequeños:",
          type: "code",
          code: `import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`
        },
        {
          title: "Memoización con useMemo y useCallback",
          content: "Evita re-renders innecesarios:",
          type: "code",
          code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`
        }
      ],
      conclusion: "Pequeñas optimizaciones pueden tener un gran impacto en el performance general de tu aplicación."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    category: "react",
    tags: ["performance", "react", "optimization", "web-vitals"],
    author: "Carlos Rodríguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    readTime: 15,
    publishedDate: "2024-02-05",
    likes: 223,
    comments: 37,
    featured: true,
    difficulty: "advanced",
    popularity: 96,
    lastUpdated: "2024-02-05"
  },
  {
    id: 15,
    title: "Git y GitHub: Flujo de Trabajo Profesional",
    excerpt: "Domina Git y GitHub con un flujo de trabajo profesional para proyectos individuales y en equipo.",
    body: {
      introduction: "Un buen flujo de trabajo con Git es esencial para cualquier desarrollador. Aprende las mejores prácticas.",
      sections: [
        {
          title: "Git Flow",
          content: "Estructura de branches recomendada:",
          type: "code",
          code: `main (producción)
develop (integración)
feature/nueva-funcionalidad
hotfix/correccion-urgente
release/version-1.2.0`
        },
        {
          title: "Commits Semánticos",
          content: "Estandariza tus mensajes de commit:",
          type: "code",
          code: `feat: agregar autenticación con Google
fix: corregir bug en cálculo de precios
docs: actualizar README con instrucciones
style: formatear código con prettier
refactor: mejorar estructura del componente User`
        }
      ],
      conclusion: "Un flujo de trabajo consistente con Git mejora la colaboración y la calidad del código."
    },
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
    category: "tools",
    tags: ["git", "github", "version-control", "workflow"],
    author: "Sofia Ramirez",
    authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    readTime: 9,
    publishedDate: "2024-02-08",
    likes: 178,
    comments: 24,
    featured: false,
    difficulty: "beginner",
    popularity: 87,
    lastUpdated: "2024-02-08"
  },
  {
  id: 16,
  title: "Redux Toolkit: La Evolución del Estado Global",
  excerpt: "Descubre cómo Redux Toolkit simplifica la gestión de estado global en React con menos código y mejor DX.",
  body: {
    introduction: "Redux Toolkit (RTK) es la forma recomendada de usar Redux hoy en día. Elimina mucho del boilerplate y agrega mejores prácticas por defecto.",
    sections: [
      {
        title: "Configuración Simplificada",
        content: "Con RTK, la configuración es mucho más simple:",
        type: "code",
        code: `import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})`
      },
      {
        title: "Creando Slices",
        content: "Los slices reducen el código necesario:",
        type: "code",
        code: `import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer`
      }
    ],
    conclusion: "Redux Toolkit hace que Redux sea accesible nuevamente con una experiencia de desarrollo mucho mejor."
  },
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  category: "react",
  tags: ["redux", "react", "state-management", "javascript"],
  author: "María González",
  authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  readTime: 9,
  publishedDate: "2024-02-10",
  likes: 134,
  comments: 18,
  featured: false,
  difficulty: "intermediate",
  popularity: 82,
  lastUpdated: "2024-02-10"
},
{
  id: 17,
  title: "Svelte: El Framework que Compila Away",
  excerpt: "Explora Svelte, el framework que desplaza el trabajo del runtime a la compilación para mejor performance.",
  body: {
    introduction: "Svelte toma un enfoque radicalmente diferente: en lugar de hacer el trabajo en el navegador, lo hace en el paso de compilación.",
    sections: [
      {
        title: "Componente Svelte Simple",
        content: "Así se ve un componente en Svelte:",
        type: "code",
        code: `<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>`
      },
      {
        title: "Reactividad sin Hooks",
        content: "La reactividad es más intuitiva:",
        type: "code",
        code: `<script>
  let numbers = [1, 2, 3];
  
  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }
  
  $: doubled = numbers.map(n => n * 2);
</script>`
      }
    ],
    conclusion: "Svelte ofrece una experiencia de desarrollo más simple y aplicaciones más rápidas."
  },
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  category: "svelte",
  tags: ["svelte", "javascript", "frontend", "framework"],
  author: "Laura Martínez",
  authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  readTime: 8,
  publishedDate: "2024-02-12",
  likes: 167,
  comments: 22,
  featured: true,
  difficulty: "beginner",
  popularity: 85,
  lastUpdated: "2024-02-12"
},
{
  id: 18,
  title: "WebSockets: Comunicación en Tiempo Real",
  excerpt: "Aprende a implementar WebSockets para funcionalidades en tiempo real como chats y notificaciones.",
  body: {
    introduction: "Los WebSockets permiten comunicación bidireccional en tiempo real entre cliente y servidor.",
    sections: [
      {
        title: "Cliente WebSocket",
        content: "Implementación en el lado del cliente:",
        type: "code",
        code: `const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
  socket.send('Hello Server!');
};

socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

socket.onclose = () => {
  console.log('Connection closed');
};`
      },
      {
        title: "Servidor con Node.js",
        content: "Servidor WebSocket básico:",
        type: "code",
        code: `const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Hello Client!');
  });
});`
      }
    ],
    conclusion: "Los WebSockets son esenciales para aplicaciones que requieren actualizaciones en tiempo real."
  },
  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
  category: "backend",
  tags: ["websockets", "nodejs", "realtime", "javascript"],
  author: "David Chen",
  authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  readTime: 11,
  publishedDate: "2024-02-15",
  likes: 98,
  comments: 14,
  featured: false,
  difficulty: "intermediate",
  popularity: 78,
  lastUpdated: "2024-02-15"
},
{
  id: 19,
  title: "CSS Grid vs Flexbox: ¿Cuándo Usar Cada Uno?",
  excerpt: "Guía definitiva para entender las diferencias entre CSS Grid y Flexbox y cuándo aplicar cada tecnología.",
  body: {
    introduction: "Tanto Grid como Flexbox son herramientas poderosas, pero cada una tiene sus casos de uso ideales.",
    sections: [
      {
        title: "Flexbox: Diseño 1D",
        content: "Flexbox es ideal para diseños en una dimensión:",
        type: "code",
        code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
}`
      },
      {
        title: "Grid: Diseño 2D",
        content: "Grid es perfecto para layouts bidimensionales:",
        type: "code",
        code: `.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}`
      }
    ],
    conclusion: "Usa Flexbox para componentes y Grid para layouts generales de página."
  },
  image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  category: "css",
  tags: ["css", "grid", "flexbox", "layout", "frontend"],
  author: "Ana López",
  authorAvatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
  readTime: 7,
  publishedDate: "2024-02-18",
  likes: 201,
  comments: 31,
  featured: true,
  difficulty: "beginner",
  popularity: 91,
  lastUpdated: "2024-02-18"
},
{
  id: 20,
  title: "Deno vs Node.js: El Runtime Moderno",
  excerpt: "Comparativa entre Deno y Node.js, explorando seguridad, TypeScript y el ecosistema de cada uno.",
  body: {
    introduction: "Deno es el nuevo runtime de JavaScript creado por el mismo desarrollador de Node.js, con un enfoque en seguridad y modernidad.",
    sections: [
      {
        title: "Hola Mundo en Deno",
        content: "Deno tiene APIs diferentes a Node.js:",
        type: "code",
        code: `// server.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve((_req) => {
  return new Response("Hello from Deno!");
}, { port: 8000 });`
      },
      {
        title: "Ejecución Segura",
        content: "Deno es seguro por defecto:",
        type: "code",
        code: `# Necesita permiso explícito para red
deno run --allow-net server.ts

# Necesita permiso para leer archivos
deno run --allow-read script.ts`
      }
    ],
    conclusion: "Deno ofrece mejor seguridad y soporte nativo para TypeScript, mientras Node.js tiene un ecosistema más maduro."
  },
  image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
  category: "backend",
  tags: ["deno", "nodejs", "javascript", "typescript", "runtime"],
  author: "Carlos Rodríguez",
  authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  readTime: 10,
  publishedDate: "2024-02-20",
  likes: 145,
  comments: 26,
  featured: true,
  difficulty: "intermediate",
  popularity: 84,
  lastUpdated: "2024-02-20"
},
{
  id: 21,
  title: "React Server Components: El Futuro del Rendering",
  excerpt: "Profundiza en React Server Components y cómo están cambiando la forma de construir aplicaciones React.",
  body: {
    introduction: "Los Server Components permiten renderizar componentes directamente en el servidor, reduciendo el bundle del cliente.",
    sections: [
      {
        title: "Componente Servidor vs Cliente",
        content: "Diferencias clave entre ambos tipos:",
        type: "code",
        code: `// Server Component (no usa hooks)
async function UserList() {
  const users = await db.users.findMany();
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Client Component (usa hooks)
'use client';
function UserProfile() {
  const [user, setUser] = useState(null);
  
  return <div>...</div>;
}`
      }
    ],
    conclusion: "Los Server Components optimizan el performance y abren nuevas posibilidades arquitectónicas."
  },
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  category: "react",
  tags: ["react", "server-components", "nextjs", "performance"],
  author: "María González",
  authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  readTime: 12,
  publishedDate: "2024-02-22",
  likes: 178,
  comments: 29,
  featured: true,
  difficulty: "advanced",
  popularity: 89,
  lastUpdated: "2024-02-22"
},
{
  id: 22,
  title: "Bun: El Runtime JavaScript Ultra-Rápido",
  excerpt: "Conoce Bun, el nuevo runtime que promete ser más rápido que Node.js y Deno, con toolkit integrado.",
  body: {
    introduction: "Bun es un runtime JavaScript/TypeScript todo-en-uno que incluye package manager, bundler y test runner.",
    sections: [
      {
        title: "Instalación y Uso",
        content: "Bun es increíblemente rápido para instalar dependencias:",
        type: "code",
        code: `# Instalar Bun
curl -fsSL https://bun.sh/install | bash

# Instalar dependencias (más rápido que npm)
bun install

# Ejecutar scripts
bun run dev`
      },
      {
        title: "Servidor HTTP con Bun",
        content: "Crear un servidor es muy simple:",
        type: "code",
        code: `// server.js
export default {
  port: 3000,
  fetch(request) {
    return new Response("Hello from Bun!");
  },
};`
      }
    ],
    conclusion: "Bun representa una evolución significativa en el ecosistema JavaScript con un enfoque en velocidad y simplicidad."
  },
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  category: "backend",
  tags: ["bun", "javascript", "runtime", "nodejs", "deno"],
  author: "David Chen",
  authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  readTime: 8,
  publishedDate: "2024-02-25",
  likes: 156,
  comments: 23,
  featured: false,
  difficulty: "intermediate",
  popularity: 87,
  lastUpdated: "2024-02-25"
},
{
  id: 23,
  title: "Angular Signals: Reactividad Simplificada",
  excerpt: "Descubre Signals, la nueva forma de manejar estado reactivo en Angular inspirada en Solid.js.",
  body: {
    introduction: "Angular 16 introdujo Signals, un nuevo sistema de reactividad que es más intuitivo y performante.",
    sections: [
      {
        title: "Creando Signals",
        content: "Los signals son valores reactivos simples:",
        type: "code",
        code: `import { signal, computed } from '@angular/core';

export class CounterComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }
}`
      },
      {
        title: "Usando en Templates",
        content: "Los signals se usan directamente en templates:",
        type: "code",
        code: `<div>
  <p>Count: {{ count() }}</p>
  <p>Double: {{ double() }}</p>
  <button (click)="increment()">Increment</button>
</div>`
      }
    ],
    conclusion: "Signals traen una reactividad más simple y eficiente a Angular, modernizando el framework."
  },
  image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
  category: "angular",
  tags: ["angular", "signals", "reactivity", "typescript"],
  author: "Carlos Rodríguez",
  authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  readTime: 9,
  publishedDate: "2024-02-28",
  likes: 132,
  comments: 19,
  featured: true,
  difficulty: "intermediate",
  popularity: 83,
  lastUpdated: "2024-02-28"
},
{
  id: 24,
  title: "Prisma ORM: Base de Datos Type-Safe",
  excerpt: "Aprende a usar Prisma, el ORM moderno que proporciona un cliente de base de datos type-safe para TypeScript.",
  body: {
    introduction: "Prisma es un ORM next-gen que elimina los problemas tradicionales de los ORMs con un enfoque type-safe.",
    sections: [
      {
        title: "Definiendo el Schema",
        content: "El schema de Prisma es intuitivo y poderoso:",
        type: "code",
        code: `// schema.prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}`
      },
      {
        title: "Consultas Type-Safe",
        content: "Las consultas son completamente type-safe:",
        type: "code",
        code: `// Obtener usuarios con sus posts
const usersWithPosts = await prisma.user.findMany({
  include: {
    posts: true
  }
});

// TypeScript conoce la estructura exacta
usersWithPosts[0].posts[0].title`
      }
    ],
    conclusion: "Prisma combina la productividad de un ORM con la seguridad de tipos de TypeScript."
  },
  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
  category: "backend",
  tags: ["prisma", "orm", "database", "typescript", "nodejs"],
  author: "Ana López",
  authorAvatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
  readTime: 11,
  publishedDate: "2024-03-02",
  likes: 167,
  comments: 25,
  featured: false,
  difficulty: "intermediate",
  popularity: 86,
  lastUpdated: "2024-03-02"
},
{
  id: 25,
  title: "WebAssembly: JavaScript No Es Suficiente",
  excerpt: "Explora WebAssembly (WASM) y cómo permite ejecutar código de alto performance directamente en el navegador.",
  body: {
    introduction: "WebAssembly es un formato binario que permite ejecutar código de lenguajes como C++, Rust y Go en la web con performance nativa.",
    sections: [
      {
        title: "Hola Mundo en WASM",
        content: "Ejemplo básico de WebAssembly:",
        type: "code",
        code: `// Cargar y ejecutar módulo WASM
const wasmCode = new Uint8Array([...]);
const module = await WebAssembly.instantiate(wasmCode);
const result = module.instance.exports.add(2, 3);`
      },
      {
        title: "Rust a WebAssembly",
        content: "Compilar Rust a WASM es sencillo:",
        type: "code",
        code: `// lib.rs
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Compilar con wasm-pack
// wasm-pack build --target web`
      }
    ],
    conclusion: "WebAssembly abre la puerta a aplicaciones web con performance cercana al código nativo."
  },
  image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
  category: "webassembly",
  tags: ["webassembly", "wasm", "rust", "performance", "web"],
  author: "Laura Martínez",
  authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  readTime: 13,
  publishedDate: "2024-03-05",
  likes: 189,
  comments: 32,
  featured: true,
  difficulty: "advanced",
  popularity: 88,
  lastUpdated: "2024-03-05"
}
];

export const mockCategories = [
  { id: 'react', name: 'React', count: 6, colorClass: 'border-blue-400 bg-blue-50 text-blue-600' },
  { id: 'typescript', name: 'TypeScript', count: 1, colorClass: 'border-blue-500 bg-blue-50 text-blue-600' },
  { id: 'css', name: 'CSS', count: 3, colorClass: 'border-blue-400 bg-blue-50 text-blue-600' },
  { id: 'vue', name: 'Vue.js', count: 1, colorClass: 'border-green-400 bg-green-50 text-green-600' },
  { id: 'python', name: 'Python', count: 1, colorClass: 'border-blue-600 bg-blue-50 text-blue-700' },
  { id: 'backend', name: 'Backend', count: 6, colorClass: 'border-gray-600 bg-gray-50 text-gray-700' },
  { id: 'javascript', name: 'JavaScript', count: 2, colorClass: 'border-yellow-400 bg-yellow-50 text-yellow-600' },
  { id: 'devops', name: 'DevOps', count: 1, colorClass: 'border-purple-400 bg-purple-50 text-purple-600' },
  { id: 'tools', name: 'Herramientas', count: 1, colorClass: 'border-orange-400 bg-orange-50 text-orange-600' },
  { id: 'svelte', name: 'Svelte', count: 1, colorClass: 'border-orange-500 bg-orange-50 text-orange-600' },
  { id: 'angular', name: 'Angular', count: 1, colorClass: 'border-red-400 bg-red-50 text-red-600' },
  { id: 'webassembly', name: 'WebAssembly', count: 1, colorClass: 'border-purple-500 bg-purple-50 text-purple-600' }
];

export const mockComments = [
  // Comentarios para el post 1
  {
    id: 1,
    postId: 1,
    author: "Juan Pérez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Excelente artículo! Los hooks realmente cambiaron la forma en que desarrollo con React. ¿Podrías hacer un tutorial sobre useReducer?",
    date: "2024-01-16",
    likes: 5
  },
  {
    id: 2,
    postId: 1,
    author: "Ana García",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "Muy bien explicado. Me gustaría ver más ejemplos de useEffect con cleanup functions.",
    date: "2024-01-16",
    likes: 3
  },
  {
    id: 3,
    postId: 1,
    author: "Carlos López",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "¿Cuándo recomiendas usar useCallback y useMemo? Me gustaría un artículo sobre optimización.",
    date: "2024-01-17",
    likes: 7
  },

  // Comentarios para el post 2
  {
    id: 4,
    postId: 2,
    author: "María Rodríguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "TypeScript ha sido un game changer en nuestro equipo. Los errores en tiempo de compilación nos han salvado muchas veces.",
    date: "2024-01-13",
    likes: 12
  },
  {
    id: 5,
    postId: 2,
    author: "Pedro Martínez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "¿Algún tip para migrar un proyecto grande de JavaScript a TypeScript sin volverse loco?",
    date: "2024-01-14",
    likes: 8
  },

  // Comentarios para el post 3
  {
    id: 6,
    postId: 3,
    author: "Laura Chen",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face",
    content: "Tailwind me ha hecho mucho más productivo. Ya no paso horas peleando con CSS personalizado.",
    date: "2024-01-11",
    likes: 15
  },
  {
    id: 7,
    postId: 3,
    author: "Diego Silva",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    content: "¿Recomiendas usar Tailwind con algún framework de componentes como Headless UI?",
    date: "2024-01-11",
    likes: 6
  },

  // Comentarios para el post 7 (JavaScript Moderno)
  {
    id: 8,
    postId: 7,
    author: "Sofia Ramirez",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Las arrow functions y destructuring son mis features favoritas. ¡Han hecho mi código mucho más limpio!",
    date: "2024-01-19",
    likes: 23
  },
  {
    id: 9,
    postId: 7,
    author: "Miguel Torres",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "¿Podrías hacer un artículo sobre async/await y Promises? Es un tema que muchos todavía encuentran confuso.",
    date: "2024-01-19",
    likes: 18
  },

  // Comentarios para el post 8 (GraphQL vs REST)
  {
    id: 10,
    postId: 8,
    author: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    content: "En mi experiencia, GraphQL es excelente para aplicaciones móviles donde el ancho de banda es limitado.",
    date: "2024-01-21",
    likes: 14
  },
  {
    id: 11,
    postId: 8,
    author: "Elena Morales",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "REST sigue siendo mejor para APIs públicas donde quieres mantener la simplicidad y cacheo HTTP.",
    date: "2024-01-21",
    likes: 9
  },

  // Comentarios para el post 9 (Next.js 14)
  {
    id: 12,
    postId: 9,
    author: "Carlos Rodríguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Las Server Components son increíbles para performance. Hemos reducido nuestro bundle size en un 40%.",
    date: "2024-01-23",
    likes: 21
  },
  {
    id: 13,
    postId: 9,
    author: "Ana López",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face",
    content: "¿Algún problema de compatibilidad con librerías que dependen de useEffect y useState en el client?",
    date: "2024-01-23",
    likes: 11
  },

  // Comentarios para el post 11 (Testing en React)
  {
    id: 14,
    postId: 11,
    author: "María González",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "React Testing Library es mucho mejor que Enzyme. El enfoque de testing desde la perspectiva del usuario es clave.",
    date: "2024-01-29",
    likes: 17
  },
  {
    id: 15,
    postId: 11,
    author: "David Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "¿Cómo manejas el testing de componentes que hacen llamadas a APIs? Mock Service Worker ha sido útil para nosotros.",
    date: "2024-01-29",
    likes: 13
  },

  // Comentarios para el post 13 (Docker)
  {
    id: 16,
    postId: 13,
    author: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    content: "Docker ha estandarizado nuestros entornos de desarrollo. Ya no tenemos problemas de 'en mi máquina funciona'.",
    date: "2024-02-03",
    likes: 25
  },
  {
    id: 17,
    postId: 13,
    author: "Laura Martínez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "¿Recomiendas usar Docker en desarrollo o solo para producción?",
    date: "2024-02-03",
    likes: 8
  },

  // Comentarios para el post 14 (Performance)
  {
    id: 18,
    postId: 14,
    author: "Carlos Rodríguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "El code splitting con React.lazy() ha mejorado significativamente nuestro LCP. Muy buen artículo!",
    date: "2024-02-06",
    likes: 19
  },
  {
    id: 19,
    postId: 14,
    author: "Sofia Ramirez",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "¿Alguna herramienta que recomiendes para monitorear performance en producción?",
    date: "2024-02-06",
    likes: 12
  },

  // Comentarios para el post 15 (Git)
  {
    id: 20,
    postId: 15,
    author: "Miguel Ángel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Los commits semánticos han mejorado mucho nuestro changelog automático. Muy buena práctica!",
    date: "2024-02-09",
    likes: 15
  },
  {
    id: 21,
    postId: 15,
    author: "Elena Morales",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "¿Usas algún hook de pre-commit para validar los mensajes?",
    date: "2024-02-09",
    likes: 7
  },
  {
    id: 22,
    postId: 16,
    author: "Miguel Torres",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Redux Toolkit ha sido un antes y después para mí. Ya no tengo que escribir tanto boilerplate!",
    date: "2024-02-11",
    likes: 8
  },
  {
    id: 23,
    postId: 16,
    author: "Elena Morales",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "¿Recomiendas usar RTK Query para el manejo de datos del servidor?",
    date: "2024-02-11",
    likes: 12
  },

  // Comentarios para el post 17 (Svelte)
  {
    id: 24,
    postId: 17,
    author: "Juan Pérez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Svelte me sorprendió gratamente. ¡Es increíble lo poco de JavaScript que se envía al cliente!",
    date: "2024-02-13",
    likes: 15
  },
  {
    id: 25,
    postId: 17,
    author: "Ana García",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "La reactividad con $: es tan intuitiva. ¿Por qué los otros frameworks no lo implementan así?",
    date: "2024-02-13",
    likes: 9
  },

  // Comentarios para el post 18 (WebSockets)
  {
    id: 26,
    postId: 18,
    author: "Carlos López",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Muy buen tutorial. ¿Algún consejo para manejar reconexiones automáticas cuando se pierde la conexión?",
    date: "2024-02-16",
    likes: 6
  },
  {
    id: 27,
    postId: 18,
    author: "María Rodríguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "He usado Socket.IO en producción y es excelente para aplicaciones en tiempo real. ¿Lo recomiendas sobre WebSockets nativos?",
    date: "2024-02-16",
    likes: 11
  },

  // Comentarios para el post 19 (CSS Grid vs Flexbox)
  {
    id: 28,
    postId: 19,
    author: "Pedro Martínez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Esta explicación es oro puro. Siempre me confundía cuándo usar cada uno. ¡Gracias!",
    date: "2024-02-19",
    likes: 23
  },
  {
    id: 29,
    postId: 19,
    author: "Laura Chen",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face",
    content: "¿Podrías hacer un artículo sobre CSS Subgrid? Es la feature que más espero que tenga mejor soporte.",
    date: "2024-02-19",
    likes: 14
  },

  // Comentarios para el post 20 (Deno vs Node.js)
  {
    id: 30,
    postId: 20,
    author: "Diego Silva",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    content: "Deno es prometedor, pero el ecosistema de Node.js es enorme. ¿Crees que Deno llegará a reemplazarlo?",
    date: "2024-02-21",
    likes: 17
  },
  {
    id: 31,
    postId: 20,
    author: "Sofia Ramirez",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "La seguridad por defecto de Deno es genial para evitar scripts maliciosos. Debería ser estándar.",
    date: "2024-02-21",
    likes: 9
  },

  // Comentarios para el post 21 (React Server Components)
  {
    id: 32,
    postId: 21,
    author: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    content: "Los Server Components han reducido nuestro bundle size en un 60%. Es increíble la diferencia.",
    date: "2024-02-23",
    likes: 21
  },
  {
    id: 33,
    postId: 21,
    author: "Miguel Ángel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "¿Hay alguna limitación importante al usar Server Components? Me preocupa la compatibilidad con librerías de terceros.",
    date: "2024-02-23",
    likes: 15
  },

  // Comentarios para el post 22 (Bun)
  {
    id: 34,
    postId: 22,
    author: "Elena Morales",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "Bun es ridículamente rápido para instalar node_modules. ¡5x más rápido que npm en mi proyecto!",
    date: "2024-02-26",
    likes: 18
  },
  {
    id: 35,
    postId: 22,
    author: "Carlos Rodríguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "El hecho de que Bun incluya todo (test runner, bundler, package manager) es muy conveniente. Menos dependencias.",
    date: "2024-02-26",
    likes: 12
  },

  // Comentarios para el post 23 (Angular Signals)
  {
    id: 36,
    postId: 23,
    author: "Ana López",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face",
    content: "Signals ha simplificado mucho nuestro código. Ya no necesitamos usar BehaviorSubject para todo.",
    date: "2024-02-29",
    likes: 14
  },
  {
    id: 37,
    postId: 23,
    author: "David Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "¿Se pueden mezclar Signals con el sistema de reactividad tradicional de Angular (RxJS)?",
    date: "2024-02-29",
    likes: 8
  },

  // Comentarios para el post 24 (Prisma ORM)
  {
    id: 38,
    postId: 24,
    author: "María González",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "Prisma + TypeScript es la combinación perfecta. Los autocompletados en las consultas son mágicos.",
    date: "2024-03-03",
    likes: 16
  },
  {
    id: 39,
    postId: 24,
    author: "Laura Martínez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "El Prisma Studio es una herramienta increíble para explorar y editar datos durante el desarrollo.",
    date: "2024-03-03",
    likes: 11
  },

  // Comentarios para el post 25 (WebAssembly)
  {
    id: 40,
    postId: 25,
    author: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    content: "WebAssembly está revolucionando lo que es posible en la web. He visto aplicaciones CAD que corren en el navegador.",
    date: "2024-03-06",
    likes: 19
  },
  {
    id: 41,
    postId: 25,
    author: "Sofia Ramirez",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "¿Qué tan difícil es aprender Rust para usar con WebAssembly? Vale la pena el esfuerzo?",
    date: "2024-03-06",
    likes: 13
  },
  {
    id: 42,
    postId: 25,
    author: "Carlos López",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "He usado WASM para procesamiento de imágenes en el frontend y el performance es increíble comparado con JavaScript puro.",
    date: "2024-03-07",
    likes: 7
  }
];