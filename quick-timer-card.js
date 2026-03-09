/**
 * Quick Timer Card - DEPRECATED
 * This card has been replaced by a native integration.
 */

class QuickTimerCard extends HTMLElement {
  setConfig(config) {
    this._config = config;
  }

  set hass(hass) {
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="⚠️ Action Required">
          <div class="card-content" style="padding: 0 16px 16px;">
            <div style="
              background-color: #fce8e6; 
              color: #d93025; 
              border: 1px solid #d93025; 
              padding: 15px; 
              border-radius: 8px; 
              margin-bottom: 16px;
              font-weight: bold;
            ">
              Quick Timer Card is now DEPRECATED.
            </div>
            
            <p style="font-size: 14px; line-height: 1.5;">
              The functionality of this card is now natively implemented in Quick Timer integration. 
              To avoid system conflicts and errors, please perform the following cleanup:
            </p>

            <ul style="font-size: 14px; line-height: 1.6; padding-left: 20px;">
              <li><b>Delete</b> this card from your dashboard.</li>
              <li><b>Uninstall</b> "Quick Timer Card" from HACS (Frontend section).</li>
              <li><b>Remove</b> the resource reference in Settings -> Dashboards -> Resources.</li>
            </ul>

            <p style="font-size: 13px; color: #666; font-style: italic; margin-top: 15px;">
              Thank you for using this card! Please migrate to the new supported version.
            </p>
          </div>
        </ha-card>
      `;
      this.content = true;
    }
  }


  getCardSize() {
    return 3;
  }
}

// Card registration
if (!customElements.get('quick-timer-card')) {
  customElements.define('quick-timer-card', QuickTimerCard);
}

// Adding information to the list of cards for manual addition
window.customCards = window.customCards || [];
window.customCards.push({
  type: "quick-timer-card",
  name: "Quick Timer Card (DEPRECATED)",
  description: "Manual action required: This card is no longer supported and should be uninstalled.",
  preview: false
});
