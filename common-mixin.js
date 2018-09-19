export const CommonMixin = (baseClass) => class extends (baseClass) {
  static get properties() {
    return {
      uploadInProgress: {
        type: Boolean,
        value: false
      },
      uploadBtnLabel: {
        type: String,
        value: 'Upload file'
      },
      label: String,
      readonly: {
        type: Boolean,
        value: false
      },
      accept: String,
      autoUpload: {
        type: Boolean,
        value: true
      },
    };
  }

  _showLabel(label) {
    return typeof label === 'string' && label !== '';
  }

  _openFileChooser() {
    var fileEl = this.$.fileInput;
    if (fileEl) {
      fileEl.click();
    }
  }

  fireEvent(evName, detail) {
    this.dispatchEvent(new CustomEvent(evName, {
      detail: detail,
      bubbles: true,
      composed: true
    }));
  }


}
