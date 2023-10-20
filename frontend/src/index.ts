import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import './home.js';
import './play/index.js';

@customElement('llm-city')
class LLMCity extends LitElement {
  static styles = [
    css`
    :host {
      flex: 1;
      display: flex;
      width: 100%;
      height: 100%;
    }
    `
  ]
  private router = new Router(this, [
    {path: '/', render: () => html`<lc-home @play=${async e => {
      const response = await fetch('http://localhost:5190/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          height: 25,
          width: 25,
        }),
      });
      const { id } = await response.json();
      const url = `/${id}`;
      this.router.goto(url);
      history.pushState({}, "", url);
    }}></lc-home>`},
    {path: '/:id', render: ({ id }) => {
      return html`<lc-play id=${id}></lc-play>`;
    }},
  ]);

  constructor() {
    super();
    this.addEventListener('play', (e) => {
      console.log(e);
    });
  }

  // connectedCallback(): void {
  // //   this.addEventListener('play', e => {
  // //     this.router.goto(`/${e.detail.id}`);
  // //   });
  // }

  render() {
    return this.router.outlet();
  }
}
