export const calculateLengthMixin = {
  computed: {
    calculateLength() {
      return `${this.text} (${this.text.length})`;
    },
  },
};
