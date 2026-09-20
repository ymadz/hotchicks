import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Doodle } from './Doodle'
import './styles.css'

const menu = [
  {
    name: 'Nashville Hot Chicken Sandwich',
    description: 'Crispy chicken breast, tangy vinegar slaw, pickles, and fiery Hot Chicks Sauce on a buttery brioche bun.',
    price: 255,
    image: '/assets/menu-sandwich.jpg',
    alt: 'Nashville hot chicken sandwich with slaw and pickles',
    label: 'Legendary',
  },
  {
    name: 'Hot Chicks Tenders',
    description: 'Five monster-sized tenders, all crispy and juicy, served with pickles and our fiery Hot Chicks Sauce.',
    price: 245,
    image: '/assets/menu-tenders.jpg',
    alt: 'Crispy chicken tenders in a tray',
    label: 'Bestseller',
  },
  {
    name: 'Hot Chicks Loaded Fries',
    description: 'Crispy seasoned fries topped with chicken tenders, signature slaw, pickles, and Comeback Sauce.',
    price: 255,
    image: '/assets/menu-loaded-fries.jpg',
    alt: 'Hot Chicks loaded fries in a basket',
    label: 'Fan favorite',
  },
  {
    name: 'Masala Loaded Fries',
    description: 'Crispy fries dusted with aromatic curry-masala spices, tossed with hot chicken, and finished with herb drizzle.',
    price: 255,
    image: '/assets/menu-loaded-fries.jpg',
    alt: 'Loaded fries with chicken, slaw, and pickles',
    label: 'Savory & spicy',
  },
  {
    name: 'Buffalo Tenders & Ranch',
    description: 'Crispy tenders with a tangy buffalo glaze and a cool ranch dip on the side.',
    price: 255,
    image: '/assets/menu-tenders.jpg',
    alt: 'Crispy chicken tenders with dipping sauce',
    label: 'House special',
  },
  {
    name: 'Hot Chicks Skinchos',
    description: 'Crispy chicken skins loaded nacho-style with cheese sauce, pickled peppers, and hot crunch oil.',
    price: 320,
    image: '',
    alt: '',
    label: 'Chef crafted',
  },
]

const sides = [
  { name: 'Triple Cheese Fries', description: 'Three gooey melted cheeses to soothe the burn', price: 189 },
  { name: 'Seasoned Fries', description: 'Signature cajun spice mix', price: 135 },
  { name: 'Cup of Slaw', description: 'Sweet and tangy cool crunch', price: 69 },
  { name: 'Fried Pickles', description: 'Crispy crinkle-cut pickles', price: 115 },
]

const drinks = [
  { name: 'Yakult Lemonade', description: 'Sweet, tangy lemonade to cool the fire', price: 139 },
  { name: 'Strawberry Lemonade', description: 'Fresh strawberry and lemon', price: 139 },
  { name: 'Blue Ocean Soda', description: 'Citrus soda with blue curaçao notes', price: 129 },
  { name: 'House Iced Tea', description: 'Sweet black tea with calamansi', price: 89 },
]

type Product = { name: string; description: string; price: number }
type ProductCategory = 'main' | 'side' | 'drink'
type SelectedProduct = { item: Product; category: ProductCategory }
type CartItem = { name: string; category: ProductCategory; heat?: string; extras: string[]; quantity: number; price: number }

const heat = [
  ['01', 'The OG', 'No heat'],
  ['02', 'Mild', 'Brush of heat'],
  ['03', 'Medium', 'Feel the burn'],
  ['04', 'Hot AF!', 'It speaks for itself'],
  ['05', 'Burn Baby Burn', "Oh baby, it’s burning!"],
  ['06', 'Reaper', 'We warned you!'],
]

function App() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [showAllMenu, setShowAllMenu] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null)
  const [selectedHeat, setSelectedHeat] = useState('Medium')
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [cart, setCart] = useState<CartItem[]>([])
  const [activeDialog, setActiveDialog] = useState<'item' | 'cart' | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeDialog && !dialog.open) dialog.showModal()
    if (!activeDialog && dialog.open) dialog.close()
  }, [activeDialog])

  const openItem = (item: Product, category: ProductCategory) => {
    setSelectedProduct({ item, category })
    setSelectedHeat('Medium')
    setSelectedExtras([])
    setSelectedQuantity(1)
    setActiveDialog('item')
  }

  const toggleExtra = (name: string) => {
    setSelectedExtras(current => current.includes(name) ? current.filter(extra => extra !== name) : [...current, name])
  }

  const selectedUnitPrice = (selectedProduct?.item.price ?? 0) + (selectedProduct?.category === 'main' ? selectedExtras.reduce((total, name) => total + (sides.find(item => item.name === name)?.price ?? drinks.find(item => item.name === name)?.price ?? 0), 0) : 0)
  const selectedTotal = selectedUnitPrice * selectedQuantity
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const addToCart = () => {
    if (!selectedProduct) return
    setCart(current => [...current, { name: selectedProduct.item.name, category: selectedProduct.category, heat: selectedProduct.category === 'main' ? selectedHeat : undefined, extras: selectedProduct.category === 'main' ? selectedExtras : [], quantity: selectedQuantity, price: selectedTotal }])
    setActiveDialog(null)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hot Chicks home">
          <img src="/assets/hotchicks-logo.png" alt="" width="72" height="72" />
          <span className="brand-lockup"><strong>HOT CHICKS</strong><small>EST. 2022</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#sides-drinks">Sides &amp; drinks</a>
          <a href="#story">Our promise</a>
        </nav>
        <div className="header-actions"><a className="header-cta" href="#menu">Explore the menu <span aria-hidden="true">↗</span></a><button className="cart-trigger" type="button" onClick={() => setActiveDialog('cart')} aria-label={`Open order bag with ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}>Bag <span>{cartCount}</span></button></div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Doodle kind="flame" className="hero-doodle hero-doodle-flame" />
          <Doodle kind="scribble" className="hero-doodle hero-doodle-scribble" />
          <div className="hero-copy">
            <div className="hero-kicker"><span className="hero-kicker-rule" /> NASHVILLE HOT CHICKEN <span className="hero-kicker-year">EST. 2022</span></div>
            <h1 id="hero-title"><span className="hero-line">THE HOTTEST</span><span className="hero-line hero-line-accent">CHICK</span><span className="hero-line">IN TOWN.</span></h1>
            <div className="hero-actions">
              <a className="button button-yellow" href="#menu">View the menu <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-media">
            <video className="hero-video" autoPlay={!reduceMotion} muted loop playsInline preload="metadata" poster="/assets/hero-poster.jpg" aria-label="Hot Chicks loaded fries in a basket">
              <source src="/assets/herovideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-wave" aria-hidden="true"><svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d="M0 33C166 89 304 0 478 30C652 60 745 83 921 36C1114 -16 1285 74 1440 24V90H0Z" /></svg></div>
        </section>

        <div className="ticker" aria-label="Hot Chicks menu favorites"><div className="ticker-window"><div className="ticker-track" aria-hidden="true">{[0, 1].map(copy => <span className="ticker-sequence" key={copy}><span>NASHVILLE HOT CHICKEN</span><i>✳</i><span>LOADED FRIES</span><i>✳</i><span>TENDERS</span><i>✳</i><span>SIDE CHICKS</span><i>✳</i><span>COOL DRINKS</span><i>✳</i></span>)}</div></div></div>

        <section className="menu-section" id="menu" aria-labelledby="menu-title">
          <Doodle kind="arrow" className="menu-doodle menu-doodle-arrow" />
          <Doodle kind="scribble" className="menu-doodle menu-doodle-scribble" />
          <Doodle kind="flame" className="menu-doodle menu-doodle-flame" />
          <Doodle kind="circle" className="menu-doodle menu-doodle-circle" />
          <div className="section-wrap">
            <div className="menu-heading">
              <div className="menu-heading-title"><Doodle kind="drumstick" className="heading-doodle main-heading-doodle" /><div><span className="menu-overline">✦ Hand-breaded &amp; fried hot</span><h2 id="menu-title">The main chicks</h2></div></div>
              <span className="menu-heading-note">✹ Select an item to customize heat &amp; sides</span>
            </div>
            <div className="menu-grid">
              {(showAllMenu ? menu : menu.slice(0, 3)).map((item) => (
                <article className="menu-card" key={item.name}>
                  <div className={`menu-image-wrap${item.image ? '' : ' skinchos-art'}`}>
                    {item.image ? <img src={item.image} alt={item.alt} loading="lazy" /> : <span className="skinchos-art-text" aria-hidden="true">HOT CHICKS<br />SKINCHOS<span>✹</span></span>}
                    <span className="menu-label">{item.label}</span>
                  </div>
                  <div className="menu-card-body"><div className="menu-name-row"><h3>{item.name}</h3><span>₱ {item.price}</span></div><p>{item.description}</p><button className="add-order" type="button" onClick={() => openItem(item, 'main')}><span aria-hidden="true">♧</span> Add to order</button></div>
                </article>
              ))}
            </div>
            <div className="menu-toggle-wrap"><button className="menu-toggle" type="button" onClick={() => setShowAllMenu(current => !current)} aria-expanded={showAllMenu}>{showAllMenu ? 'Show less main chicks' : 'Show more main chicks'} <span aria-hidden="true">{showAllMenu ? '⌃' : '⌄'}</span></button></div>
          </div>
        </section>

        <section className="extras-section" id="sides-drinks" aria-label="Sides and drinks"><Doodle kind="spark" className="extras-doodle extras-doodle-spark" /><Doodle kind="drumstick" className="extras-doodle extras-doodle-drumstick" /><Doodle kind="scribble" className="extras-doodle extras-doodle-scribble" /><div className="section-wrap"><div className="extras-intro"><span>MAKE IT A MEAL ✳</span><h2>DON’T FORGET<br />THE EXTRAS.</h2></div><div className="extras-grid">
          <div className="extras-panel"><div className="extras-heading"><Doodle kind="fries" className="heading-doodle sides-heading-doodle" /><div><span className="menu-overline">✦ Crispy extras</span><h2>Side chicks</h2></div></div><button className="extras-feature" type="button" onClick={() => openItem(sides[0], 'side')}><img src="/assets/menu-cheese-fries.jpg" alt="" loading="lazy" /><div><strong>Triple Cheese Fries</strong><p>Three gooey melted cheeses to soothe the burn.</p></div><span className="extras-price">₱ 189 <b aria-hidden="true">+</b></span></button><ul className="extras-list">{sides.slice(1).map(item => <li key={item.name}><button className="extras-item" type="button" onClick={() => openItem(item, 'side')}><div><strong>{item.name}</strong><small>{item.description}</small></div><span>₱ {item.price} <b aria-hidden="true">+</b></span></button></li>)}</ul></div>
          <div className="extras-panel"><div className="extras-heading"><Doodle kind="drink" className="heading-doodle drinks-heading-doodle" /><div><span className="menu-overline">✦ Fire extinguishers</span><h2>Cool drinks</h2></div></div><button className="extras-feature" type="button" onClick={() => openItem(drinks[0], 'drink')}><img src="/assets/menu-yakult.jpg" alt="" loading="lazy" /><div><strong>Yakult Lemonade</strong><p>Sweet, tangy lemonade to cool the fire.</p></div><span className="extras-price">₱ 139 <b aria-hidden="true">+</b></span></button><ul className="extras-list">{drinks.slice(1).map(item => <li key={item.name}><button className="extras-item" type="button" onClick={() => openItem(item, 'drink')}><div><strong>{item.name}</strong><small>{item.description}</small></div><span>₱ {item.price} <b aria-hidden="true">+</b></span></button></li>)}</ul></div>
        </div></div></section>

        <section className="promise-section" id="story" aria-labelledby="promise-title"><Doodle kind="bolt" className="promise-doodle promise-doodle-bolt" /><Doodle kind="circle" className="promise-doodle promise-doodle-circle" /><Doodle kind="splash" className="promise-doodle promise-doodle-splash" /><div className="section-wrap promise-inner"><div className="promise-visual"><img src="/assets/people.png" alt="Friends enjoying a meal together" loading="lazy" /><div className="promise-badge">MADE<br />FRESH<br />DAILY.</div></div><div className="promise-copy"><p className="kicker">THE HOT CHICKS WAY</p><h2 id="promise-title">GOOD FOOD.<br /><em>GOOD FIRE.</em></h2><p>Fresh chicken, fried hot. Sides made in-house every day. That’s how we do it.</p><span className="promise-signoff">HOT CHICKS · EST. 2022</span></div></div></section>
      </main>

      <footer className="site-footer"><Doodle kind="spark" className="footer-doodle footer-doodle-spark" /><Doodle kind="arrow" className="footer-doodle footer-doodle-arrow" /><div className="footer-top"><div><span className="footer-brand">HOT CHICKS<span>®</span></span><p>THE HOTTEST CHICK IN TOWN.</p></div><a href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HOT CHICKS</span><span>MADE FOR THE CRUNCH.</span></div></footer>
      <dialog className="order-dialog" ref={dialogRef} onClose={() => setActiveDialog(null)} onClick={event => { if (event.target === dialogRef.current) setActiveDialog(null) }} aria-label={activeDialog === 'cart' ? 'Your order bag' : 'Customize your item'}>
        <div className="order-dialog-header"><div><span className="menu-overline">HOT CHICKS / YOUR ORDER</span><h2>{activeDialog === 'cart' ? 'Your bag' : selectedProduct?.category === 'side' ? 'Add a side' : selectedProduct?.category === 'drink' ? 'Add a drink' : 'Make it yours'}</h2></div><button className="dialog-close" type="button" onClick={() => setActiveDialog(null)} aria-label="Close dialog">×</button></div>
        {activeDialog === 'item' && selectedProduct && <div className="order-dialog-body order-dialog-body-item">
          <div className="order-dialog-scroll">
          <div className="selected-item"><strong>{selectedProduct.item.name}</strong><span>₱ {selectedProduct.item.price}</span></div>
          <p className="selected-description">{selectedProduct.item.description}</p>
          {selectedProduct.category === 'main' && <><fieldset><legend>Choose your heat</legend><div className="choice-grid">{heat.map(([, name]) => <label className={selectedHeat === name ? 'choice selected' : 'choice'} key={name}><input type="radio" name="heat" value={name} checked={selectedHeat === name} onChange={() => setSelectedHeat(name)} />{name}</label>)}</div></fieldset><fieldset><legend>Add sides &amp; drinks</legend><div className="extra-choices">{[...sides, ...drinks].map(item => <label key={item.name}><input type="checkbox" checked={selectedExtras.includes(item.name)} onChange={() => toggleExtra(item.name)} /><span>{item.name}</span><strong>+ ₱ {item.price}</strong></label>)}</div></fieldset></>}
          </div>
          <div className="order-dialog-footer">
          <div className="quantity-row"><span>Quantity</span><div className="quantity-stepper"><button type="button" onClick={() => setSelectedQuantity(quantity => Math.max(1, quantity - 1))} disabled={selectedQuantity === 1} aria-label="Decrease quantity">−</button><output aria-live="polite">{selectedQuantity}</output><button type="button" onClick={() => setSelectedQuantity(quantity => Math.min(20, quantity + 1))} disabled={selectedQuantity === 20} aria-label="Increase quantity">+</button></div></div>
          <button className="dialog-primary" type="button" onClick={addToCart}>Add {selectedQuantity} to bag <span>₱ {selectedTotal}</span></button>
          </div>
        </div>}
        {activeDialog === 'cart' && <div className="order-dialog-body">{cart.length === 0 ? <p className="empty-bag">Your bag is empty. Choose something from the menu to get started.</p> : <><ul className="bag-list">{cart.map((item, index) => <li key={`${item.name}-${index}`}><div><strong>{item.quantity} × {item.name}</strong>{(item.heat || item.extras.length > 0) && <small>{item.heat ? `${item.heat} heat` : ''}{item.extras.length ? `${item.heat ? ' · ' : ''}${item.extras.join(', ')}` : ''}</small>}<button type="button" onClick={() => setCart(current => current.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></div><span>₱ {item.price}</span></li>)}</ul><div className="bag-total"><span>Total</span><strong>₱ {cart.reduce((total, item) => total + item.price, 0)}</strong></div><p className="bag-note">This is a menu preview. Online checkout is not connected yet.</p></>}</div>}
      </dialog>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
