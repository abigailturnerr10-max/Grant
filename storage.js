
const StorageAPI = {
  getApplications: function() {
    return JSON.parse(localStorage.getItem("applications")) || [];
  },

  saveApplication: function(data) {
    let apps = this.getApplications();
    apps.push(data);
    localStorage.setItem("applications", JSON.stringify(apps));
  },

  getLatest: function() {
    let apps = this.getApplications();
    return apps[apps.length - 1];
  },

  setPaid: function(status) {
    localStorage.setItem("paid", status);
  },

  isPaid: function() {
    return localStorage.getItem("paid") === "true";
  },

  clear: function() {
    localStorage.clear();
  }
};
