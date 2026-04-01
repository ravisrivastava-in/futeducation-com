(function () {
  var modal = document.createElement('div');
  modal.id = 'fut-portal-modal';
  modal.innerHTML = `
    <div id="fut-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:99999;display:flex;align-items:center;justify-content:center;padding:1rem;animation:futFadeIn 0.3s ease;">
      <div style="background:#fff;border-radius:16px;padding:2rem;max-width:460px;width:100%;position:relative;animation:futSlideUp 0.35s ease;">
        <button onclick="document.getElementById('fut-portal-modal').remove()" style="position:absolute;top:12px;right:14px;background:none;border:none;font-size:20px;cursor:pointer;color:#888;line-height:1;">&#x2715;</button>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="width:8px;height:8px;border-radius:50%;background:#1D9E75;display:inline-block;"></span>
          <span style="font-size:11px;color:#888;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">New Portals Available</span>
        </div>
        <h3 style="margin:0 0 6px;font-size:20px;font-weight:600;color:#111;">We've built dedicated spaces for you</h3>
        <p style="margin:0 0 20px;font-size:14px;color:#666;line-height:1.6;">Get deeper, focused content on topics that matter most for your admission journey.</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
          <a href="https://neet.futeducation.com/" target="_blank" style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:10px;border:1px solid #eee;text-decoration:none;background:#f9f9f9;transition:background 0.2s;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='#f9f9f9'">
            <div style="width:42px;height:42px;border-radius:10px;background:#E1F5EE;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">🩺</div>
            <div style="flex:1;">
              <p style="margin:0;font-size:14px;font-weight:600;color:#111;">NEET Portal</p>
              <p style="margin:0;font-size:12px;color:#888;">Counselling, cutoffs, state quotas & colleges</p>
            </div>
            <span style="color:#aaa;font-size:18px;">&#8594;</span>
          </a>
          <a href="https://exams.futeducation.com/" target="_blank" style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:10px;border:1px solid #eee;text-decoration:none;background:#f9f9f9;transition:background 0.2s;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='#f9f9f9'">
            <div style="width:42px;height:42px;border-radius:10px;background:#E6F1FB;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">📝</div>
            <div style="flex:1;">
              <p style="margin:0;font-size:14px;font-weight:600;color:#111;">Exams Portal</p>
              <p style="margin:0;font-size:12px;color:#888;">JEE, NEET, MBA, Law — all exam updates</p>
            </div>
            <span style="color:#aaa;font-size:18px;">&#8594;</span>
          </a>
        </div>
        <button onclick="document.getElementById('fut-portal-modal').remove()" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd;background:transparent;cursor:pointer;font-size:14px;color:#888;">Maybe later</button>
      </div>
    </div>
    <style>
      @keyframes futFadeIn{from{opacity:0}to{opacity:1}}
      @keyframes futSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    </style>
  `;
  document.body.appendChild(modal);
})();