import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-card')
export class CardComponent extends LitElement {
  @property({ type: String }) heading = '';
  @property({ type: String }) description = '';
  @property({ type: String }) ctaText = '';
  @property({ type: String }) secondaryCtaText = '';
  @property({ type: String }) additionalInfo = '';
  @property({ type: Boolean }) hasMedia = false;
  @property({ type: Boolean }) isFavorite = false;

  static styles = css`
    :host {
      display: block;
      border: 1px solid var(--primary-color, #ccc);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      background: white;
      font-family: Arial, sans-serif;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: 100%;
    }
    .media {
      display: none;
    }
    @media (min-width: 321px) {
      .card {
        max-width: 640px;
      }
    }
    @media (min-width: 641px) {
      .card {
        max-width: 1440px;
      }
      .media {
        display: block;
        width: 100%;
        height: 150px;
        background: #ccc;
      }
    }
    .icon-container {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 8px;
    }
    .icon-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
    }
    .content {
      padding: 16px;
    }
    .heading {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .description {
      color: #666;
      margin: 8px 0;
    }
    .cta-container {
      display: flex;
      gap: 8px;
    }
    .cta {
      display: inline-block;
      color: var(--primary-color, #007bff);
      text-decoration: none;
      font-weight: bold;
    }
    .additional-info {
      font-size: 0.8rem;
      color: #999;
      margin-top: 12px;
    }
  `;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  render() {
    return html`
      <div class="card" role="article" aria-labelledby="card-heading">
        ${this.hasMedia ? html`<div class="media" aria-hidden="true"></div>` : ''}

        <div class="icon-container">
          <button
            class="icon-button"
            @click="${this.toggleFavorite}"
            aria-pressed="${this.isFavorite}"
            aria-label="${this.isFavorite ? 'Remove from favorites' : 'Add to favorites'}"
          >
            ${this.isFavorite
        ? html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>`
        : html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>`}
          </button>

          <button
            class="icon-button"
            @click="${() => alert('More options')}"
            aria-label="More options"
          >
            ⋮
          </button>
        </div>

        <div class="content">
          <div id="card-heading" class="heading">${this.heading}</div>
          ${this.description ? html`<div class="description">${this.description}</div>` : ''}
          <div class="cta-container">
            ${this.ctaText
        ? html`<a href="#" class="cta" role="button">${this.ctaText}</a>`
        : ''}
            ${this.secondaryCtaText
        ? html`<a href="#" class="cta" role="button">${this.secondaryCtaText}</a>`
        : ''}
          </div>
          ${this.additionalInfo
        ? html`<div class="additional-info">${this.additionalInfo}</div>`
        : ''}
        </div>
      </div>
    `;
  }
}
