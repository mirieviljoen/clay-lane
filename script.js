(() => {
  const CURRENCY = "R";
  const FREE_SHIP_OVER = 600;
  const SHIPPING = 60;
  const CONTACT_EMAIL = "hello@claylane.co.za"; // change to your real address

  // Replace `shape`/`colors` with real photos later by adding an `image` URL and rendering it in art().
  const PRODUCTS = [
    { id: 1, name: "Blossom Drop", price: 185, cat: "dangles", shape: "flower", colors: ["#e8b4b8", "#f6e3c5"], badge: "Bestseller", image: "Featured images/black-white-four-tier-drops.jpg", desc: "Soft blush petals with a golden centre. Lightweight dangles for everyday wear." },
    { id: 4, name: "Terracotta Hoop", price: 195, cat: "dangles", shape: "hoop", colors: ["#c9805f", "#e3b99c"], badge: "New", image: "Featured images/black-white-three-tier-drops.jpg", desc: "Earthy terracotta tones in a modern hoop silhouette." },
    { id: 7, name: "Golden Hour Drop", price: 210, cat: "dangles", shape: "drop", colors: ["#e0b25f", "#f3dfb0"], badge: "Limited", image: "Featured images/pastel-embossed-three-tier-disc-drops.jpg", desc: "Warm marbled gold teardrops that catch the light." },
    { id: 9, name: "Golden Sunflower Studs", price: 130, cat: "floral", image: "Product_Floral Images/Golden sunflower studs in wooden bowl-9.png", desc: "Golden sunflower studs with a warm, sunny centre." },
    { id: 10, name: "Hot Pink Blooms", price: 120, cat: "floral", image: "Product_Floral Images/Hot pink clay flower studs-3.png", desc: "Bold hot pink flower studs that make a statement." },
    { id: 11, name: "Lavender Blooms", price: 120, cat: "floral", image: "Product_Floral Images/Lavender Clay Flower Stud Earrings-8.png", desc: "Soft lavender flower studs, light and sweet." },
    { id: 12, name: "Teal Blooms", price: 120, cat: "floral", image: "Product_Floral Images/Teal flower studs in a wooden bowl-1.png", desc: "Deep teal flower studs for a pop of colour." },
    { id: 13, name: "White Double Daisy", price: 140, cat: "floral", image: "Product_Floral Images/White double-daisy clay earrings in wooden bowl-2.png", desc: "Layered white daisies, simple and fresh." },
    { id: 14, name: "Yellow Double Sunflower", price: 140, cat: "floral", image: "Product_Floral Images/Yellow double-sunflower earrings in a wooden bowl-1.png", desc: "Layered yellow sunflowers that brighten any outfit." },
    { id: 15, name: "Dusty Rose Flower Studs", price: 110, cat: "studs", image: "Product_Studs/Dusty Rose Flower Stud Earrings-7.png", desc: "Classic flower studs in a dusty rose shade." },
    { id: 16, name: "Plum Flower Studs", price: 110, cat: "studs", image: "Product_Studs/Plum flower studs in a wooden bowl-6.png", desc: "Rich plum flower studs with a moody elegance." },
    { id: 17, name: "Terracotta Flower Studs", price: 110, cat: "studs", image: "Product_Studs/Terracotta flower studs in wooden bowl-4.png", desc: "Earthy terracotta flower studs." },
    { id: 18, name: "White Flower Studs", price: 110, cat: "studs", image: "Product_Studs/White clay flower studs in wooden bowl-2.png", desc: "Crisp white clay flower studs for everyday wear." },
    { id: 19, name: "Black Fan Hoops", price: 175, cat: "dangles", image: "Product_Dangles/Black Fan Hoop Earrings in Wooden Bowl.png", desc: "Black fan-shaped hoops with a graphic edge." },
    { id: 20, name: "Black Heart Drops", price: 170, cat: "dangles", image: "Product_Dangles/Black Heart Earrings in Wooden Bowl-1.png", desc: "Black heart dangles, lightweight and bold." },
    { id: 21, name: "Black Triple Hoops", price: 185, cat: "dangles", image: "Product_Dangles/Black clay triple-hoop earrings in bowl-2.png", desc: "Three nested black hoops in a modern silhouette." },
    { id: 22, name: "Black Heart Dangles", price: 170, cat: "dangles", image: "Product_Dangles/Black heart drop earrings in wooden bowl-3.png", desc: "Black heart drop earrings with a delicate hang." },
    { id: 23, name: "Black Semicircle Drops", price: 165, cat: "dangles", image: "Product_Dangles/Black semicircle earrings in a wooden bowl-3.png", desc: "Minimal black semicircle dangles." },
    { id: 24, name: "Ivory Heart Drops", price: 170, cat: "dangles", image: "Product_Dangles/Ivory heart earrings in shallow wooden bowl-4.png", desc: "Soft ivory heart earrings." },
    { id: 25, name: "Ivory Heart Dangles", price: 170, cat: "dangles", image: "Product_Dangles/Ivory heart earrings in wooden bowl-2.png", desc: "Ivory heart dangles with a gentle finish." },
    { id: 26, name: "Ivory Lotus Drops", price: 185, cat: "dangles", image: "Product_Dangles/Ivory lotus earrings in a wooden bowl-1.png", desc: "Ivory lotus-shaped earrings, hand cut." },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const money = n => CURRENCY + n.toFixed(n % 1 ? 2 : 0);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function art(p) {
    if (p.image) return `<img class="product-photo" src="${encodeURI(p.image)}" alt="${esc(p.name)} earring" loading="lazy">`;
    const [a, b] = p.colors;
    const wire = `<circle cx="50" cy="8" r="4" fill="none" stroke="#b89a62" stroke-width="1.5"/><line x1="50" y1="12" x2="50" y2="26" stroke="#b89a62" stroke-width="1.5"/>`;
    const shapes = {
      flower: `<g transform="translate(50 60)">${[0, 72, 144, 216, 288].map(r => `<ellipse cx="0" cy="-17" rx="9" ry="15" fill="${a}" transform="rotate(${r})"/>`).join("")}<circle r="8" fill="${b}"/></g>`,
      leaf: `<path d="M50 28 C80 50 80 90 50 112 C20 90 20 50 50 28Z" fill="${a}"/><path d="M50 36 V108" stroke="${b}" stroke-width="2"/>`,
      arch: `<path d="M26 96 V62 A24 24 0 0 1 74 62 V96Z" fill="${a}"/><circle cx="42" cy="70" r="1.5" fill="${b}"/><circle cx="58" cy="82" r="1.5" fill="${b}"/><circle cx="50" cy="60" r="1.5" fill="${b}"/>`,
      hoop: `<circle cx="50" cy="64" r="28" fill="none" stroke="${a}" stroke-width="14"/><circle cx="50" cy="64" r="28" fill="none" stroke="${b}" stroke-width="3" stroke-dasharray="6 10"/>`,
      dot: `<circle cx="50" cy="62" r="26" fill="${a}"/><circle cx="50" cy="62" r="18" fill="${b}" opacity=".35"/>`,
      drop: `<path d="M50 30 C50 30 78 64 78 82 A28 28 0 0 1 22 82 C22 64 50 30 50 30Z" fill="${a}"/><path d="M36 84 A14 14 0 0 0 50 98" stroke="${b}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    };
    return `<svg viewBox="0 0 100 120" role="img" aria-label="${esc(p.name)} earring">${wire}${shapes[p.shape]}</svg>`;
  }

  // Cart state
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("claylane-cart")) || []; } catch { cart = []; }
  cart = cart.filter(i => PRODUCTS.some(p => p.id === i.id) && Number.isInteger(i.qty) && i.qty > 0);
  const save = () => localStorage.setItem("claylane-cart", JSON.stringify(cart));
  const subtotal = () => cart.reduce((s, i) => s + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0);
  const shipping = () => (cart.length === 0 || subtotal() >= FREE_SHIP_OVER ? 0 : SHIPPING);

  // Products
  const grid = $("#product-grid");
  function renderProducts(filter = "all") {
    if (!grid) return;
    const isFeatured = grid.dataset.featured === "true";
    const featuredIds = [1, 4, 7];
    const products = PRODUCTS.filter(p => (filter === "all" || p.cat === filter) && (!isFeatured || featuredIds.includes(p.id)));
    grid.innerHTML = products.map(p => `
      <article class="card">
        <button class="thumb" data-view="${p.id}" aria-label="View ${esc(p.name)}">
          ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}${art(p)}
        </button>
        <h3>${esc(p.name)}</h3>
        <p class="price">${money(p.price)}</p>
        <button class="btn ghost" data-add="${p.id}">Add to cart</button>
      </article>`).join("");
    const count = $("#product-count");
    if (count) count.textContent = `${products.length} ${products.length === 1 ? "piece" : "pieces"}`;
  }

  const filters = $(".filters");
  if (filters) filters.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    filters.querySelectorAll(".chip").forEach(c => {
      const active = c === chip;
      c.classList.toggle("active", active);
      c.setAttribute("aria-pressed", active);
    });
    renderProducts(chip.dataset.filter);
  });

  if (grid) grid.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    const view = e.target.closest("[data-view]");
    if (add) { addToCart(+add.dataset.add); openCart(); }
    else if (view) openProduct(+view.dataset.view);
  });

  // Cart
  function addToCart(id) {
    const item = cart.find(i => i.id === id);
    item ? item.qty++ : cart.push({ id, qty: 1 });
    renderCart();
  }

  function renderCart() {
    save();
    $("#cart-count").textContent = cart.reduce((s, i) => s + i.qty, 0);
    const body = $("#cart-items");
    body.innerHTML = cart.length ? cart.map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return `<div class="line-item">
        <div class="mini">${art(p)}</div>
        <div><h4>${esc(p.name)}</h4><div class="qty">
          <button data-dec="${p.id}" aria-label="Decrease">−</button><span>${i.qty}</span><button data-inc="${p.id}" aria-label="Increase">+</button></div></div>
        <div>${money(p.price * i.qty)}<button class="remove" data-rm="${p.id}">Remove</button></div>
      </div>`;
    }).join("") : `<p class="empty">Your cart is empty.</p>`;
    $("#cart-subtotal").textContent = money(subtotal());
    const left = FREE_SHIP_OVER - subtotal();
    $("#ship-note").innerHTML = !cart.length ? "" : left > 0 ? `<strong>Add</strong> <strong>${money(left)}</strong> more for <strong>free delivery</strong>. Delivery: ${money(SHIPPING)}.` : "You qualify for <strong>free delivery</strong>!";
    $("#checkout-btn").disabled = !cart.length;
  }

  $("#cart-items").addEventListener("click", e => {
    const t = e.target;
    const id = +(t.dataset.inc || t.dataset.dec || t.dataset.rm);
    if (!id) return;
    const item = cart.find(i => i.id === id);
    if (t.dataset.inc) item.qty++;
    if (t.dataset.dec) item.qty--;
    if (t.dataset.rm || item.qty <= 0) cart = cart.filter(i => i.id !== id);
    renderCart();
  });

  const drawer = $("#cart-drawer"), overlay = $("#overlay");
  function openCart() { drawer.classList.add("open"); overlay.classList.add("show"); drawer.setAttribute("aria-hidden", "false"); }
  function closeCart() { drawer.classList.remove("open"); overlay.classList.remove("show"); drawer.setAttribute("aria-hidden", "true"); }
  $("#open-cart").onclick = openCart;
  $("#close-cart").onclick = closeCart;
  overlay.onclick = closeCart;

  // Product detail modal
  const pm = $("#product-modal");
  function openProduct(id) {
    const p = PRODUCTS.find(x => x.id === id);
    $("#product-detail").innerHTML = `
      <button class="icon-btn modal-close" data-close aria-label="Close">✕</button>
      <div class="detail-art">${art(p)}</div>
      <div class="detail-info">
        <p class="eyebrow">${esc(p.cat)}</p>
        <h2>${esc(p.name)}</h2>
        <p class="price">${money(p.price)}</p>
        <p>${esc(p.desc)}</p>
        <p class="small">Handmade polymer clay · Nickel-free hooks · Colours may vary slightly.</p>
        <button class="btn full" data-add-modal="${p.id}">Add to cart</button>
      </div>`;
    pm.classList.add("show");
  }
  pm.addEventListener("click", e => {
    if (e.target === pm || e.target.closest("[data-close]")) pm.classList.remove("show");
    const add = e.target.closest("[data-add-modal]");
    if (add) { addToCart(+add.dataset.addModal); pm.classList.remove("show"); openCart(); }
  });

  // Checkout (front-end only: connect to a payment/order backend to go live)
  const cm = $("#checkout-modal"), form = $("#checkout-form");
  $("#checkout-btn").onclick = () => {
    if (!cart.length) return;
    $("#checkout-total").textContent = money(subtotal() + shipping());
    form.hidden = false; $("#order-success").hidden = true;
    closeCart(); cm.classList.add("show");
  };
  $("#close-checkout").onclick = () => cm.classList.remove("show");
  cm.addEventListener("click", e => { if (e.target === cm) cm.classList.remove("show"); });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const ref = "CL" + Date.now().toString().slice(-6);
    const name = new FormData(form).get("name");
    $("#order-msg").textContent = `Thank you, ${name}. Your order ${ref} has been received. We'll email you payment details shortly.`;
    cart = []; renderCart(); form.reset();
    form.hidden = true; $("#order-success").hidden = false;
  });
  $("#done-btn").onclick = () => cm.classList.remove("show");

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    closeCart(); cm.classList.remove("show"); pm.classList.remove("show");
  });

  // Misc
  const nav = $(".nav"), toggle = $(".menu-toggle");
  toggle.onclick = () => { const o = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); };
  nav.addEventListener("click", () => nav.classList.remove("open"));
  const contactForm = $("#contact-form-el");
  if (contactForm) contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(contactForm);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Custom design enquiry")}&body=${encodeURIComponent(body)}`;
    $("#contact-msg").textContent = "Thank you! Your email app should open so you can send your message.";
    contactForm.reset();
  });
  $("#year").textContent = new Date().getFullYear();

  renderProducts();
  renderCart();
})();
