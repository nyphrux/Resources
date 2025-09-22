if (!window.myNoti) {
  window.myNoti = (txt, ms = 4000) => {
    const el = document.createElement("div");
    el.className = "mynoti";
    el.textContent = txt;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), ms);
  };

  console.log("✅ myNoti ready. Call it like: myNoti('Hello!')");
}
