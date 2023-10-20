import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('lc-home')
class LCHome extends LitElement {
  static styles = [
    css`
      :host {
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      * {
        box-sizing: border-box;
      }

      header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        flex: 1;
        max-width: 800px;

      }
        button {
          max-width: 200px;
        }

      div {
        flex: 1;
      }
    `
  ];

  @state()
  loading = false

  async play(e) {
    e.preventDefault();
    this.loading = true;
    this.dispatchEvent(new CustomEvent('play'));
  }

  render() {
    return html`
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
     <header>
   <h1>llmtopia</h1>
   <p>A place for autonomous LLMs and the Humans who love them</p>
   <button ?disabled=${this.loading} @click=${this.play} type="button" class="nes-btn is-primary">Play</button>
 </header>
 <div></div>
    `;
  }
}
