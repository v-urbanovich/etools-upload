import { html } from '@polymer/polymer/polymer-element.js';
export const CommonStyles = html `
    <style>
       *[hidden] {
        display: none !important;
      }

      :host {
        display: block;
        width: 100%;
        --paper-input-container-underline: {
          display: none;
        };
        --paper-input-container-underline-focus: {
          display: none;
        };
        --paper-input-container-underline-disabled: {
          display: none;
        };
      }

      paper-button {
        font-weight: 700;
        margin: 0 0;
        padding: 0 0;
      }

      #uploadingSpinner {
        width: 18px;
        height: 18px;
      }

      iron-icon[icon="done"] {
        color: var(--etools-upload-success-color, #72c300);
      }

      iron-icon[icon="error-outline"],
      .delete-button {
        color: var(--etools-upload-danger-color, #ea4022);
      }

      .delete-button {
        color: #f1572a;
      }

      .upload-button {
        color: var(--etools-upload-primary-color, var(--primary-color));
        margin-right: 8px;
      }
      
      :host([readonly]) .upload-button {
        color: var(--secondary-text-color, rgba(0, 0, 0, 0.54));
      }
      
      :host([disabled]) .upload-button {
        pointer-events: none;
        opacity: 0.33;
      }
      
      .upload-button iron-icon {
        margin-right: 8px;
      }
      
      iron-icon {
        min-width: 22px;
        min-height: 22px;
      }

    </style>`;
