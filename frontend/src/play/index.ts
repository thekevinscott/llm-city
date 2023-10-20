import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './world.js';

@customElement('lc-play')
export class LCPlay extends LitElement {
  static styles = [
    css`
      :host {
        flex: 1;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      * {
        box-sizing: border-box;
      }

      header {
        height: 80px;
        width: 100%;
        padding: 20px;
        border-bottom: 4px solid black;
      }

      #body {
        display: flex;
        flex: 1;
        width: 100%;
        overflow: hidden;
      }

      lc-world {
        flex: 1;
      }

      #sidebar {
        width: 400px;
        padding: 20px;
        border-left: 4px solid black;
      }
    `
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this.loadGameState();
  }

  @property()
  id!;

  @state()
  gameState?: any;

  loadGameState = async () => {
    const response = await fetch(`http://localhost:5190/games/${this.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.gameState = await response.json();
  }

  render() {
    return html`
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
     <header>
     header
    </header>

    <div id="body">
    ${this.gameState && html`
      <lc-world 
      .players=${this.gameState.players}
      width=${this.gameState.width} height=${this.gameState.height}></lc-world>
    `}
    <div id="sidebar"> sidebar </div>
    </div>
    `;
  }
}

