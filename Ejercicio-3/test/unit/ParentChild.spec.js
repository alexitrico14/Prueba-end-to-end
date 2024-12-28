import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';

describe('Parent-Child Communication', () => {
  it('Recibe texto desde el hijo correctamente', async () => {
    const wrapper = mount(Parent);

    // Encuentra el input y el botón en el hijo
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    // Simula escribir texto en el input
    await input.setValue('Hola desde el hijo');
    // Simula hacer clic en el botón
    await button.trigger('click');

    // Verifica que el texto se muestra en el padre
    expect(wrapper.html()).toContain('Hola desde el hijo');
  });
});
