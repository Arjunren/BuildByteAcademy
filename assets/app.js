/* Public frontend configuration. Vercel may replace window.BUILD_BYTE_API at build time. */
window.BuildByte = {
  api: window.BUILD_BYTE_API || 'https://buildbyteacademy.pythonanywhere.com/api',
  token: () => localStorage.getItem('buildbyte_token'),
  async request(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (this.token()) headers.Authorization = `Bearer ${this.token()}`;
    const response = await fetch(this.api + path, { ...options, headers });
    const json = await response.json().catch(() => ({ success: false, message: 'Unexpected server response.' }));
    if (!response.ok) throw new Error(json.message || 'Request failed.');
    return json;
  },
  escape(value = '') { const node = document.createElement('span'); node.textContent = value; return node.innerHTML; },
  async enroll(id) {
    if (!this.token()) { location.href = 'portal.html#login'; return; }
    try { await this.request(`/student/courses/${id}/enroll`, { method: 'POST' }); location.href = 'portal.html#dashboard'; }
    catch (error) { alert(error.message); }
  }
};
