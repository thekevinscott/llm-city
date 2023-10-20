import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('lc-world')
export class LCWorld extends LitElement {
  static styles = [
    css`
      :host {
        flex: 1;
        height: 100%;
        width: 100%;
        overflow: scroll;
        max-width: 100%;
        max-height: 100%;
      }

      * {
        box-sizing: border-box;
      }

      table {
        border-collapse: collapse;
      }

      td {
        border: 2px solid black;
        padding: 0;
      }

      tr:first-child td {
        border-top: 0;
      }

      td:first-child {
        border-left: 0;
      }

      td:last-child {
        // border-right: 0;
      }

      div {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(0,0,0,0.1);
      }
    `
  ];

  @property({ type: Number })
  height!;

  @property({ type: Number })
  width!;

  @property({ type: Array })
  players!

  renderCell(col: number, row: number) {
    for (const { position } of this.players) {
      if (position[0] === col && position[1] === row) {
        return html`
        <i class="nes-icon user"></i>
        `;
      }
    }
    return null;
  }

  render() {
    const pos = this.players[0].position;
    return html`
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
    <link href="https://unpkg.com/nes.icons@latest/css/nes-icons.min.css" rel="stylesheet" />
    <table>
    <tbody>
    ${Array(this.height).fill('').map((_, row) => html`
      <tr>
      ${Array(this.width).fill('').map((_, col) => html`
        <td><div>
        ${this.renderCell(col, row)}

        </div></td>
      `)}
      </tr>
    `)}
    </tbody>
    </table>
    `;
  }
}


