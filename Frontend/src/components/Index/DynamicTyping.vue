<template>
    <div class="dynamic-typing-container">
      <p style="font-size: 24px; display: inline;">Explore Union Budget</p>
      <div class="dynamic-typing">{{ currentPhrase }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phrases: ["Data", "Visualizations", "Insights!"],
        index: 0,
        charIndex: 0,
        typingSpeed: 100,
        currentPhrase: "", // Added data property to bind dynamic text
      };
    },
    methods: {
      typeDynamicText() {
        const currentPhrase = this.phrases[this.index];
  
        if (this.charIndex < currentPhrase.length) {
          this.currentPhrase += currentPhrase.charAt(this.charIndex);
          this.charIndex++;
          setTimeout(this.typeDynamicText, this.typingSpeed);
        } else {
          setTimeout(() => {
            this.removeDynamicText();
          }, 1000);
        }
      },
      removeDynamicText() {
        const currentPhrase = this.phrases[this.index];
  
        if (this.charIndex >= 0) {
          this.currentPhrase = currentPhrase.substring(0, this.charIndex);
          this.charIndex--;
          setTimeout(this.removeDynamicText, this.typingSpeed / 2);
        } else {
          this.index = (this.index + 1) % this.phrases.length;
          this.charIndex = 0; // Reset charIndex when moving to the next phrase
          setTimeout(this.typeDynamicText, this.typingSpeed);
        }
      },
    },
    mounted() {
      this.typeDynamicText();
    },
  };
  </script>
  
  <style scoped>
.dynamic-typing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #1c2127;
  width: 100%; /* Set width to 100% to extend the whole width */
}

.dynamic-typing-container p {
  font-size: 24px;
  margin-right: 10px;
  color: white;
}

.dynamic-typing {
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #000;
  color: white;
}
</style>
