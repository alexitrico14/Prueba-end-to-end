import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

describe('Router', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  it('Renderiza la vista Home correctamente', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toContain('Bienvenido a la página principal');
  });

  it('Renderiza la vista About correctamente', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    // Cambia la ruta a '/about' y espera a que se renderice
    await router.push('/about');
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain('Acerca de esta aplicación');
  });
});
